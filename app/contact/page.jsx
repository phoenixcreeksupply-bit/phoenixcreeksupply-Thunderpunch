import React from "react";
import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: "Contact | Phoenix Creek Supply",
  description:
    "Reach out to the Phoenix Creek Supply team — for collaborations, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-start px-6 py-20 space-y-16">
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-amber-500">
          Contact Phoenix Creek Supply
        </h1>
        <p className="text-lg text-neutral-300 leading-relaxed">
          Every message we receive is an opportunity to connect with those who
          share the same code — to live with intent, create with purpose, and
          stand by the work we build. Whether it’s a collaboration, affiliate
          inquiry, or simple question — we listen, we respond, and we act.
        </p>
      </section>

      <section className="max-w-xl w-full bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-amber-400 text-center mb-2">
          Get in Touch
        </h2>
        <p className="text-neutral-400 text-center mb-6">
          Send us a direct message — we’ll get back to you within 1–2 business
          days.
        </p>

        <ContactForm />

        <p className="text-center text-sm text-neutral-500 mt-6">
          Or email us directly at{" "}
          <a
            href="mailto:clarity@phoenixcreeksupply.com"
            className="text-amber-400 hover:text-amber-300"
          >
            clarity@phoenixcreeksupply.com
          </a>
        </p>
      </section>
    </main>
  );
}
