import fs from 'fs';
import path from 'path';

const PROMOS_DIR = path.join(process.cwd(), 'public', 'promos');
const ACTIVE_FILE = path.join(PROMOS_DIR, 'active.json');

function ensureActiveFile() {
  try {
    if (!fs.existsSync(ACTIVE_FILE)) {
      fs.writeFileSync(ACTIVE_FILE, JSON.stringify({ active: [] }, null, 2));
    }
  } catch (e) {
    // ignore
  }
}

export async function GET() {
  ensureActiveFile();
  const folders = [];
  try {
    const entries = fs.readdirSync(PROMOS_DIR, { withFileTypes: true });
    for (const ent of entries) {
      if (ent.isDirectory()) folders.push(ent.name);
    }
  } catch (e) {
    // directory may not exist
  }
  let active = [];
  try {
    const raw = fs.readFileSync(ACTIVE_FILE, 'utf8');
    active = JSON.parse(raw).active || [];
  } catch (e) {
    active = [];
  }
  return new Response(JSON.stringify({ folders, active }), { status: 200 });
}

export async function POST(request) {
  const secret = process.env.PROMO_ADMIN_TOKEN;
  const headerToken = request.headers.get('x-promo-admin-token');
  if (!secret || headerToken !== secret) {
    return new Response('Forbidden', { status: 403 });
  }

  ensureActiveFile();
  const body = await request.json();
  const { folder, enable } = body || {};
  if (!folder) return new Response('Missing folder', { status: 400 });

  let active = [];
  try {
    const raw = fs.readFileSync(ACTIVE_FILE, 'utf8');
    active = JSON.parse(raw).active || [];
  } catch (e) {
    active = [];
  }

  const set = new Set(active);
  if (enable) set.add(folder); else set.delete(folder);

  const newActive = Array.from(set);
  try {
    fs.writeFileSync(ACTIVE_FILE, JSON.stringify({ active: newActive }, null, 2));
  } catch (e) {
    return new Response('Failed to write', { status: 500 });
  }

  return new Response(JSON.stringify({ active: newActive }), { status: 200 });
}
