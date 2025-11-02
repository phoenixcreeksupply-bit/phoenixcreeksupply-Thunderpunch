export const metadata = { title: "Monroe's Specials | Phoenix Creek Supply" };

// Monroe's Specials
// This page is intended to host Amazon SiteStripe links (affiliate links generated via Amazon's SiteStripe).
// Replace the placeholder links below with the SiteStripe links you generate.

const products = [
  {
    title: "Example Prospecting Kit",
    href: "https://www.amazon.com/dp/EXAMPLE1?tag=yourtag-20",
    price: "$39.99",
    description: "A curated kit for prospecting and fieldwork. Replace with SiteStripe link."
  },
  {
    title: "Field Knife",
    href: "https://www.amazon.com/dp/EXAMPLE2?tag=yourtag-20",
    price: "$24.99",
    description: "A reliable fixed-blade knife. Replace with SiteStripe link."
  }
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Monroe's Specials</h1>
      <p className="text-gray-400 mb-8">Curated deals and recommended gear — links open Amazon in a new tab. Replace placeholders with your Amazon SiteStripe links when ready.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map(p => (
          <div key={p.title} className="card">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-gray-300">{p.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-400">{p.price}</span>
              <a
                href={p.href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="btn"
              >
                View on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-6">Tip: to create SiteStripe links, install Amazon SiteStripe in your account and copy the 'text' or 'link' version into the product hrefs above.</p>
    </main>
  );
}
