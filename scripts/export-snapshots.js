#!/usr/bin/env node
/*
 * Export SVG snapshots to PNG and JPG files.
 * Writes outputs to snapshots/exports/ (created if missing).
 * Requires `sharp` to be installed (devDependency). Run: npm run export-snapshots
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function ensureDir(dir) {
  try { await fs.promises.mkdir(dir, { recursive: true }); } catch (e) { /* ignore */ }
}

async function exportImage(task, outDir) {
  const inputPath = task.input;
  if (!fs.existsSync(inputPath)) {
    console.warn(`Skipping ${task.name}: input not found at ${inputPath}`);
    return [];
  }

  const buffer = await fs.promises.readFile(inputPath);
  const outputs = [];

  const pngOut = path.join(outDir, `${task.name}-${task.width}x${task.height}.png`);
  await sharp(buffer)
    .resize(task.width, task.height, { fit: 'cover' })
    .png({ quality: 100 })
    .toFile(pngOut);
  outputs.push(pngOut);

  const jpgOut = path.join(outDir, `${task.name}-${task.width}x${task.height}.jpg`);
  await sharp(buffer)
    .resize(task.width, task.height, { fit: 'cover' })
    .jpeg({ quality: 92 })
    .toFile(jpgOut);
  outputs.push(jpgOut);

  return outputs;
}

async function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const outDir = path.join(repoRoot, 'snapshots', 'exports');
  await ensureDir(outDir);

  const tasks = [
    {
      name: 'PCS-share',
      input: path.join(repoRoot, 'public', 'brand', 'PCS-share.svg'),
      width: 1200,
      height: 630
    },
    {
      name: 'actionheat',
      input: path.join(repoRoot, 'public', 'images', 'actionheat-300x250.svg'),
      width: 300,
      height: 250
    }
  ];

  const created = [];
  for (const t of tasks) {
    try {
      const outs = await exportImage(t, outDir);
      created.push(...outs);
      console.log('Exported:', outs.join(', '));
    } catch (err) {
      console.error('Failed to export', t.name, err.message || err);
    }
  }

  if (created.length === 0) {
    console.log('No exports created. Make sure the input SVGs exist.');
    process.exit(0);
  }

  console.log('\nCompleted exports. Files written to:', outDir);
}

main().catch(err => { console.error(err); process.exit(1); });
