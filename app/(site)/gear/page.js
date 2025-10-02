
export const metadata = { title: "Tools & Gear | Phoenix Creek Supply" };

const picks = [
  { title: "Sluice Box", href: "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20" },
  { title: "Gold Pan Kit", href: "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20" },
  { title: "Water Filter", href: "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20" },
  { title: "Bushcraft Axe", href: "https://www.amazon.com/dp/ASIN?tag=YOURTAG-20" }
];

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Tools & Gear</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {picks.map(p => (
          <div key={p.title} className="card flex items-center justify-between">
            <span>{p.title}</span>
            <a href={p.href} target="_blank" rel="nofollow sponsored noopener" className="btn">View</a>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-6">As an Amazon Associate, we earn from qualifying purchases.</p>
    </div>
  );
}
