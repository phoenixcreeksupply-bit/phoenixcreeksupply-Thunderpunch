import fs from 'fs';
import path from 'path';

const PROMOS_DIR = path.join(process.cwd(), 'public', 'promos');

export async function GET() {
  const folders = [];
  try {
    const entries = fs.readdirSync(PROMOS_DIR, { withFileTypes: true });
    for (const ent of entries) {
      if (!ent.isDirectory()) continue;
      const folderPath = path.join(PROMOS_DIR, ent.name);
      const activeFile = path.join(folderPath, 'active.html');
      if (!fs.existsSync(activeFile)) continue;

      // per-folder meta.json support
      // meta.json may contain { "active": true|false, "showOnHomepage": true|false }
      // Defaults: active=true, showOnHomepage=true (if file exists)
      const metaFile = path.join(folderPath, 'meta.json');
      if (fs.existsSync(metaFile)) {
        try {
          const raw = fs.readFileSync(metaFile, 'utf8');
          const meta = JSON.parse(raw || '{}');
          if (meta.hasOwnProperty('active') && meta.active === false) continue;
          if (meta.hasOwnProperty('showOnHomepage') && meta.showOnHomepage === false) continue;
        } catch (e) {
          // malformed meta.json — ignore and treat as visible
        }
      }

      folders.push(ent.name);
    }
  } catch (e) {
    // ignore errors and return empty list
  }

  // Small override: swap 'georgia-17193095' and 'muck-holiday' placement if both exist.
  try {
    const a = folders.indexOf('georgia-17193095');
    const b = folders.indexOf('muck-holiday');
    if (a !== -1 && b !== -1 && a < b) {
      // swap positions so muck-holiday appears where georgia was and vice-versa
      folders[a] = 'muck-holiday';
      folders[b] = 'georgia-17193095';
    }
  } catch (e) {
    // ignore swap errors
  }

  return new Response(JSON.stringify({ folders }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// NOTE: We intentionally keep the server-side listing simple (filesystem order),
// but allow a small, explicit swap for two common promos so the homepage
// placement can be adjusted without renaming folders. If both 'georgia-17193095'
// and 'muck-holiday' exist, swap their positions in the returned array so the
// promo staging on the homepage will render them in the swapped locations.
