import React from "react";

export const metadata = {
  title: "Contact | Phoenix Creek Supply",
  description:
    "Contact Phoenix Creek Supply — email addresses and contact details.",
};

export default function ContactPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        backgroundImage: "url('/images/hardhat-shovel.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <section className="backdrop-blur-sm bg-neutral-900/65 rounded-2xl border border-neutral-800 shadow-lg p-10 max-w-3xl w-full text-center text-neutral-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-amber-500">
          <a
            href="mailto:support@phoenixcreeksupply.com"
            className="hover:underline inline-block max-w-full break-words whitespace-normal"
          >
            support@phoenixcreeksupply.com
          </a>
        </h1>

        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
          The contact form and direct email links are temporarily hidden while we make some updates to our contact routing. Please check back soon.
        </p>

        <p className="text-sm text-neutral-400 mt-6">If this is urgent, please try again later or use our site feedback channels.</p>
      </section>
    </main>
  );
}
