export const metadata = {
  title: "Privacy Policy | Phoenix Creek Supply",
  description:
    "How Phoenix Creek Supply collects, uses, and protects your information."
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-gray-300">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <h2 className="text-xl font-semibold mt-8">Information We Collect</h2>
      <ul className="mt-4 list-disc pl-6 text-gray-200 space-y-2">
        <li><strong>Email address</strong> if you subscribe to our newsletter or download resources.</li>
        <li><strong>Usage data</strong> such as page views and clicks (aggregate, non-identifying).</li>
        <li><strong>Transaction info</strong> (handled by third parties like Gumroad); we do not store card data.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">How We Use Information</h2>
      <ul className="mt-4 list-disc pl-6 text-gray-200 space-y-2">
        <li>To send you newsletters or product updates you request.</li>
        <li>To improve site content and measure product interest.</li>
        <li>To operate affiliate programs and attribute commissions.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">Cookies & Tracking</h2>
      <p className="mt-4 text-gray-200">
        We may use cookies or similar technologies to understand how the site is used and
        to support affiliate attribution. You can control cookies in your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-8">Third-Party Services</h2>
      <ul className="mt-4 list-disc pl-6 text-gray-200 space-y-2">
        <li><strong>Gumroad</strong> for digital product checkout and delivery.</li>
        <li><strong>Amazon Associates</strong> and other affiliate platforms for product links.</li>
        <li><strong>Email providers</strong> (e.g., ConvertKit) for newsletters.</li>
      </ul>
      <p className="mt-4 text-gray-200">
        These services have their own privacy policies; your use of them is governed by
        their terms and policies.
      </p>

      <h2 className="text-xl font-semibold mt-8">Data Security</h2>
      <p className="mt-4 text-gray-200">
        We use reasonable technical and organizational measures to protect information,
        but no method of transmission or storage is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-8">Your Choices</h2>
      <ul className="mt-4 list-disc pl-6 text-gray-200 space-y-2">
        <li>Unsubscribe from emails at any time via the link in our messages.</li>
        <li>Block or delete cookies via your browser.</li>
        <li>Contact us to request updates or deletion of your info where applicable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">Contact</h2>
      <p className="mt-4 text-gray-200">
        For privacy questions, contact us through the form on our Contact page.
      </p>
    </div>
  );
}
