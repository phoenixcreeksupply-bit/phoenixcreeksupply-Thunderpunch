export const metadata = {
  title: "Terms of Service | Phoenix Creek Supply",
  description:
    "Agreement governing your use of Phoenix Creek Supply’s website and resources."
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-4 text-gray-300">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <h2 className="text-xl font-semibold mt-8">Acceptance of Terms</h2>
      <p className="mt-4 text-gray-200">
        By accessing or using this website, you agree to be bound by these Terms of
        Service and our Privacy Policy. If you do not agree, do not use the site.
      </p>

      <h2 className="text-xl font-semibold mt-8">Use of the Site</h2>
      <ul className="mt-4 list-disc pl-6 text-gray-200 space-y-2">
        <li>You may use the site for lawful purposes only.</li>
        <li>You will not attempt to disrupt or compromise site security or functionality.</li>
        <li>You will not scrape, copy, or republish content without permission.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8">Intellectual Property</h2>
      <p className="mt-4 text-gray-200">
        All content, logos, and materials on this site are owned by Phoenix Creek Supply
        or our licensors and are protected by applicable laws. You may not use them
        without prior written permission.
      </p>

      <h2 className="text-xl font-semibold mt-8">Products & Affiliates</h2>
      <p className="mt-4 text-gray-200">
        Some products are sold through third-party platforms (e.g., Gumroad), and some
        links are affiliate links. Third-party transactions are governed by those
        platforms’ terms and policies.
      </p>

      <h2 className="text-xl font-semibold mt-8">Disclaimers</h2>
      <p className="mt-4 text-gray-200">
        The site is provided “as is” without warranties of any kind, express or implied,
        including fitness for a particular purpose and non-infringement.
      </p>

      <h2 className="text-xl font-semibold mt-8">Limitation of Liability</h2>
      <p className="mt-4 text-gray-200">
        To the fullest extent permitted by law, PCS shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of
        the site or our products.
      </p>

      <h2 className="text-xl font-semibold mt-8">Governing Law</h2>
      <p className="mt-4 text-gray-200">
        These Terms are governed by the laws of the United States and the State of
        Montana, without regard to conflict of law principles.
      </p>

      <h2 className="text-xl font-semibold mt-8">Changes</h2>
      <p className="mt-4 text-gray-200">
        We may update these Terms from time to time. Updates are effective when posted.
        Your continued use of the site constitutes acceptance of the changes.
      </p>
    </div>
  );
}
