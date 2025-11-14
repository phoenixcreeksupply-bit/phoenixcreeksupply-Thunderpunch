import fs from 'fs';
import path from 'path';

const PROMOS_DIR = path.join(process.cwd(), 'public', 'promos');

export async function GET() {
  let folders = [];
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

  // Small override: place 'georgia-17193095' immediately after 'jackery'
  // and move 'lasermax' into Georgia's original slot if both are present.
  // This allows reordering without renaming folders.
  try {
    const original = Array.from(folders);
    const idxGeo = original.indexOf('georgia-17193095');
    const idxLaser = original.indexOf('lasermax');
    const idxJack = original.indexOf('jackery');

    // Only perform the targeted reorder when georgia and jackery exist.
    if (idxGeo !== -1 && idxJack !== -1) {
      // Remove georgia and lasermax from the current list so we can re-insert.
      folders = folders.filter((f) => f !== 'georgia-17193095' && f !== 'lasermax');

      // Insert georgia immediately after jackery's current position.
      const jackPos = folders.indexOf('jackery');
      if (jackPos !== -1) {
        folders.splice(jackPos + 1, 0, 'georgia-17193095');
      } else {
        // fallback: push georgia to the front if jackery can't be found
        folders.unshift('georgia-17193095');
      }

      // If lasermax existed originally, try to put it where georgia used to be
      // (i.e., at original idxGeo). Clamp to array bounds.
      if (idxLaser !== -1) {
        const insertAt = Math.min(Math.max(0, idxGeo), folders.length);
        folders.splice(insertAt, 0, 'lasermax');
      }
    }
  } catch (e) {
    // ignore reorder errors and return filesystem order
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
