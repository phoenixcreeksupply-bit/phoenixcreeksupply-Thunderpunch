import BlogTemplate from "../../../components/blog/BlogTemplate";

export const metadata = {
  title: "Muck Arctic Sport Steel Toe — The Winter Boot That Doesn’t Flinch",
  description:
    "A PCS field breakdown of the Muck Arctic Sport ST — the winter work boot trusted when weather stops pretending.",
  openGraph: {
    title: "Muck Arctic Sport Steel Toe — PCS Field Review",
    description:
      "A real-world breakdown of the Muck Arctic Sport ST. Warmth, durability, and winter performance that earns its name.",
    url: "https://www.phoenixcreeksupply.com/blog/muck-arctic-sport-steel-toe",
    images: [
      {
        url: "/blog/muck-arctic-header.jpg",
        width: 1200,
        height: 630,
        alt: "Muck Arctic Sport Steel Toe — PCS Field Review",
      },
    ],
  },
};

export default function Page() {
  return (
    <BlogTemplate
      title="Muck Arctic Sport Steel Toe — The Winter Boot That Doesn’t Flinch"
      subtitle="If the job doesn’t cancel for weather, your boots better not either."
      headerImage="/images/muck-arctic-header.jpg"
    >
      <p>
        Some gear is optional. This isn’t. When the ground is frozen, the wind is
        bitter, and every step feels like walking on hostility — the Muck Arctic
        Sport Steel Toe earns its place.
      </p>

      <p>
        I’ve run these in creek beds, frozen soil, sloppy thaw mud, and the kind
        of winter mornings where breath freezes before it leaves your beard.
        They hold. They don’t leak. And they don’t quit.
      </p>

      <hr />

      <h2 className="text-2xl font-bold mt-6 mb-2">Why This Boot Stands Apart</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Warmth Without Bulk:</strong> The neoprene upper keeps heat in
          without swelling your foot or creating pressure points.
        </li>
        <li>
          <strong>Steel Toe That Doesn’t Punish You:</strong> Most steel toes
          feel like anchors. This one disappears five minutes into the day.
        </li>
        <li>
          <strong>Actually Waterproof:</strong> Not “water-resistant.” Not
          “until it freezes.” These boots stay sealed in real field conditions.
        </li>
        <li>
          <strong>Tread That Bites Back:</strong> Glacier mud, thaw slop,
          gravel, ice — when everything else slides, these grip.
        </li>
      </ul>

      <hr />

      <h2 className="text-2xl font-bold mt-6 mb-2">Field Reality Check</h2>

      <p>
        The Arctic Sport ST isn’t pretty. It isn’t soft. And it damn sure isn’t
        a fashion boot. It’s a tool — a winter survival tool. When temperatures
        drop into the realm where excuses grow, these boots help you stay the
        man who keeps going.
      </p>

      <hr />

      <h2 className="text-2xl font-bold mt-6 mb-3">
        PCS Affiliate Link (Supports the Mission)
      </h2>

      <p>
        <a
          href="https://www.anrdoezrs.net/click-101573160-15361272?url=https%3A%2F%2Fwww.muckbootcompany.com%2Fproducts%2FASPSTL%3Fsource%3Dgoogleps%26amp%3Bcountry%3DUS%26amp%3Bcurrency%3DUSD&cjsku=ASPSTLM8"
          target="_blank"
          rel="noopener sponsored"
          className="text-amber-400 font-semibold hover:text-amber-300 transition"
        >
          Muck Arctic Sport Steel Toe — Men’s Winter Work Boot
        </a>
      </p>

      <p className="mt-2">Pick up a pair before winter reminds you why they exist.</p>

      <hr />

      <p className="mt-6">
        Stay capable. <br />
        Stay prepared. <br />
        Build what lasts.
      </p>
    </BlogTemplate>
  );
}
