#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const sourceImage = path.join(repoRoot, 'public', 'images', 'actionheat-300x250.jpg');
const headerOutput = path.join(repoRoot, 'public', 'blog', 'actionheat-header.jpg');
const ogOutput = path.join(repoRoot, 'public', 'blog', 'actionheat-og.jpg');

async function resizeActionHeatImages() {
  try {
    // Generate 1600px wide header image
    await sharp(sourceImage)
      .resize(1600, null, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(headerOutput);
    console.log('✓ Created actionheat-header.jpg (1600px wide)');

    // Generate 1200x630 OG image
    await sharp(sourceImage)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(ogOutput);
    console.log('✓ Created actionheat-og.jpg (1200x630)');

    console.log('\nActionHeat blog images ready for use.');
  } catch (err) {
    console.error('Error resizing ActionHeat images:', err);
    process.exit(1);
  }
}

resizeActionHeatImages();
