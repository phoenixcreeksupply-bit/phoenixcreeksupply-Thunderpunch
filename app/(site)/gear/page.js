export const metadata = { title: "Tools & Gear | Phoenix Creek Supply" };

import affiliates from './affiliates';
import Link from 'next/link';

export default function Gear() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Tools & Gear</h1>
      <p className="text-gray-300 mb-8">Affiliate partners and recommended gear — updated regularly as we add new partners.</p>

      {affiliates.length === 0 ? (
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
          <p className="text-lg text-gray-300 mb-4">No affiliates listed yet — coming soon.</p>
          <p className="text-sm text-gray-400">When you have affiliate links from King Camo, paste them here and I'll add the cards.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {affiliates.map(a => (
            <Link key={a.slug} href={`/gear/${a.slug}`} className="block group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:scale-[1.01] transform transition p-4">
              <div className="w-full h-40 relative rounded-md overflow-hidden mb-4 bg-gray-800">
                {a.logo ? (
                  <img src={a.logo} alt={a.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">No image</div>
                )}
                <div className="absolute bottom-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-md text-sm font-semibold">Shop</div>
              </div>

              <h2 className="text-lg font-semibold group-hover:text-yellow-300">{a.name}</h2>
              <p className="mt-2 text-gray-300 text-sm line-clamp-3">{a.description}</p>
              {a.category && <div className="mt-3 text-xs text-gray-400">{a.category}</div>}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-xs text-gray-200">Visit listing</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
