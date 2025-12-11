import PCSPageLayout from "@/components/PCSPageLayout";

export const metadata = {
  title: "Martial Arts & Combatives | Phoenix Creek Supply",
  description:
    "A curated selection of the most respected hand-to-hand combat, self-defense, and warrior-strategy books — chosen to forge skill, mindset, and readiness.",
};

const combatBooks = [
  {
    title: "Get Tough!",
    author: "W.E. Fairbairn",
    image: "/images/library/get-tough.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "The WWII commando manual that shaped modern combatives. Brutal, direct, efficient — the original blueprint for real-world hand-to-hand violence.",
  },
  {
    title: "Tao of Jeet Kune Do",
    author: "Bruce Lee",
    image: "/images/library/tao-of-jkd.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Bruce Lee’s synthesis of philosophy and combat. Jeet Kune Do is efficiency made physical: no wasted motion, no hesitation, no ego.",
  },
  {
    title: "The Book of Five Rings",
    author: "Miyamoto Musashi",
    image: "/images/library/book-of-five-rings.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Musashi’s timeless doctrine on strategy, timing, rhythm, and dominance. Not a technique manual — a warrior’s operating system.",
  },
  {
    title: "Complete Krav Maga",
    author: "Darren Levine & John Whitman",
    image: "/images/library/complete-krav-maga.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Krav Maga strips away everything that fails under adrenaline. Aggressive, practical, and built to end violence fast.",
  },
  {
    title: "Meditations on Violence",
    author: "Rory Miller",
    image: "/images/library/meditations-on-violence.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "The psychology of violence explained by someone who’s lived it. Miller’s insights bridge the gap between training and real combat.",
  },
  {
    title: "The Gift of Fear",
    author: "Gavin de Becker",
    image: "/images/library/gift-of-fear.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Threat recognition is the first layer of defense. This book teaches how intuition identifies danger before the conscious mind reacts.",
  },
  {
    title: "Principles of Personal Defense",
    author: "Jeff Cooper",
    image: "/images/library/personal-defense.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "A concise but powerful manual on mindset and readiness. Cooper outlines the mental traits required to survive violence.",
  },
  {
    title: "BJJ: Theory and Technique",
    author: "Renzo & Royler Gracie",
    image: "/images/library/bjj-theory-technique.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Positional control, leverage, and submissions from the Gracie family. No modern fighter is complete without understanding the ground.",
  },
  {
    title: "Krav Maga: An Essential Guide",
    author: "David Kahn",
    image: "/images/library/krav-maga-kahn.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Kahn provides a crystal-clear breakdown of Krav Maga principles as taught to military and law enforcement.",
  },
  {
    title: "Sharpening the Warrior’s Edge",
    author: "Bruce K. Siddle",
    image: "/images/library/sharpening-the-warriors-edge.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "A groundbreaking look at how stress, heart rate, and fear alter performance. Required reading for anyone training for real confrontation.",
  },
  {
    title: "A Fighter’s Heart",
    author: "Sam Sheridan",
    image: "/images/library/fighters-heart.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "A poetic, raw exploration of fighting culture — Muay Thai, BJJ, boxing, MMA. Helps you understand the spirit that lives behind the techniques.",
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    image: "/images/library/art-of-war.jpg",
    amazon: "YOUR_AMAZON_AFFILIATE_LINK",
    blurb:
      "Strategy, deception, pressure, tempo, initiative. Sun Tzu remains foundational for any warrior seeking to think before striking.",
  },
];

export default function MartialArtsPage() {
  return (
    <PCSPageLayout
      title="Martial Arts & Combatives"
      intro="A curated selection of combat manuals, warrior philosophy, and real-world self-defense guides chosen to sharpen skill, instinct, and tactical awareness."
      note="As an Amazon Associate, PCS earns from qualifying purchases."
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {combatBooks.map((book) => (
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
