export const metadata = { title: "Thanks | Phoenix Creek Supply" };

export default function ThanksPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Background */}
      <img
        src="/images/home-bg.jpg"
        alt="Phoenix Creek background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl font-bold text-white mb-4">You’re In</h1>
        <p className="text-lg text-gray-200 max-w-xl">
          Welcome to the Phoenix Creek Supply line.  
          Updates, kits, and hard-won lessons are on their way.  
        </p>

        <a
          href="/"
          className="mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
