export const metadata = {
  title: "Monroe’s Library | Phoenix Creek Supply",
  description:
    "A curated bookshelf of the titles that forged Monroe — discipline, grit, stoicism, and hard-earned clarity.",
};

const books = [
  {
    title: "Extreme Ownership",
    author: "Jocko Willink & Leif Babin",
    image: "/images/library/extreme-ownership.jpg",
    amazon:
      "https://amzn.to/4oMaguc",
    blurb:
      "This is leadership under live fire. The idea is simple: everything in your world is your responsibility. Men who truly adopt this stop blaming and start building.",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius (Trans. Gregory Hays)",
    image: "/images/library/meditations-hays.jpg",
    amazon:
      "https://amzn.to/3MtKa1A",
    blurb:
      "The private notes of an emperor trying to stay honorable while carrying the weight of an empire. This is the backbone of modern stoicism — worn, tested, real.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "/images/library/atomic-habits.jpg",
    amazon:
      "https://amzn.to/48Llrxj",
    blurb:
      "Not motivational fluff — a system. Tiny adjustments stacked over time until the man you are and the man you meant to be finally match.",
  },
  {
    title: "The Way of Men",
    author: "Jack Donovan",
    image: "/images/library/way-of-men.jpg",
    amazon:
      "https://amzn.to/4q1MwmQ",
    blurb:
      "Strips masculinity down to strength, courage, mastery, and honor. You don’t have to agree with every angle, but you can’t read it and stay soft.",
  },
  {
    title: "Can’t Hurt Me",
    author: "David Goggins",
    image: "/images/library/cant-hurt-me.jpg",
    amazon:
      "https://amzn.to/3KPEWg9",
    blurb:
      "This is what it looks like when a man refuses to stay the product of his past. It’s brutal, repetitive, and exactly what some men need to hear.",
  },
  {
    title: "Discipline Is Destiny",
    author: "Ryan Holiday",
    image: "/images/library/discipline-is-destiny.jpg",
    amazon:
      "https://amzn.to/3XPGN7D",
    blurb:
      "Holiday takes the stoic lens and locks it onto self-control. Not just saying 'be disciplined,' but showing why it’s the hinge all other virtues swing on.",
  },
  {
    title: "Grit",
    author: "Angela Duckworth",
    image: "/images/library/grit.jpg",
    amazon:
      "https://amzn.to/44QW77M",
    blurb:
      "Talent is cheap. Grit — sustained effort over years — is not. Good lens for understanding why some men quietly outlast everyone else.",
  },
  {
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    image: "/images/library/12-rules-for-life.jpg",
    amazon:
      "https://amzn.to/4pBI7Hq",
    blurb:
      "Hard-won rules for dragging order out of chaos. Helps frame responsibility, burden, and meaning in a way that hits home for men carrying real weight.",
  },
  {
    title: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    image: "/images/library/obstacle-is-the-way.jpg",
    amazon:
      "https://amzn.to/3XN8Ogc",
    blurb:
      "The stoic lesson in one line: the obstacle *is* the way. You either break against resistance or let it shape you into something sharper.",
  },
  {
    title: "Man’s Search for Meaning",
    author: "Viktor E. Frankl",
    image: "/images/library/mans-search-for-meaning.jpg",
    amazon:
      "https://amzn.to/4oGK3gp",
    blurb:
      "A man walks through hell and still finds meaning. Not theory — testimony. It’ll recalibrate what you call 'hard.'",
  },
];

export default function LibraryPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-100">
      
      {/* HEADER */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Monroe’s Library
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl">
          This is the bookshelf behind Phoenix Creek Supply. These aren’t
          trendy reads — they’re the pages that carved out my perspective on
          discipline, masculinity, suffering, grit, and purpose. If you’re
          building a quieter, stronger version of yourself, start here.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Note: Book links on this page are affiliate links. When you pick up a
          title through Monroe’s Library, you help fuel the work we do here —
          at no extra cost to you.
        </p>
      </section>

      {/* BOOK GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {books.map((book) => (
          <article
            key={book.title}
            className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 shadow-lg flex flex-col"
          >
            <div className="w-full mb-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-full rounded-xl border border-neutral-800"
              />
            </div>

            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-400 mb-4">by {book.author}</p>

            <p className="text-gray-200 mb-6 flex-1">{book.blurb}</p>

            <div className="space-y-2">
              <a
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
              >
                Buy on Amazon →
              </a>

              <p className="text-xs text-gray-500">
                Prefer audio? Use the <span className="font-semibold">Audio Books</span> tab above to listen while you work.
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* FOOTER / DISCLOSURE */}
      <section className="mt-14 text-sm text-gray-500 space-y-2">
        <p>
          As an Amazon Associate, Phoenix Creek Supply earns from qualifying purchases.
          Your support directly fuels new field kits, guides, and rugged PCS development.
        </p>
      </section>

    </main>
  );
}
