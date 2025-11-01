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
