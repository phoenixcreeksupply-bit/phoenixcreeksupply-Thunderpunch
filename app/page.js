
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Header />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Phoenix Creek Supply
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200">
          Rugged tools for the modern Stoic
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="/(site)/digital-kits" className="btn-dark">Digital Kits</a>
          <a href="/(site)/gear" className="btn-dark">Tools & Gear</a>
          <a href="/(site)/blog" className="btn-dark">Field Guides</a>
        </div>
        <p className="mt-10 italic text-gray-300">Coming Soon…</p>
      </section>
      <Footer />
    </main>
  );
}
