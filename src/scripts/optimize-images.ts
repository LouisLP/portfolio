// scripts/optimize-images.ts
import { promises as fs } from 'fs'
import path from 'path'

import sharp from 'sharp'

interface ImageOutput {
  original: string
  webp: string
  srcset: string
  blur: string
}

const SIZES = [352, 576, 880]
const INPUT_DIR = 'src/assets/pics'
const OUTPUT_DIR = 'public/images'

async function optimizeImage(inputPath: string): Promise<ImageOutput> {
  const filename = path.basename(inputPath, path.extname(inputPath))
  const outputBasePath = path.join(OUTPUT_DIR, filename)

  // Create directories if they don't exist
  await fs.mkdir(OUTPUT_DIR, { recursive: true })

  // Create WebP version
  await sharp(inputPath).webp({ quality: 80 }).toFile(`${outputBasePath}.webp`)

  // Create responsive JPEGs
  const resizedImages = await Promise.all(
    SIZES.map(async (width) => {
      const outputPath = `${outputBasePath}-${width}w.jpg`
      await sharp(inputPath)
        .resize(width)
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath)
      return `${outputPath} ${width}w`
    })
  )

  // Create blur placeholder
  const blurBase64 = await sharp(inputPath)
    .resize(10)
    .blur()
    .toBuffer()
    .then((buffer) => `data:image/jpeg;base64,${buffer.toString('base64')}`)

  return {
    original: inputPath,
    webp: `${outputBasePath}.webp`,
    srcset: resizedImages.join(', '),
    blur: blurBase64,
  }
}

async function main() {
  try {
    const images = await fs.readdir(INPUT_DIR)
    const imageFiles = images.filter((file) => /\.(jpg|jpeg|png)$/i.test(file))

    const results = await Promise.all(
      imageFiles.map((file) => optimizeImage(path.join(INPUT_DIR, file)))
    )

    // Generate optimized photos config
    const configOutput = `
import { type Photo } from './types'

export const optimizedPhotos: Photo[] = ${JSON.stringify(results, null, 2)}
`

    await fs.writeFile('src/config/optimized-photos.ts', configOutput)
    console.log('Image optimization complete!')
  } catch (error) {
    console.error('Error optimizing images:', error)
    process.exit(1)
  }
}

main()
