import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "PCS Journal — Creekside Reflections & Field Notes",
  description:
    "The Phoenix Creek Supply Journal — stories, reflections, reviews, and field notes from Monroe and the PCS frontier.",
};

const posts = [
  {
    title: "Creekside with Monroe — Where Have All the Good Neighbors Gone?",
    slug: "creekside-with-monroe",
    description:
      "A reflection on community, resilience, and the disappearance of real neighborly connection.",
    image: "/blog/creekside-header.jpg",
  },
  {
    title: "ActionHeat 5V Heated Jacket Review",
    slug: "actionheat-5v-heated-jacket-review",
    description:
      "A PCS review of ActionHeat's 5V Heated Softshell Jacket — real-world warmth and performance.",
    image: "/blog/actionheat-header.jpg",
  },
];

export default function BlogIndex() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-4 space-y-12">
      <h1 className="text-4xl font-bold tracking-wide">The Journal</h1>
      <p className="text-gray-300 text-lg">
        Reflections, field notes, and stories from the Phoenix Creek frontier.
      </p>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all shadow-lg"
          >
            <div className="relative w-full h-56">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:opacity-90 transition"
              />
            </div>
            <div className="p-5 space-y-2">
              <h2 className="text-2xl font-bold group-hover:text-amber-400 transition">
                {post.title}
              </h2>
              <p className="text-gray-300">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
