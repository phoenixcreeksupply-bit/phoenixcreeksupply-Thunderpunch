#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

async function run() {
  try {
    const sharp = require('sharp');
    const repoRoot = path.resolve(__dirname, '..');
    const src = path.join(repoRoot, 'public', 'images', 'drive-download-20251106T084609Z-1-001', '20250713_152156.jpg');
    if (!fs.existsSync(src)) {
      console.error('Source image not found:', src);
      process.exit(2);
    }

    const outDir = path.join(repoRoot, 'public', 'blog');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const headerOut = path.join(outDir, 'creekside-header.jpg');
    const ogOut = path.join(outDir, 'creekside-og.jpg');

    console.log('Creating header image ->', headerOut);
    await sharp(src)
      .rotate()
      .resize({ width: 1600 })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(headerOut);

    console.log('Creating OG image ->', ogOut);
    await sharp(src)
      .rotate()
      .resize(1200, 630, { fit: 'cover', position: 'centre' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(ogOut);

    console.log('Done: images generated.');
    process.exit(0);
  } catch (err) {
    console.error('Error resizing images:', err);
    process.exit(1);
  }
}

run();
