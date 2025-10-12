
export const metadata = { title: "Field Guides | Phoenix Creek Supply" };

const posts = [
  { title: "Best Prospecting Gear for Montana Rivers (2025 Field Picks)", slug: "prospecting-gear-2025" },
  { title: "Bushcraft Axes That Actually Split (Field-Tested)", slug: "bushcraft-axes-2025" }
];

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Field Guides</h1>
      <div className="grid gap-4">
        {posts.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="card">
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-400 mt-2">Read more</p>
          </a>
        ))}
      </div>
    </div>
  );
}
