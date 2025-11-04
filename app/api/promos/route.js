// Promo admin API has been removed. Keep route handlers that return 404 so builds and imports remain stable.
export async function GET() {
  return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
}

export async function POST() {
  return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
}
