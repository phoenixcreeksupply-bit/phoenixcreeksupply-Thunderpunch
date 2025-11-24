export async function GET() {
  await fetch(
    "https://www.google.com/ping?sitemap=https://www.phoenixcreeksupply.com/sitemap.xml"
  );
  return Response.json({ ok: true });
}
