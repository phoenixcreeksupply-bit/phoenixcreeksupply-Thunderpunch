#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // list staged files (added/modified)
  const out = execSync('git diff --cached --name-only --diff-filter=ACM', { encoding: 'utf8' });
  const files = out.split(/\r?\n/).filter(Boolean);
  if (files.length === 0) process.exit(0);

  const blocked = [];
  const large = [];

  files.forEach(f => {
    const name = path.basename(f).toLowerCase();
    // block any env files
    if (name === '.env' || name.startsWith('.env') || f.includes('/.env')) {
      blocked.push(f);
    }
    // check file size if it exists in working tree
    try {
      const full = path.resolve(f);
      if (fs.existsSync(full)) {
        const stat = fs.statSync(full);
        // 5 MB limit
        if (stat.size > 5 * 1024 * 1024) large.push({ f, size: stat.size });
      }
    } catch (e) {
      // ignore
    }
  });

  if (blocked.length > 0 || large.length > 0) {
    console.error('\nPre-commit check failed:');
    if (blocked.length > 0) {
      console.error('\n  - Commit contains .env files (blocked):');
      blocked.forEach(x => console.error('      ' + x));
    }
    if (large.length > 0) {
      console.error('\n  - Commit contains large files (>5MB):');
      large.forEach(x => console.error(`      ${x.f} (${Math.round(x.size/1024/1024*100)/100} MB)`));
    }
    console.error('\nPlease remove these files from the commit (git restore --staged <file>) or add them to .gitignore.');
    process.exit(1);
  }
  process.exit(0);
} catch (err) {
  console.error('Pre-commit check failed (git error):', err.message);
  process.exit(1);
}
