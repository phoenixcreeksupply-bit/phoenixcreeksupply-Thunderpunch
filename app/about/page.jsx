import React from "react";

export const metadata = {
  metadataBase: new URL("https://www.phoenixcreeksupply.com"),

  title: "About | Phoenix Creek Supply",
  description:
    "Monroe’s mission, the PCS code, and the legacy behind Phoenix Creek Supply.",

  openGraph: {
    title: "About | Phoenix Creek Supply",
    description:
      "Monroe’s mission, the PCS code, and the legacy behind Phoenix Creek Supply.",
    url: "https://www.phoenixcreeksupply.com/about",
    siteName: "Phoenix Creek Supply",
    images: [
      {
        url: "/brand/pcs-og.png",
        width: 1200,
        height: 630,
        alt: "Phoenix Creek Supply — Lead Yourself, Live With Intent.",
      },
    ],
    type: "website",
  },

  // Optional — silences "fb:app_id missing" warnings in validators
  other: {
    "fb:app_id": "0",
  },
};


export default function AboutPage() {
  return (
    <section
      className="about-monroe text-gray-100 py-16 px-8"
      style={{
        backgroundImage: "url('/images/Monroe1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div
        className="max-w-4xl mx-auto space-y-16 bg-transparent rounded-2xl p-8 shadow-2xl"
        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.9)" }}
      >
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-wide uppercase">
            About Monroe & The Mission
          </h1>
          <p className="text-sm text-gray-400">Phoenix Creek Supply</p>
        </header>

        {/* SECTION 1: The Man Who Should've Broken */}
        <article className="space-y-6">
          <h2 className="text-2xl font-semibold text-amber-400">
            The Man Who Should’ve Broken
          </h2>
          <p>
            He wasn’t supposed to make it this far. By all reasonable accounts,
            life had thrown enough at Monroe to break most men twice over. Loss,
            betrayal, long nights without answers — the kind that make a man
            question his path and his worth.
          </p>
          <p>Pain was never the end of his story. Pain was the forge.</p>
          <p>
            He learned early that discipline isn’t built in comfort — it’s carved
            out of failure, sharpened by responsibility, and tempered by the
            moments when no one is coming to rescue you. So he stopped waiting
            for easier days. He built himself inside the storm instead.
          </p>
          <p>
            There was a moment when staying down would’ve been expected. Normal.
            Accepted. But between the failures, the disappointment, the mud, and
            the blood… he made the choice that defined everything:
            <strong className="text-amber-300"> Get up anyway.</strong>
          </p>
          <p>
            He rose because real men don’t rise for applause. They rise because
            their code demands it.
          </p>
        </article>

        {/* SECTION 2: Forged From the Wild */}
        <article className="space-y-6">
          <h2 className="text-2xl font-semibold text-amber-400">
            Forged From the Wild
          </h2>
          <p>
            Phoenix Creek Supply wasn’t born from trends, influencers, or
            corporate polish. It was born from a rebellion — a rebellion against
            the softness swallowing the modern world.
          </p>
          <p>
            Monroe built PCS to stand as proof that grit still matters. That the
            old code still works. That a man can build something real with his
            hands, his word, and his intent.
          </p>
          <p>
            Every tool, every map, every digital kit carrying the PCS mark stands
            on one principle:
            <strong className="uppercase tracking-wide">
              {" "}
              Earn it. Test it. Own it.
            </strong>
          </p>
        </article>

        {/* SECTION 3: For Men Who Walk Where the Signal Dies */}
        <article className="space-y-6">
          <h2 className="text-2xl font-semibold text-amber-400">
            For Men Who Walk Where the Signal Dies
          </h2>
          <p>
            Phoenix Creek Supply is a home base for the self-led, the capable,
            the disciplined — for the ones who carry their name like a weight,
            not a slogan.
          </p>
          <p>
            These men don’t look for shortcuts. They look for clarity. They don’t
            wait for the world to hand them strength. They build it — one ridge,
            one creek, one cut of earth at a time.
          </p>
          <p>
            PCS isn’t noise; it’s signal. It isn’t hype; it’s proof. And it stands
            quietly, confidently with one offer:
            <em className="text-amber-200"> “Here’s what works. Use it well.”</em>
          </p>
        </article>

        {/* SECTION 4: The Code Lives Here */}
        <article className="space-y-6">
          <h2 className="text-2xl font-semibold text-amber-400">
            The Code Lives Here
          </h2>
          <p>Monroe didn’t create PCS to sell gear.</p>
          <p>He built it to preserve a code — a way of living that’s dying in the modern world.</p>

          <ul className="list-disc list-inside space-y-1">
            <li>Patience is a virtue.</li>
            <li>Discipline your mind.</li>
            <li>Work harder.</li>
            <li>Stand taller.</li>
            <li>Keep your word.</li>
            <li>Leave something worth remembering.</li>
          </ul>

          <p className="font-semibold">
            Some men break under pressure. <br />
            <span className="text-amber-300">
              Monroe built a legacy out of it.
            </span>
          </p>
        </article>

        {/* FOOTER */}
        <footer className="text-center pt-10 border-t border-gray-700">
          <p className="uppercase tracking-wide font-semibold">
            Phoenix Creek Supply
          </p>
          <p className="italic text-gray-400">
            Lead yourself, Live with intent.
          </p>
        </footer>
      </div>
    </section>
  );
}
