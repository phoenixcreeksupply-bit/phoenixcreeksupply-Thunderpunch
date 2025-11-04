export async function POST() {
  // Clear the cookie
  const cookie = `promo_admin=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0;`;
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Set-Cookie': cookie, 'Content-Type': 'application/json' },
  });
}
