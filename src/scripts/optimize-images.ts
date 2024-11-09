import { promises as fs } from 'fs'
import path from 'path'

import sharp from 'sharp'

const SIZES = [352, 576, 880] // Responsive sizes
const INPUT_DIR = 'assets/pics'
const OUTPUT_DIR = 'public/images'

async function optimizeImage(inputPath: string) {
  const filename = path.basename(inputPath, path.extname(inputPath))

  // Create WebP version
  await sharp(inputPath).webp({ quality: 80 }).toFile(`${OUTPUT_DIR}/${filename}.webp`)

  // Create responsive JPEGs
  for (const width of SIZES) {
    await sharp(inputPath)
      .resize(width)
      .jpeg({ quality: 80, progressive: true })
      .toFile(`${OUTPUT_DIR}/${filename}-${width}w.jpg`)
  }

  // Create blur placeholder
  const blurBase64 = await sharp(inputPath)
    .resize(10)
    .blur()
    .toBuffer()
    .then((buffer) => `data:image/jpeg;base64,${buffer.toString('base64')}`)

  return {
    original: inputPath,
    webp: `${OUTPUT_DIR}/${filename}.webp`,
    srcset: SIZES.map((w) => `${OUTPUT_DIR}/${filename}-${w}w.jpg ${w}w`).join(', '),
    blur: blurBase64,
  }
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  const images = await fs.readdir(INPUT_DIR)

  const results = await Promise.all(
    images
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
      .map((file) => optimizeImage(path.join(INPUT_DIR, file)))
  )

  // Generate config file
  await fs.writeFile(
    'src/config/optimized-photos.ts',
    `export const optimizedPhotos = ${JSON.stringify(results, null, 2)}`
  )
}

main().catch(console.error)
