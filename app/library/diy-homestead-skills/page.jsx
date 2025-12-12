import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DIY, Homestead & Practical Skills Library | Phoenix Creek Supply",
  description:
    "A curated library of practical knowledge — building, fixing, homesteading, and self-reliance. Skills that create independence, resilience, and long-term capability.",
};

const books = [
  {
    title: "The Encyclopedia of Country Living",
    author: "Carla Emery",
    image: "/images/library/diy-homestead-skills/country-living.jpg",
    amazon: "https://amzn.to/496HZK1",
    bookshop: "#",
  },
  {
    title: "Back to Basics",
    author: "Abigail Gehring",
    image: "/images/library/diy-homestead-skills/back-to-basics.jpg",
    amazon: "https://amzn.to/4q10ULX",
    bookshop: "#",
  },
  {
    title: "The Self-Sufficient Life and How to Live It",
    author: "John Seymour",
    image: "/images/library/diy-homestead-skills/self-sufficient-life.jpg",
    amazon: "https://amzn.to/48Om215",
    bookshop: "#",
  },
];

export default function DIYHomesteadSkillsLibrary() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">
          DIY, Homestead & Practical Skills
        </h1>
        <p className="mt-4 text-lg text-neutral-400 max-w-3xl">
          This library is about competence. Building things. Fixing what breaks.
          Feeding yourself. Maintaining tools, land, and systems. Skills that
          remove dependency and build quiet confidence.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.title}
            className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 flex flex-col"
          >
            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-xl">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-neutral-400 mb-4">{book.author}</p>

            <div className="mt-auto flex gap-3">
              <Link
                href={book.amazon}
                className="text-sm px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
              >
                Amazon
              </Link>
              <Link
                href={book.bookshop}
                className="text-sm px-3 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
              >
                Bookshop
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
