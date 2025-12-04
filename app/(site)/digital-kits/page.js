export const metadata = { title: "Digital Kits | Phoenix Creek Supply" };

// Toggle this to 'true' (build-time env) to show the Claim Scout Service card
// without editing code. Use NEXT_PUBLIC_SHOW_CLAIM_SERVICE=true
const SHOW_CLAIM = process.env.NEXT_PUBLIC_SHOW_CLAIM_SERVICE === 'true';

const kits = [
  { 
    title: "AI Legacy Framework", 
    description: "Your complete system for discipline, growth, and automation.", 
    price: "$25", 
    href: "https://phoenixcreeksupply.gumroad.com/l/lbytr" 
  },
  { 
    title: "Modern Stoic Field Guide", 
    description: "A digital guide for rugged stoics — tools, discipline, and philosophy.", 
    price: "$17",
    href: "https://phoenixcreeksupply.gumroad.com/l/gnqvw"
  },
  { 
    title: "Montana Prospecting Starter Pack", 
    description: "Checklist, field notes, and tool picks.", 
    price: "$20",
    href: "https://phoenixcreeksupply.gumroad.com/l/pqrul"
  }
  },
  { 
    title: "OMAD Power Plan", 
    description: "One meal a day, 10 weeks, powerful results.", 
    price: "$19", 
    href: "https://phoenixcreeksupply.gumroad.com/l/cgdlmg"
  }
  ,{ 
    title: "Claim Scout Service",
    description: "Get a professional-grade claim map built for your prospecting or exploration needs.",
    price: "$79",
    href: "https://phoenixcreeksupply.gumroad.com/l/vbxwz",
    // Hidden by default. Control visibility with NEXT_PUBLIC_SHOW_CLAIM_SERVICE env var.
    // Do NOT delete this entry unless you want it permanently removed.
    hidden: true
  }
];

export default function Page() {
  return (
    <main className="relative w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/campsitenohatchet.jpg')" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Digital Kits</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {kits.filter(k => !k.hidden || SHOW_CLAIM).map(k => (
          <div key={k.title} className="card">
            <h2 className="text-xl font-semibold">{k.title}</h2>
            <p className="mt-2 text-gray-300">{k.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-400">{k.price}</span>
              <a 
                href={appendUtm(k.href)} 
                target="_blank" 
                rel="nofollow sponsored noopener" 
                className="btn"
              >
                Get Kit
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-6">Links open Gumroad checkout.</p>
      </div>
    </main>
  );
}

function appendUtm(raw) {
  try {
    // only process absolute http(s) links; leave relative/internal alone
    if (!raw || (!raw.startsWith('http://') && !raw.startsWith('https://'))) return raw;
    const url = new URL(raw);
    const params = url.searchParams;
    if (!params.has('utm_source')) params.append('utm_source', 'pcs');
    if (!params.has('utm_medium')) params.append('utm_medium', 'site');
    if (!params.has('utm_campaign')) params.append('utm_campaign', 'winter_drop_2025');
    return url.toString();
  } catch (e) {
    return raw;
  }
}
