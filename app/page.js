import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      className="relative flex flex-col min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
    >
      {/* Hero Section */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Phoenix Creek Supply
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          Rugged tools for the modern Stoic
        </p>

        {/* Navigation */}
        <p className="mt-10 italic text-gray-300">Coming Soon…</p>

        {/* PCS-styled ConvertKit form */}
        <form
          action="https://app.convertkit.com/forms/8637121/subscriptions"
          method="post"
          className="mt-8 w-full max-w-md flex"
        >
          <input
            type="email"
            name="email_address"
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-2 rounded-l-lg text-black"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-r-lg hover:bg-yellow-500 transition"
          >
            Forge Your Edge
          </button>
        </form>
        <p className="text-xs text-gray-400 mt-3">
          Hard-won lessons. New kits. No spam.
        </p>
      </section>

      {/* Footer (About / Legal / etc.) */}
      <Footer />
    </main>
  );
}

