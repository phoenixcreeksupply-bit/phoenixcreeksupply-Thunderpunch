export const metadata = { title: "You're In | Phoenix Creek Supply" };

export default function Thanks() {
  return (
    <main className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          You’re In
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          Welcome to the Supply Line. Forge your edge — updates and drops are on the way.
        </p>
        <a
          href="/"
          className="mt-8 btn-dark"
        >
          Return Home
        </a>
      </section>
    </main>
  );
}

