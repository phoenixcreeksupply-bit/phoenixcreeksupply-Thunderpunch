
export const metadata = {
  title: "Affiliate Disclosure | Phoenix Creek Supply",
  description:
    "How we use affiliate links and how that supports Phoenix Creek Supply."
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Affiliate Disclosure</h1>
      <p className="mt-4 text-gray-300">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <p className="mt-6 text-gray-200">
        Phoenix Creek Supply (“PCS”, “we”, “our”) participates in affiliate programs,
        including the Amazon Services LLC Associates Program and other merchant programs.
        This means we may earn commissions on qualifying purchases you make through links
        on this site—at no additional cost to you.
      </p>

      <h2 className="text-xl font-semibold mt-8">What This Means for You</h2>
      <ul className="mt-4 list-disc pl-6 text-gray-200 space-y-2">
        <li>Prices are the same for you; commissions are paid by the retailer.</li>
        <li>We only recommend gear and products we believe are useful and field-worthy.</li>
        <li>Our editorial opinions are our own and are not paid for by brands.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">Amazon Associate Disclosure</h2>
      <p className="mt-4 text-gray-200">
        As an Amazon Associate, we earn from qualifying purchases.
      </p>

      <h2 className="text-xl font-semibold mt-8">Contact</h2>
      <p className="mt-4 text-gray-200">
        Questions about this disclosure? Contact us via the form on our Contact page.
      </p>
    </div>
  );
}
