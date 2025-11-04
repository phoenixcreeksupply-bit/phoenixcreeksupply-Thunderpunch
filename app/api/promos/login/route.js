export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const { token } = body || {};
  const secret = process.env.PROMO_ADMIN_TOKEN;
  if (!secret || token !== secret) {
    return new Response('Invalid token', { status: 401 });
  }

  // Set an HttpOnly cookie for subsequent requests
  const maxAge = 60 * 60 * 24 * 7; // 7 days
  const cookie = `promo_admin=${secret}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge};`;

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Set-Cookie': cookie, 'Content-Type': 'application/json' },
  });
}
