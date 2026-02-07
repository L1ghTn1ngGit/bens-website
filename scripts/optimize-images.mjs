/**
 * Image Optimization Script
 * Creates responsive image variants (small, medium, large) + WebP versions
 * Run: node scripts/optimize-images.mjs
 */

import sharp from 'sharp'
import { readdir, mkdir, stat } from 'fs/promises'
import { join, parse } from 'path'

const INPUT_DIR = 'public/assets/images'
const OUTPUT_DIR = 'public/assets/images'

const SIZES = [
  { suffix: '-sm', width: 400, quality: 75 },
  { suffix: '-md', width: 800, quality: 80 },
  { suffix: '-lg', width: 1200, quality: 85 },
]

async function optimizeImages() {
  const files = await readdir(INPUT_DIR)
  const jpgFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !/-sm\.|\.md\.|\.lg\.|-md\.|-lg\./.test(f))

  console.log(`Found ${jpgFiles.length} source images to optimize...\n`)

  for (const file of jpgFiles) {
    const { name, ext } = parse(file)
    const inputPath = join(INPUT_DIR, file)
    const fileStat = await stat(inputPath)

    console.log(`Processing: ${file} (${Math.round(fileStat.size / 1024)}KB)`)

    for (const size of SIZES) {
      // JPEG variant
      const jpgOut = join(OUTPUT_DIR, `${name}${size.suffix}${ext}`)
      await sharp(inputPath)
        .resize(size.width, null, { withoutEnlargement: true, fit: 'inside' })
        .jpeg({ quality: size.quality, mozjpeg: true })
        .toFile(jpgOut)

      const jpgStat = await stat(jpgOut)
      console.log(`  → ${name}${size.suffix}${ext} (${size.width}w, ${Math.round(jpgStat.size / 1024)}KB)`)

      // WebP variant
      const webpOut = join(OUTPUT_DIR, `${name}${size.suffix}.webp`)
      await sharp(inputPath)
        .resize(size.width, null, { withoutEnlargement: true, fit: 'inside' })
        .webp({ quality: size.quality })
        .toFile(webpOut)

      const webpStat = await stat(webpOut)
      console.log(`  → ${name}${size.suffix}.webp (${size.width}w, ${Math.round(webpStat.size / 1024)}KB)`)
    }

    console.log('')
  }

  console.log('✓ All images optimized!')
}

optimizeImages().catch(console.error)
