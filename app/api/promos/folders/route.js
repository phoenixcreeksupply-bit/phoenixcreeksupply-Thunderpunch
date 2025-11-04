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
      if (fs.existsSync(activeFile)) {
        folders.push(ent.name);
      }
    }
  } catch (e) {
    // ignore errors and return empty list
  }

  return new Response(JSON.stringify({ folders }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
