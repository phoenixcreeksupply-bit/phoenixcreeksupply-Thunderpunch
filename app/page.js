import MoonshotButton from "../components/MoonshotButton";

export const metadata = { title: "Phoenix Creek Supply" };

const CK_FORM_ID = "8637121"; // ConvertKit Form ID

export default function HomePage() {
  return (
    <main
      className="relative flex flex-col min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />

  {/* Header removed to avoid prerender error */}

      {/* Hero Section */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
  <p className="text-xs text-gray-300 mb-4">Impact-Site-Verification: 5d661df9-36be-449c-8b1e-96e2fe65f83d</p>
  {/* Duplicate verification string (screen-reader-only) as requested */}
  <p className="sr-only">Impact-Site-Verification: 5d661df9-36be-449c-8b1e-96e2fe65f83d</p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Phoenix Creek Supply
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          Lead yourself, Live with Intent.
        </p>

        {/* Navigation */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {/* Client-side button that records analytics then opens Moonshot */}
          <MoonshotButton href="https://moonshot.com/ubgcjEpaApLjpMjyrP3GCcbpoehEcp47qUWSdTjmoon?ref=28SVAj" />
        </div>
        <p className="mt-10 italic text-gray-300">Coming Soon… Have a suggestion? clarity@phoenixcreeksupply.com</p>

        {/* ConvertKit Opt-In Form */}
        <form
          action={`https://app.convertkit.com/forms/${CK_FORM_ID}/subscriptions`}
          method="post"
          className="mt-8 w-full max-w-md flex"
        >
          <input
            type="email"
            name="email_address"
            placeholder="Level up here!"
            required
            className="flex-1 px-4 py-2 rounded-l-lg text-black"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-r-lg hover:bg-yellow-500 transition"
          >
            IYKYK
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-3">
          No spam. First 100/PCS Elite. Unsubscribe anytime.
        </p>
        </section>
    </main>
  );
}
