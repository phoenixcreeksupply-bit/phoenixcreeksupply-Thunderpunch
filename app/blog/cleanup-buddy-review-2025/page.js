import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Cleanup Buddy Review (2025) | Phoenix Creek Supply",
  description:
    "Dream Mat Cleanup Buddy review for 2025 — performance, setup, micro-gold recovery capability, and PCS field-tested results for serious prospectors.",
};

export default function CleanupBuddyReview2025Page() {
  return (
    <main className="blog-content mx-auto max-w-4xl px-6 py-16 prose prose-invert prose-lg prose-headings:font-semibold prose-a:no-underline prose-a:font-semibold prose-a:text-yellow-300 prose-a:hover:text-yellow-200 prose-hr:my-12">
      
      {/* HERO IMAGE */}
      <div className="mb-10">
        <Image
          src="/images/cleanup-buddy-hero.jpg"
          alt="Dream Mat Cleanup Buddy micro-gold recovery system"
          width={1600}
          height={900}
          className="w-full rounded-xl border border-white/10 shadow-lg object-cover"
          priority
        />
      </div>

      <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
        Prospecting · Gear Review
      </p>

      <h1 className="mb-4">Cleanup Buddy Review (2025)</h1>
      <p className="text-xl font-medium text-gray-200 mb-10">
        The Micro-Gold Workhorse Every Prospector Should Own
      </p>

      <p>
        Fine gold is where most prospectors win or lose — and it’s usually where
        gear starts to fail. The{" "}
        <strong>Dream Mat Cleanup Buddy</strong> changes that. It’s a compact,
        high-efficiency cleanup system designed to strip black sand away and
        trap micro-gold with almost zero effort.
      </p>

      <p>
        After PCS field testing in Montana gravels, buckets of cons, and dredge
        leftovers, one thing became clear:
      </p>

      <p className="font-semibold text-yellow-300">
        The Cleanup Buddy isn’t an accessory — it’s an advantage.
      </p>

      <hr />

      <h2 id="what-it-is">What the Cleanup Buddy Actually Is</h2>

      <p>
        The Cleanup Buddy is a purpose-built, miniature sluice system powered by
        Dream Mat’s micro-vortex technology. Unlike riffles or carpet, each
        cell forms a low-pressure trap that locks gold in place while lights
        continue moving downstream.
      </p>

      <p>That means:</p>
      <ul>
        <li>Less turbulence</li>
        <li>Less blowout</li>
        <li>More gold recovered — especially under 100 mesh</li>
      </ul>

      <p>
        For Montana, Idaho, Oregon, New Mexico, and anywhere micro-gold is
        normal, this system is deadly effective.
      </p>

      <hr />

      <h2 id="why-it-matters">Why It Matters (and Why PCS Recommends It)</h2>

      <p>
        Most prospectors lose fine gold without ever knowing it. Traditional
        cleanup sluices simply can’t hold material that small without flooding
        or over-agitating the flow.
      </p>

      <p>
        The Cleanup Buddy fixes that by controlling water velocity inside each
        micro cell. Gold drops instantly, lights flush out, and every run ends
        with a clean, deliberate capture pattern.
      </p>

      <h3>PCS Field Notes:</h3>
      <ul>
        <li>Captures gold that pans and standard mats miss</li>
        <li>Processes heavy cons in minutes</li>
        <li>Runs on low water volume</li>
        <li>Zero learning curve — dial flow once, done</li>
        <li>Portable enough for pack-in prospecting</li>
      </ul>

      <hr />

      <h2 id="what-you-can-run">What You Can Run Through It</h2>

      <p>This system excels with:</p>
      <ul>
        <li>Black sand concentrates</li>
        <li>Sluice or highbanker cons</li>
        <li>Dredge tailings</li>
        <li>Blue Bowl leftovers</li>
        <li>Miller table overs</li>
        <li>Raw creek pan material</li>
      </ul>

      <p>
        If it fits in a scoop and contains gold, the Cleanup Buddy will show you
        exactly what you caught — and what you would’ve lost.
      </p>

      <hr />

      <h2 id="setup">Recommended Setup</h2>
      <p>Run it simple. Run it clean. Here's the sweet spot:</p>

      <ul>
        <li>800–1100 GPH bilge pump</li>
        <li>¾" hose</li>
        <li>Small recirculation tub</li>
        <li>Level sluice tray</li>
      </ul>

      <p>
        High flow isn’t your goal —{" "}
        <strong>steady, controlled water is.</strong> Dream Mat handles the
        separation.
      </p>

      <hr />

      <h2 id="accessories">Best Accessories to Pair With It</h2>

      <p>For a complete micro-gold recovery station:</p>

      <ul>
        <li>800–1100 GPH bilge pump</li>
        <li>Reinforced ¾" hose</li>
        <li>12V 9Ah sealed battery</li>
        <li>¼" or ⅛" classifier</li>
        <li>Snuffer bottle + fine vials</li>
        <li>Finishing pan for final cleanups</li>
      </ul>

      <p>
        These items dramatically improve the speed and quality of your cleanup
        workflow.
      </p>

      <hr />

      <h2 id="should-you-buy">Should You Buy One?</h2>

      <p>You should if:</p>

      <ul>
        <li>You prospect in fine-gold regions</li>
        <li>You run more than a few gallons of material a week</li>
        <li>You want consistent, repeatable cleanup results</li>
        <li>You want more gold in the vial — not in the tailings</li>
      </ul>

      <p className="font-semibold text-yellow-300">
        For claim owners, dredgers, and serious weekend warriors — this tool
        pays for itself fast.
      </p>

      <hr />

      <h2 id="closing">Closing Thoughts — The PCS Verdict</h2>

      <p>
        Gold recovery isn’t luck. It’s systems, technique, and gear. The Cleanup
        Buddy is one of the few tools that actually upgrades your results
        without adding complexity.
      </p>

      <p>
        It earns its place in the pack — not because it looks impressive, but
        because it produces gold that lesser systems lose.
      </p>

      <p className="font-semibold">
        In a world where fine gold makes the difference, the Cleanup Buddy is
        the edge.
      </p>

      <p className="mt-10 text-sm text-gray-400">
        For more recovery tools and PCS field methods, read{" "}
        <Link href="/blog/cleanup-techniques-2025">Fine Gold Cleanup Techniques</Link>{" "}
        (coming soon).
      </p>
    </main>
  );
}
