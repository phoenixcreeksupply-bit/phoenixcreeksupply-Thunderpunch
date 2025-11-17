import Image from "next/image";

export const metadata = {
  title: "Creekside with Monroe — Where Have All the Good Neighbors Gone?",
  description:
    "A reflection from Monroe on the fading spirit of community, the rise of isolation, and what it means to hold the old line in a modern world.",
  openGraph: {
    title: "Creekside with Monroe — Where Have All the Good Neighbors Gone?",
    description:
      "A PCS Journal reflection on leadership, self-reliance, and what modern men carry.",
    url: "https://www.phoenixcreeksupply.com/blog/creekside-with-monroe",
    images: [
      {
        url: "/blog/creekside-og.jpg",
        width: 1200,
        height: 630,
        alt: "Montana creek running through forest — Creekside with Monroe",
      },
    ],
  },
};

export default function CreeksidePost() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4 space-y-10">

      {/* FULL-WIDTH HEADER IMAGE */}
      <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src="/blog/creekside-header.jpg"
          alt="Montana creek flowing through rugged forest — Creekside with Monroe"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* TITLE + SUBTITLE */}
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-wide">
          Creekside with Monroe
        </h1>
        <p className="text-xl text-gray-300">
          Where Have All the Good Neighbors Gone?
        </p>
      </header>

      {/* ARTICLE BODY */}
      <article className="prose prose-invert prose-lg max-w-none leading-relaxed">

        <p>
          There was a time — not long ago, really — when people didn’t
          hesitate. If they saw you wrestling a fence post, stuck in the
          snow, or packing too much weight on your back, they didn’t wait for
          an invitation. They parked, got out, and said the same thing every
          time:
        </p>

        <blockquote>
          <strong>“Need a hand?”</strong>
        </blockquote>

        <p>
          No cameras. No angle. No second-guessing. Just people stepping in
          because that’s what decent folks did.
        </p>

        <p>Today… it feels different.</p>

        <p>
          Most people move through the world with their eyes down, earbuds
          in, rushing to the next thing that’ll keep them distracted. They’ve
          traded community for convenience and replaced connection with
          comfort. And somewhere in that exchange, we lost something that
          mattered.
        </p>

        <p>
          I didn’t realize how rare that old mindset had become until it hit
          me one day — the kind of realization that doesn’t announce itself,
          it just settles into place like a stone dropped in still water.
        </p>

        <p>
          I was working along the creek, handling my business the same way I
          always have. Tools in the dirt. Hands cold. Mind quiet.
        </p>

        <p>
          A truck slowed down on the road above. And instead of rolling on
          by — which is the norm now — the guy stopped, leaned out the
          window, and asked:
        </p>

        <blockquote>
          <strong>“You good?”</strong>
        </blockquote>

        <p>
          Two simple words. But they landed heavier than he knew. Because
          that’s what men used to do. They looked out for each other — not
          out of weakness, but out of strength. Out of a code. Out of the
          understanding that life gets heavy, and sometimes you shoulder
          someone else’s weight for a minute because you damn well hope
          someone would do the same for you.
        </p>

        <p>
          It made me think: <em>When did the world get so hands-off? When
          did people become spectators instead of participants?</em>
        </p>

        <p>
          Somewhere along the way, the culture shifted. People got soft.
          Disconnected. Guarded. Everyone’s afraid of being bothered, or
          worse — afraid of being seen caring.
        </p>

        <p>
          But here’s the truth I carry, the one that sits deep in my chest:
          <strong> I refuse to become like that.</strong>
        </p>

        <p>
          I’ll hold the old line. I’ll be the man who still stops. Still
          checks in. Still puts his shoulder into the work when someone else
          is losing theirs. Not because it’s expected — but because it’s
          right.
        </p>

        <p>
          And that’s what <strong>Creekside with Monroe</strong> is going to
          be. A return to the things that mattered. The things we lost along
          the way. The honesty, the grit, the humanity that built strong men
          and stronger communities.
        </p>

        <p>
          I don’t care what the modern world is doing. I don’t care how
          disconnected it becomes. I’ll keep showing up in the way real men
          always have:
        </p>

        <ul>
          <li><strong>Present.</strong></li>
          <li><strong>Steady.</strong></li>
          <li><strong>Willing.</strong></li>
          <li>
            <strong>Uncompromising in the things that matter.</strong>
          </li>
        </ul>

        <p>
          And if you’re reading this, I’d bet you’re cut from that same cloth
          — the kind that’s getting harder to find, but not impossible.
        </p>

        <p>
          Maybe that’s why PCS exists. Not just to share gear and tools. But
          to stand as proof that the old ways aren’t gone. They’re just
          waiting for men like us to pick them back up.
        </p>

        <p>
          So here’s a quiet challenge from me to you: Next time you see
          someone struggling, don’t hesitate. Don’t overthink it. Don’t
          analyze whether it’s your “responsibility.”
        </p>

        <p>
          Just step in.  
          Be the man that people don’t see much anymore.  
          Be the one who shows them those kinds of men still exist.
        </p>

        <p>I’ll be doing the same — right here along the creek.</p>

        <p>— <strong>Monroe</strong></p>

      </article>
    </main>
  );
}
