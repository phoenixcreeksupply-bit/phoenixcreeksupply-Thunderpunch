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
          Contact Phoenix Creek Supply
        </h1>

        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
          For general inquiries or partnerships, please email us directly. We monitor both addresses and will reply as soon as possible.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 mt-4">
          <a
            className="px-6 py-3 rounded-md bg-amber-500 text-neutral-900 font-medium hover:bg-amber-400"
            href="mailto:clarity@phoenixcreeksupply.com"
          >
            clarity@phoenixcreeksupply.com
          </a>

          <a
            className="px-6 py-3 rounded-md bg-amber-500 text-neutral-900 font-medium hover:bg-amber-400"
            href="mailto:support@phoenixcreeksupply.com"
          >
            support@phoenixcreeksupply.com
          </a>
        </div>

        <p className="text-sm text-neutral-400 mt-6">Or find other ways to connect via our site footer.</p>
      </section>
    </main>
  );
}
