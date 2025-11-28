import Image from "next/image";
import MoonshotButton from "../components/MoonshotButton";
import PromoStaging from "../components/PromoStaging";

export const metadata = {
  title: "Phoenix Creek Supply",
};

// Do NOT inline <script> tags here.
// Use <Script> from next/script inside the component instead.

const CK_FORM_ID = "8637121"; // ConvertKit Form ID

export default function HomePage() {
  return (
    <main className="relative flex flex-col min-h-screen w-full">

      {/* Background Image */}
      <Image
        src="/images/home-bg1225.jpg"
        alt="Home Background"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* dark overlay so background image shows through */}
      <div className="absolute inset-0 bg-black/20 -z-0" />

      {/* Hero Section */}
      <section className="relative z-10 text-center text-white drop-shadow-xl flex-1 flex flex-col items-center justify-center px-6">
        <h1 className="text-5xl md:text-6xl drop-shadow-2xl font-semibold text-white">
          Phoenix Creek Supply
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          Lead yourself, Live with Intent.
        </p>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <MoonshotButton href="https://moonshot.com/ubgcjEpaApLjpMjyrP3GCcbpoehEcp47qUWSdTjmoon?ref=28SVAj" />
        </div>

        <p className="mt-10 italic text-gray-300">
          “Discipline is forged from the fragments of failure”
        </p>

        {/* ConvertKit Opt-In Form */}
        <form
          action={`https://app.convertkit.com/forms/${CK_FORM_ID}/subscriptions`}
          method="post"
          className="mt-8 w-full max-w-md flex"
        >
          <input
            type="email"
            name="email_address"
            placeholder="Best email address?"
            required
            className="flex-1 px-4 py-2 rounded-l-lg text-black ck-email"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-r-lg hover:bg-yellow-500 transition"
          >
            Submit.
          </button>
        </form>

        {/* Promo staging */}
        <div className="w-full mt-8">
          <PromoStaging className="mx-auto max-w-3xl p-4" />
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-3">
          No spam. Unsubscribe anytime.
        </p>

        {/* Hidden SEO links */}
        <div className="hidden">
          <a href="/blog/black-friday-gear-worth-owning">Black Friday Gear Roundup</a>
          <a href="/blog/winter-doesnt-care">Winter Prep Guide</a>
          <a href="/blog/a-man-and-his-tools">Tools That Earn Their Keep</a>
        </div>
      </section>

    </main>
  );
}

