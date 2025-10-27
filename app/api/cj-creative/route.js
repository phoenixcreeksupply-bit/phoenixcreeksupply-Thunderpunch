import { NextResponse } from 'next/server';

// Server-side proxy to fetch a CJ creative JSON and extract a usable image URL.
// Usage: POST { url: 'https://members.cj.com/.../linkcreative/123.json' }
// Environment variables used (optional): CJ_API_KEY or CJ_USERNAME & CJ_PASSWORD

function findImage(o) {
  if (!o) return null;
  if (typeof o === 'string') {
    // common image extensions
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

export async function POST(request) {
  try {
    const body = await request.json();
    const { url } = body || {};
    if (!url) return NextResponse.json({ ok: false, error: 'Missing url in request body' }, { status: 400 });

    let parsed;
    try {
      parsed = new URL(url);
    } catch (err) {
      return NextResponse.json({ ok: false, error: 'Invalid URL' }, { status: 400 });
    }

    // Prevent SSRF: only allow fetching CJ member JSONs from members.cj.com
    const host = parsed.host || '';
    if (!host.endsWith('members.cj.com')) {
      return NextResponse.json({ ok: false, error: 'Forbidden host' }, { status: 403 });
    }

    const headers = {
      'Accept': 'application/json',
      // pass a user-agent for compatibility
      'User-Agent': 'PhoenixCreekSupply/1.0 (+https://phoenixcreeksupply.com)'
    };

    const apiKey = process.env.CJ_API_KEY;
    const cjUser = process.env.CJ_USERNAME;
    const cjPass = process.env.CJ_PASSWORD;
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    } else if (cjUser && cjPass) {
      // Basic auth if username/password provided
      const creds = Buffer.from(`${cjUser}:${cjPass}`).toString('base64');
      headers['Authorization'] = `Basic ${creds}`;
    }

    const res = await fetch(url, { headers });
    if (!res.ok) {
      return NextResponse.json({ ok: false, error: 'CJ fetch failed', status: res.status }, { status: 502 });
    }

    const json = await res.json();

    const imageUrl = findImage(json);
    if (!imageUrl) {
      return NextResponse.json({ ok: false, error: 'No image URL found in CJ JSON', data: json }, { status: 404 });
    }

    return NextResponse.json({ ok: true, imageUrl });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
