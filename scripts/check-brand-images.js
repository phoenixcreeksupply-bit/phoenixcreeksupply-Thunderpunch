#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const publicBrand = path.join(repoRoot, 'public', 'brand');

const IGNORE_DIRS = new Set(['.git', 'node_modules', '.next', 'snapshots/exports']);

async function walk(dir, out = []) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (IGNORE_DIRS.has(e.name)) continue;
      await walk(p, out);
    } else {
      out.push(p);
    }
  }
  return out;
}

(async function main(){
  try{
    const files = await walk(repoRoot);
    const re = /\/brand\/([A-Za-z0-9_.-]+\.(png|jpe?g|svg|webp))/gi;
    const found = new Set();
    for (const f of files) {
      // skip scanning files that are likely binary in public/brand itself
      if (f.includes(path.join('public', 'brand'))) continue;
      let content;
      try { content = await fs.readFile(f, 'utf8'); } catch (e) { continue; }
      let m;
      while ((m = re.exec(content)) !== null) {
        found.add(m[1]);
      }
    }

    if (found.size === 0) {
      console.log('No /brand/* image references found in repository.');
      process.exit(0);
    }

    const missing = [];
    for (const name of found) {
      const target = path.join(publicBrand, name);
      try {
        await fs.access(target);
      } catch (e) {
        missing.push(name);
      }
    }

    if (missing.length > 0) {
      console.error('Missing brand images referenced in repo:', missing.join(', '));
      process.exit(2);
    }

    console.log('All referenced /brand/* images exist in public/brand/');
    process.exit(0);
  } catch (err) {
    console.error('Error while checking brand images:', err);
    process.exit(1);
  }
})();
