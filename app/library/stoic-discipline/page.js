import PCSPageLayout from "@/components/PCSPageLayout";

export const metadata = {
  title: "Stoic Reflections & Discipline Guides | Phoenix Creek Supply",
  description:
    "A curated selection of stoic texts, discipline frameworks, and mindset guides chosen to forge stillness, structure, and unwavering internal command.",
};

const stoicBooks = [
  {
    title: "Meditations",
    author: "Marcus Aurelius (Trans. Gregory Hays)",
    image: "/images/library/meditations-hays.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "The private journal of an emperor trying to stay honorable under immense pressure. Stoicism in its rawest form — no theory, just a man wrestling with his duty.",
  },
  {
    title: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    image: "/images/library/obstacle-is-the-way.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "The stoic principle distilled: the obstacle *is* the way. Resistance shapes men who don’t bend under it. A field manual for transforming hardship into fuel.",
  },
  {
    title: "Discipline Is Destiny",
    author: "Ryan Holiday",
    image: "/images/library/discipline-is-destiny.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Holiday isolates discipline as the keystone virtue — the one that unlocks mastery in every domain. A clear, modern companion to ancient principles.",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "/images/library/atomic-habits.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "A practical system for building disciplined routines that stick. Clear teaches how identity, structure, and small changes compound into major transformation.",
  },
  {
    title: "The Daily Stoic",
    author: "Ryan Holiday & Stephen Hanselman",
    image: "/images/library/daily-stoic.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "365 entries of stoic wisdom — a one-page daily checkpoint to keep your thinking sharp, your emotions steady, and your actions aligned with your code.",
  },
  {
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    image: "/images/library/12-rules-for-life.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Order, responsibility, meaning, structure. Peterson’s rules force men to carry themselves properly — to shoulder burden rather than avoid it.",
  },
  {
    title: "The Practicing Stoic",
    author: "Ward Farnsworth",
    image: "/images/library/practicing-stoic.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "A masterclass in stoic thought — clean, structured, and immediately applicable. Farnsworth cuts through fluff and delivers stoicism as a practical craft.",
  },
  {
    title: "Stillness Is the Key",
    author: "Ryan Holiday",
    image: "/images/library/stillness-is-the-key.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "In a world that celebrates noise, Holiday teaches the lost art of stillness — the internal quiet that lets warriors think clearly in the storm.",
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    image: "/images/library/cant-hurt-me.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Pain, discipline, accountability. Goggins shows what happens when a man decides his past will not dictate his identity. Relentless and necessary.",
  },
  {
    title: "Grit",
    author: "Angela Duckworth",
    image: "/images/library/grit.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Duckworth breaks down the trait that outperforms talent: sustained effort over long periods. If you're building an unshakeable version of yourself, start here.",
  },
];

export default function StoicDisciplinePage() {
  return (
    <PCSPageLayout
      title="Stoic Reflections & Discipline Guides"
      intro="The mental architecture behind Monroe — stoicism, discipline, responsibility, and the steady fire of a man who chooses clarity over chaos."
      note="As an Amazon Associate, Phoenix Creek Supply earns from qualifying purchases."
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {stoicBooks.map((book) => (
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

            <a
              href={book.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
            >
              Buy on Amazon →
            </a>
          </article>
        ))}
      </section>
    </PCSPageLayout>
  );
}
