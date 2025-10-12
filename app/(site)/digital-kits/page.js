export const metadata = { title: "Digital Kits | Phoenix Creek Supply" };

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
    href: "#" // placeholder until you drop the live SKU
  },
  { 
    title: "OMAD Power Plan", 
    description: "One meal a day, 10 weeks, powerful results.", 
    price: "$19", 
    href: "#" // placeholder until you drop the live SKU
  }
];

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Digital Kits</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {kits.map(k => (
          <div key={k.title} className="card">
            <h2 className="text-xl font-semibold">{k.title}</h2>
            <p className="mt-2 text-gray-300">{k.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-400">{k.price}</span>
              <a 
                href={k.href} 
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
  );
}
