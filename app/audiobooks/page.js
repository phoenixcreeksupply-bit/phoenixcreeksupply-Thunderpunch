export const metadata = {
  title: "PCS Listening Library | Audiobooks for the Modern Stoic",
  description: "Phoenix Creek Supply's curated audiobook list for mindset, grit, outdoors, and discipline.",
};

export default function ListeningLibrary() {
  const trial = "https://www.kqzyfj.com/click-101573160-14512672";

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-100">
      <h1 className="text-4xl font-bold mb-4">PCS Listening Library</h1>
      <p className="text-lg text-gray-300 mb-8">
        Fuel your drives, shifts, workouts, and long miles with audiobooks that sharpen the mind.
        Every title here reflects the Phoenix Creek Supply ethos: 
        <em> discipline, grit, legacy, and self-ownership.</em>
      </p>

      <div className="space-y-10">

        {/* BOOK 1 */}
        <div>
          <h2 className="text-xl font-bold">Extreme Ownership — Jocko Willink</h2>
          <p className="text-gray-400 mb-3">
            A foundational manual for the modern stoic and warrior. Pure discipline doctrine.
          </p>
          <a href={trial} className="text-amber-500 underline" target="_blank">
            Listen with a Free Audiobooks.com Trial →
          </a>
        </div>

        {/* BOOK 2 */}
        <div>
          <h2 className="text-xl font-bold">Meditations — Marcus Aurelius</h2>
          <p className="text-gray-400 mb-3">
            The emperor’s private journal. A masterclass in restraint, power, and self-governance.
          </p>
          <a href={trial} className="text-amber-500 underline" target="_blank">
            Listen Free →
          </a>
        </div>

        {/* BOOK 3 */}
        <div>
          <h2 className="text-xl font-bold">Atomic Habits — James Clear</h2>
          <p className="text-gray-400 mb-3">
            A tactical blueprint for behavioral change. Systems over motivation. Discipline over mood.
          </p>
          <a href={trial} className="text-amber-500 underline" target="_blank">
            Start Listening →
          </a>
        </div>

        {/* BOOK 4 */}
        <div>
          <h2 className="text-xl font-bold">The Way of Men — Jack Donovan</h2>
          <p className="text-gray-400 mb-3">
            A rugged study of masculinity, tribe, and strength — perfectly aligned with PCS ethos.
          </p>
          <a href={trial} className="text-amber-500 underline" target="_blank">
            Listen Free →
          </a>
        </div>

      </div>

      <p className="mt-12 text-sm text-gray-600">
        Phoenix Creek Supply may earn a commission on qualifying audiobook trials.
      </p>
    </div>
  );
}
