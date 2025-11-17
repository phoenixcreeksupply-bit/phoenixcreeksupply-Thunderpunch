
export const metadata = { title: "Journal | Phoenix Creek Supply" };

const posts = [
  { title: "Creekside with Monroe", slug: "creekside-with-monroe", description: "A reflection on community, resilience, and the changing nature of connection." }
];

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Journal</h1>
      <div className="grid gap-4">
        {posts.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="card">
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p className="text-sm text-gray-400 mt-2">{p.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
