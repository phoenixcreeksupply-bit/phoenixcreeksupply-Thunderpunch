export const metadata = {
  title: "Disclaimer | Phoenix Creek Supply",
  description:
    "General information only; no professional advice. Use at your own risk."
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Disclaimer</h1>
      <p className="mt-4 text-gray-300">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <h2 className="text-xl font-semibold mt-8">General Information</h2>
      <p className="mt-4 text-gray-200">
        The content on Phoenix Creek Supply is provided for general informational and
        educational purposes only. Nothing on this site constitutes legal, medical,
        financial, nutritional, or professional advice. You are solely responsible for
        how you use the information provided.
      </p>

      <h2 className="text-xl font-semibold mt-8">Outdoor, Survival, and Prospecting Risks</h2>
      <p className="mt-4 text-gray-200">
        Activities related to bushcraft, survival, prospecting, and similar fields can be
        hazardous. Assess your skills, physical condition, equipment, and local laws
        before attempting any activity. Use appropriate safety precautions at all times.
      </p>

      <h2 className="text-xl font-semibold mt-8">Nutrition & OMAD Content</h2>
      <p className="mt-4 text-gray-200">
        Dietary approaches, including one-meal-a-day (OMAD), are not suitable for everyone.
        Consult a qualified healthcare professional before making dietary changes,
        especially if you have medical conditions or take medications.
      </p>

      <h2 className="text-xl font-semibold mt-8">External Links</h2>
      <p className="mt-4 text-gray-200">
        We link to third-party sites for convenience and product recommendations. We do
        not control those sites and are not responsible for their content, policies, or
        availability. Your use of third-party sites is at your own risk.
      </p>

      <h2 className="text-xl font-semibold mt-8">Limitation of Liability</h2>
      <p className="mt-4 text-gray-200">
        To the fullest extent permitted by law, PCS and its owners, contributors, and
        affiliates disclaim all liability for any direct or indirect loss, injury, or
        damages arising from your use of this site, its products, or linked resources.
      </p>
    </div>
  );
}
