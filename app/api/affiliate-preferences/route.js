// Simple server route that returns affiliate preferences.
// Set an environment variable named AFFILIATE_PREFS to a JSON string like:
// {
//   "muck-boot": "https://www.dpbolvw.net/click-101573160-14323207",
//   "king-camo": "https://www.dpbolvw.net/click-101573160-15784073"
// }

export async function GET() {
  const prefsRaw = process.env.AFFILIATE_PREFS || process.env.NEXT_PUBLIC_AFFILIATE_PREFS;
  let prefs = {};
  if (prefsRaw) {
    try {
      prefs = JSON.parse(prefsRaw);
    } catch (e) {
      // if parsing fails, return empty object
      console.error('Invalid AFFILIATE_PREFS JSON', e);
      prefs = {};
    }
  }

  return new Response(JSON.stringify(prefs), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// Persist preferences. Behavior:
// - If GITHUB_TOKEN and GITHUB_REPO are set, commit a file 'affiliate-prefs.json' to the repo via GitHub API.
// - Else if VERCEL_TOKEN and VERCEL_PROJECT_ID are set, set the AFFILIATE_PREFS environment variable via Vercel API (will trigger redeploy).
// - Else, write to a local file 'affiliate-prefs.json' (useful in dev; not persistent on serverless).
import fs from 'fs';
import path from 'path';

async function commitToGitHub(repo, token, content) {
  const api = 'https://api.github.com';
  const filePath = 'affiliate-prefs.json';
  const getUrl = `${api}/repos/${repo}/contents/${filePath}`;

  // get existing file to obtain sha
  const existing = await fetch(getUrl, { headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' } });
  let sha = null;
  if (existing.ok) {
    const json = await existing.json();
    sha = json.sha;
  }

  const putRes = await fetch(getUrl, {
    method: 'PUT',
    headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github.v3+json' },
    body: JSON.stringify({ message: 'Update affiliate prefs', content: Buffer.from(content).toString('base64'), sha }),
  });
  if (!putRes.ok) {
    const txt = await putRes.text();
    throw new Error('GitHub commit failed: ' + txt);
  }
  return await putRes.json();
}

async function setVercelEnv(projectId, token, value) {
  // Vercel API: create or update env var. For simplicity, we'll create a new env var entry (name AFFILIATE_PREFS).
  const api = 'https://api.vercel.com';
  const url = `${api}/v9/projects/${projectId}/env`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'AFFILIATE_PREFS', value, target: ['preview','production'] }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error('Vercel env set failed: ' + txt);
  }
  return await res.json();
}

export async function POST(req) {
  try {
    // simple admin password protection: if ADMIN_PASSWORD is configured, require matching header
    const adminHeader = req.headers.get('x-admin-password');
    const ADMIN_PW = process.env.ADMIN_PASSWORD;
    if (ADMIN_PW) {
      if (!adminHeader || adminHeader !== ADMIN_PW) {
        return new Response(JSON.stringify({ ok: false, error: 'Unauthorized' }), { status: 401 });
      }
    }

    const body = await req.json();
    const content = JSON.stringify(body, null, 2);

    const githubRepo = process.env.GITHUB_REPO; // e.g. owner/repo
    const githubToken = process.env.GITHUB_TOKEN;
    const vercelToken = process.env.VERCEL_TOKEN;
    const vercelProject = process.env.VERCEL_PROJECT_ID;

    if (githubRepo && githubToken) {
      const result = await commitToGitHub(githubRepo, githubToken, content);
      return new Response(JSON.stringify({ ok: true, source: 'github', result }), { status: 200 });
    }

    if (vercelToken && vercelProject) {
      const result = await setVercelEnv(vercelProject, vercelToken, content);
      return new Response(JSON.stringify({ ok: true, source: 'vercel', result }), { status: 200 });
    }

    // Fallback: write to repository file (works in local dev). Note: not persistent on serverless platforms.
    const outPath = path.join(process.cwd(), 'affiliate-prefs.json');
    fs.writeFileSync(outPath, content, 'utf8');
    return new Response(JSON.stringify({ ok: true, source: 'file', path: outPath }), { status: 200 });
  } catch (e) {
    console.error('Failed to persist affiliate prefs', e);
    return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500 });
  }
}
