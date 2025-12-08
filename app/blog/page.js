import Link from "next/link";

export const metadata = {
  title: "PCS Blog | Phoenix Creek Supply",
  description:
    "Field-tested guides, gear reviews, and modern stoic insights from Phoenix Creek Supply. Explore rugged tools, winter gear, prospecting methods, and survival knowledge.",
};

const posts = [
  {
    title: "Winter Gear Guide 2025",
    description:
      "Montana-tested jackets, boots, axes, backup power, and survival picks. A complete field-ready winter system.",
    href: "/blog/winter-gear-guide-2025",
  },
  {
    title: "Cleanup Buddy Review (2025)",
    description:
      "PCS field test of the Dream Mat Cleanup Buddy — micro-gold recovery performance, setup, and real-world results.",
    href: "/blog/cleanup-buddy-review-2025",
  },
  {
    title: "Muck Arctic Sport Steel Toe Review",
    description:
      "The winter boot built for men who work in real cold — insulation, traction, durability, and PCS testing.",
    href: "/blog/muck-arctic-sport-steel-toe",
  },
  {
    title: "ActionHeat 5V Heated Jacket Review",
    description:
      "Heated gear that actually works — performance, battery life, layering compatibility, and field recommendations.",
    href: "/blog/actionheat-5v-heated-jacket-review",
  },
  {
    title: "Jackery HomePower 3600 Review",
    description:
      "PCS evaluation of the Jackery HomePower 3600 — blackout readiness, heater compatibility, and winter reliability.",
    href: "/blog/jackery-homepower-3600",
  },
  {
    title: "Winter Doesn’t Care — The PCS Mindset",
    description:
      "A modern stoic field essay on preparing mentally and physically for unforgiving winter conditions.",
    href: "/blog/winter-doesnt-care",
  },
  {
    title: "Introduction to Gold Cleanup Techniques",
    description:
      "PCS breakdown of fine-gold separation methods — pans, Dream Mat, Blue Bowl, Miller table, and micro-tuning.",
    href: "/blog/cleanup-techniques-2025",
  },
  {
    title: "Modern Stoic Field Guide — Excerpt",
    description:
      "A philosophical grounding piece from the PCS Modern Stoic Field Guide — mental fortitude in harsh conditions.",
    href: "/blog/modern-stoic-guide-excerpt",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="blog-content mx-auto max-w-4xl px-6 py-20 prose prose-invert prose-lg prose-headings:font-semibold prose-a:text-yellow-300">
      <h1 className="mb-6">Phoenix Creek Supply Blog</h1>
      <p className="text-gray-300 mb-10">
        Rugged field guides, gear reviews, prospecting methods, and modern stoic
        insights built for men who live with intent. Every post is written to
        provide clarity, advantage, and real-world application.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="block p-5 rounded-xl border border-white/10 bg-black/30 hover:bg-black/40 transition shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2 text-yellow-300">
              {post.title}
            </h2>
            <p className="text-gray-300">{post.description}</p>
          </Link>
        ))}
      </div>

      <p className="mt-14 text-sm text-gray-500">
        More PCS field guides and gear reviews publish weekly.
      </p>
    </main>
  );
}
