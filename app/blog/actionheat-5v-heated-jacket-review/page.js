import BlogTemplate from "../../../components/blog/BlogTemplate";
import FieldNote from "../../../components/blog/FieldNote";
import GearCallout from "../../../components/blog/GearCallout";
import Toolkit from "../../../components/blog/Toolkit";

export const metadata = {
  title: "ActionHeat 5V Heated Jacket Review — Field-Tested Warmth",
  description:
    "A PCS review of the ActionHeat 5V Heated Jacket (Men's Softshell). Real-world performance, heating zones, battery life, and where it stands in the cold-weather gear lineup.",
  openGraph: {
    title: "ActionHeat 5V Heated Jacket Review — Field-Tested Warmth",
    description:
      "Real-world performance of the ActionHeat 5V Heated Softshell Jacket. Tested for Montana conditions.",
    url: "https://www.phoenixcreeksupply.com/blog/actionheat-5v-heated-jacket-review",
    images: [
      {
        url: "/blog/actionheat-og.jpg",   // FIXED
        width: 1200,
        height: 630,
        alt: "ActionHeat 5V Heated Jacket — Men's Softshell Review",
      },
    ],
  },
};

export default function ActionHeatReview() {
  return (
    <BlogTemplate
      title="ActionHeat 5V Heated Jacket Review"
      subtitle="Field-Tested Warmth for Harsh Conditions"
      headerImage="blog/actionheat-og.jpg"   // FIXED
    >
      <p>
        The winters here are not forgiving. Wind cuts through layers, cold bites
        at the knuckles, and there are mornings when even starting the day feels
        like stepping into a fight. That's where heated gear earns its place — 
        and the ActionHeat 5V Heated Jacket is one of the few that actually 
        performs in real-world conditions.
      </p>

      <p>
        This review looks at more than specs — it looks at how this jacket fits 
        into the life of a man who works outdoors, moves through harsh terrain, 
        or simply refuses to let weather dictate momentum.
      </p>

      <FieldNote title="How Heated Jackets Actually Work">
        Most heated jackets rely on carbon-fiber heating elements placed across 
        the chest and back. The ActionHeat 5V system uses three core zones and 
        a simple single-button control. Power comes from a 5V USB battery pack — 
        meaning you can replace it, upgrade it, or carry spares.
      </FieldNote>

      <GearCallout
        name="ActionHeat 5V Heated Jacket — Men's Softshell"
        noticed="Solid construction, clean stitching, and heating zones positioned where warmth actually helps — upper chest and mid-back."
        matters="Heat on the chest protects your core, and heat on the back helps with muscle tension during physical work."
        excels="Wind resistance, midweight insulation, and how fast it reaches full heat once activated."
        fallsShort="Battery life on high can drain fast in heavy wind — a second pack is highly recommended."
        recommendation="Ideal for cold-weather work, early-morning starts, winter riding, and creekside operations where stillness intensifies cold."
      />

      <p>
        The jacket's heat distribution is balanced and reliable. Even in wind, 
        the softshell exterior prevents heat loss better than cheaper options. 
        The interior fleece lining helps trap warmth, reducing battery strain.
      </p>

      <p>
        Paired with proper base layers, this jacket becomes a serious tool for 
        winter resilience — not a gimmick.
      </p>

      <Toolkit
        items={[
          {
            name: "ActionHeat 5V Heated Jacket (Men's Softshell)",
            link: "https://www.anrdoezrs.net/click-101573160-15380410?url=https%3A%2F%2Factionheat.com%2Fproducts%2Factionheat-5v-battery-heated-jacket-mens%3Fvariant%3D19690711810166",
            note: "Primary layer for cold-weather field days.",
          },
          {
            name: "ActionHeat 5V Men's Heated Base Layer Pants",
            link: "https://www.anrdoezrs.net/click-101573160-15380410?url=https%3A%2F%2Factionheat.com%2Fproducts%2Factionheat-5v-base-layer-pants-mens",
            note: "Critical for all-day.",
          },
          {
            name: "ActionHeat 5V 6000mAh Power Bank Kit",
            link: "https://www.dpbolvw.net/click-101573160-15380410?url=https%3A%2F%2Factionheat.com%2Fproducts%2Factionheat-5v-power-bank-6000mah",
            note: "Remember Me!!",
          },
          {
            name: "Men's Arctic Sport Steel Toe Insulated Boot",
            link: "https://www.dpbolvw.net/click-101573160-14338493?url=https%3A%2F%2Fmuckbootcompany.com%2Fproducts%2Faspstl%3F_pos%3D3%26_sid%3D05ba5cc51%26_ss%3Dr%26variant%3D50969710395674",
            note: "Warm and Dry feet are Essential.",
          },
        ]}
      />
    </BlogTemplate>
  );
}
