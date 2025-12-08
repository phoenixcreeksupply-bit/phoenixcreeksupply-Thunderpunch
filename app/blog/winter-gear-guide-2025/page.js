import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Winter Gear Guide 2025 | Phoenix Creek Supply",
  description:
    "Montana-tested winter gear guide for 2025 — boots, heated jackets, power, firewood tools, and survival picks for men who work and live in real cold.",
};

export default function WinterGearGuide2025Page() {
  return (
    <main className="blog-content mx-auto max-w-4xl px-6 py-16 prose prose-invert prose-lg prose-headings:font-semibold prose-a:text-yellow-300 prose-hr:my-12">
      
      {/* HERO IMAGE */}
      <div className="mb-10">
        <Image
          src="/images/wintergear2025.jpg"
          alt="Winter gear layout for Phoenix Creek Supply guide"
          width={1600}
          height={1000}
          className="w-full rounded-xl border border-white/10 shadow-lg object-cover"
          priority
        />
      </div>

      {/* TITLE BLOCK */}
      <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
        Winter · Field Guide
      </p>

      <h1 className="mb-6">Winter Gear Guide 2025</h1>

      <p className="text-xl font-medium text-gray-200 mb-10">
        What Winter Takes, Preparation Returns
      </p>

      <p>
        Montana doesn’t care what kind of mood you’re in. It doesn’t care how
        tired you are, how early it is, how late you got home, or what went
        wrong yesterday.
      </p>

      <p><strong>Winter takes without apology.</strong></p>

      <p>
        A man prepares because winter is guaranteed. And every degree of cold
        you shield yourself from is energy returned to the mission — whether
        that mission is work, family, or just getting home without losing a
        finger to frostbite.
      </p>

      <p>
        This is the <strong>2025 Winter Gear Guide</strong>, tested against the
        Bitterroot, the backroads, and the kind of wind that makes your jacket
        question the meaning of existence.
      </p>

      <p>Everything here falls into one of three buckets:</p>
      <ul>
        <li>Stay Warm</li>
        <li>Stay Dry</li>
        <li>Stay Alive</li>
      </ul>

      <hr />

      {/* HEATED GEAR SECTION */}
      <h2 id="heated-gear">1. Heated Gear That Actually Works</h2>
      <p>
        Most heated jackets are toys. This one isn’t. If you’re burning fuel
        before sunrise or standing still more than you’re moving, a heated layer
        becomes efficiency, not luxury.
      </p>

      <h3 id="actionheat-5v-heated-jacket">ActionHeat 5V Heated Jacket</h3>
      <p>
        The <Link href="/blog/actionheat-5v-heated-jacket-review">ActionHeat 5V heated jacket</Link>{" "}
        passed every PCS test:
      </p>

      <ul>
        <li>Fast heat-up time.</li>
        <li>Even heating instead of random hot spots.</li>
        <li>Swappable battery pack mid-shift.</li>
        <li>Durable enough for real work.</li>
        <li>Plays well with layers.</li>
      </ul>

      <p>Perfect for:</p>
      <ul>
        <li>20°F jobsite mornings.</li>
        <li>Chores, plowing, or loading in the dark.</li>
        <li>Walking, scouting, or dawn patrol.</li>
        <li>Any man who refuses to be slowed by winter.</li>
      </ul>

      <hr />

      {/* BOOTS SECTION */}
      <h2 id="boots">2. Winter Work Boots That Don’t Tap Out</h2>
      <p>
        Your feet dictate endurance. Cold feet shorten days and lower output.
      </p>

      <h3 id="muck-arctic-sport-steel-toe">Muck Arctic Sport Steel Toe</h3>
      <p>
        The{" "}
        <Link href="/blog/muck-arctic-sport-steel-toe">
          Muck Arctic Sport Steel Toe
        </Link>{" "}
        earned its place by not failing when it mattered:
      </p>

      <ul>
        <li>Steel toe that doesn’t punish your foot.</li>
        <li>Real insulation for real cold.</li>
        <li>Waterproof under real field conditions.</li>
        <li>Ice-biting traction.</li>
        <li>Built for men who don’t get snow days.</li>
      </ul>

      <hr />

      {/* GLOVE SECTION */}
      <h2 id="gloves">3. Gloves That Don’t Fail When You Need Them Most</h2>

      <p>A proper glove system should include:</p>
      <ul>
        <li><strong>Winter work gloves</strong> — insulated with grip.</li>
        <li><strong>Dexterity gloves</strong> — for controls and detail work.</li>
        <li><strong>Extreme cold mitts</strong> — for long exposure.</li>
      </ul>

      <hr />

      {/* POWER SECTION */}
      <h2 id="power">4. Power Systems for Blackouts & Remote Work</h2>

      <h3 id="jackery-homepower-3600">Jackery HomePower 3600</h3>

      <p>
        The{" "}
        <Link href="/blog/jackery-homepower-3600">
          Jackery HomePower 3600
        </Link>{" "}
        anchors a winter-ready power plan:
      </p>

      <ul>
        <li>Runs heaters, fridges, and essentials.</li>
        <li>Solar-ready.</li>
        <li>Quiet and portable.</li>
      </ul>

      <hr />

      {/* FIREWOOD */}
      <h2 id="firewood">5. Firewood Gear That Never Quits</h2>
      <ul>
        <li>Primary splitting axe</li>
        <li>Hatchet</li>
        <li>Maul/wedge</li>
        <li>Sharpening puck</li>
        <li>Non-soaking gloves</li>
      </ul>

      <p className="italic">
        Coming soon:{" "}
        <Link href="/blog/best-firewood-axes-2025">
          Best Firewood Axes for 2025
        </Link>
      </p>

      <hr />

      {/* LAYERS */}
      <h2 id="layers">6. Jackets, Pants & Layers That Don’t Whine</h2>

      <p>Build your clothing system like a kit:</p>

      <ul>
        <li><strong>Base</strong> — merino or synthetic.</li>
        <li><strong>Mid</strong> — fleece, wool, or puffer.</li>
        <li><strong>Outer</strong> — windproof, water-resistant.</li>
      </ul>

      <p>
        Pair with{" "}
        <Link href="/blog/winter-doesnt-care">Winter Doesn’t Care</Link>.
      </p>

      <hr />

      {/* LIGHTING */}
      <h2 id="lighting">7. Lighting — Because It’s Dark at 5PM</h2>
      <ul>
        <li>Headlamp (300–500 lumens)</li>
        <li>Durable flashlight</li>
        <li>Lantern for outages</li>
      </ul>

      <p>
        Wrist navigation:{" "}
        <Link href="/blog/fenix-8-pro-review">Fēnix 8 Pro</Link>.
      </p>

      <hr />

      {/* SURVIVAL */}
      <h2 id="survival">8. Survival Items — Small Weight, Big Return</h2>
      <ul>
        <li>Folding saw</li>
        <li>Fixed-blade knife</li>
        <li>Ferro rod + lighter</li>
        <li>Hand warmers</li>
        <li>Emergency bivy</li>
        <li>Trauma kit</li>
      </ul>

      <hr />

      {/* CLOSING */}
      <h2 id="closing">Closing — Owning Winter Instead of Enduring It</h2>

      <p>
        Winter doesn’t wait. The man who prepares gets more done than the man
        who endures.
      </p>

      <p className="font-semibold">
        Upgrade one piece at a time. Every degree of warmth buys back focus.
      </p>

      <p className="mt-10 text-sm text-gray-400">
        Start with{" "}
        <Link href="/blog/winter-doesnt-care" className="underline">
          Winter Doesn’t Care
        </Link>
        .
      </p>
    </main>
  );
}

