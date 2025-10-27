#!/usr/bin/env node
// Usage: node scripts/fetch-cj-creative.js <cj_json_url> [outputFilename]
// Requires Node 18+ (global fetch). Read CJ creds from env: CJ_API_KEY or CJ_USERNAME & CJ_PASSWORD

import fs from 'fs';
import path from 'path';

const url = process.argv[2];
const outName = process.argv[3] || 'king-camo-banner-400x262';
if (!url) {
  console.error('Usage: node scripts/fetch-cj-creative.js <cj_json_url> [outputFilename]');
  process.exit(2);
}

function findImage(o) {
  if (!o) return null;
  if (typeof o === 'string') {
    if (/\.(jpe?g|png|gif|webp|svg)(\?.*)?$/i.test(o)) return o;
    if (/^https?:\/\//i.test(o) && /(jpe?g|png|gif|webp|svg)/i.test(o)) return o;
    return null;
  }
  if (Array.isArray(o)) {
    for (const v of o) {
      const f = findImage(v);
      if (f) return f;
    }
    return null;
  }
  if (typeof o === 'object') {
    for (const k of Object.keys(o)) {
      const f = findImage(o[k]);
      if (f) return f;
    }
  }
  return null;
}

async function main() {
  try {
    const headers = { Accept: 'application/json', 'User-Agent': 'PhoenixCreekSupplyScript/1.0' };
    const apiKey = process.env.CJ_API_KEY;
    const cjUser = process.env.CJ_USERNAME;
    const cjPass = process.env.CJ_PASSWORD;
    if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`;
    else if (cjUser && cjPass) headers['Authorization'] = 'Basic ' + Buffer.from(`${cjUser}:${cjPass}`).toString('base64');

    console.log('Fetching CJ JSON...', url);
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.error('CJ JSON fetch failed:', res.status, res.statusText);
      process.exit(3);
    }
    const json = await res.json();
    const imageUrl = findImage(json);
    if (!imageUrl) {
      console.error('No image URL found in CJ JSON');
      process.exit(4);
    }
    console.log('Resolved image URL:', imageUrl);

    console.log('Downloading image...');
    const imgRes = await fetch(imageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!imgRes.ok) {
      console.error('Image download failed:', imgRes.status, imgRes.statusText);
      process.exit(5);
    }
    const contentType = imgRes.headers.get('content-type') || '';
    let ext = '';
    const m = contentType.match(/image\/(jpeg|png|gif|webp|svg\+xml)/i);
    if (m) {
      ext = m[1] === 'jpeg' ? 'jpg' : m[1].replace('+xml', 'svg');
    } else {
      const extMatch = imageUrl.match(/\.(jpe?g|png|gif|webp|svg)(\?.*)?$/i);
      ext = extMatch ? extMatch[1].replace('jpeg', 'jpg') : 'jpg';
    }

    const outPath = path.join(process.cwd(), 'public', 'images', `${outName}.${ext}`);
    const arrayBuffer = await imgRes.arrayBuffer();
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, Buffer.from(arrayBuffer));
    console.log('Saved image to', outPath);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main();
