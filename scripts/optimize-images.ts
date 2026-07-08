/**
 * Compresses images in public/assets in place (same filename and format,
 * so no source references need updating). Skips files that would not shrink
 * by a meaningful amount. Run with: npm run optimize-images
 */
import { readdir, stat, rename, unlink } from 'node:fs/promises'
import path from 'node:path'

import sharp from 'sharp'

const ASSETS_DIR = path.resolve(import.meta.dirname, '../public/assets')
const MAX_WIDTH = 2000
const MIN_SAVINGS_RATIO = 0.1 // only overwrite if at least 10% smaller

const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function collectImages(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const files: string[] = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectImages(full)))
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

async function optimize(file: string): Promise<void> {
  const ext = path.extname(file).toLowerCase()
  const before = (await stat(file)).size

  let pipeline = sharp(file).rotate() // respect EXIF orientation
  const { width } = await sharp(file).metadata()
  if (width && width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH })
  }

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true })
  } else if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 90 })
  } else {
    pipeline = pipeline.webp({ quality: 80 })
  }

  const tmp = `${file}.tmp${ext}`
  await pipeline.toFile(tmp)
  const after = (await stat(tmp)).size

  if (after < before * (1 - MIN_SAVINGS_RATIO)) {
    await rename(tmp, file)
    console.log(
      `${path.relative(ASSETS_DIR, file)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`
    )
  } else {
    await unlink(tmp)
    console.log(`${path.relative(ASSETS_DIR, file)}: kept (already optimized)`)
  }
}

const files = await collectImages(ASSETS_DIR)
console.log(`Found ${files.length} images in public/assets\n`)
for (const file of files) {
  await optimize(file)
}
