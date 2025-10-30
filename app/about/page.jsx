import React from 'react';

export const metadata = {
  title: 'About | Phoenix Creek Supply',
  description: 'About Monroe and the mission of Phoenix Creek Supply.',
};

export default function AboutPage() {
  return (
    <section
      className="about-monroe text-gray-100 py-16 px-8"
      // Use the uploaded Monroe image as the about background
      style={{
        backgroundImage: "url('/images/Monroe1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div
        className="max-w-4xl mx-auto space-y-16 backdrop-blur-sm bg-transparent rounded-2xl p-8 shadow-2xl"
        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}
      >

        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-wide uppercase">About Monroe & The Mission</h1>
          <p className="text-sm text-gray-400">Phoenix Creek Supply</p>
        </header>

        <article className="space-y-6">
          <h2 className="text-2xl font-semibold text-amber-400">The Man Who Should've Broken</h2>
          <p>
            He wasn't supposed to make it this far. By all accounts — life had thrown enough at Monroe to break most men twice over.
            But pain, for him, was never the ending. It was the forge.
          </p>
          <p>
            He learned early that discipline isn't built in comfort — it's carved out of loss, failure, and long nights where no one's coming to help.
            So he stopped waiting for easy days. He built his strength in the storm instead.
          </p>
          <p>
            There was a time he should've stayed down — when every hit landed, every door closed, and even the ground felt like it wanted to keep him.
            But somewhere between the failures, disappointments, the blood and the dirt, he made the decision that changed everything:
            <strong className="text-amber-300">to get up anyway.</strong>
            Even broken. Even when the world had already written him off.
            He rose without applause, without promise, alone — because that's what real men do when they've got nothing left but fight.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-semibold text-amber-400">Forged From the Wild</h2>
          <p>
            Monroe didn't create Phoenix Creek Supply to chase profit or trend.
            He built it as a rebellion against the softening world — a reminder that grit still matters.
            That a man can build something real with his hands, his word, and his will.
          </p>
          <p>
            Every tool, every map, every claim that bears the PCS mark stands for that principle:
            <strong className="uppercase tracking-wide"> Earn it. Test it. Own it.</strong>
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-semibold text-amber-400">Where Signal Dies, Legacy Begins</h2>
          <p>
            He's the kind of man who walks where the signal dies — where there's no applause, no shortcuts, no excuses.
            The kind who carries his name like a weight, not a slogan.
            He doesn't talk about legacy; he <em>builds</em> it.
            One ridge, one creek, one cut of earth at a time.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-semibold text-amber-400">The Code Lives Here</h2>
          <p>
            Monroe isn't selling gear — he's sharing proof that the old code still works:
          </p>
          <ul className="list-disc list-inside">
            <li>Patience IS a virtue.</li>
            <li>Discipline your Mind.</li>
            <li>Work harder.</li>
            <li>Stand taller.</li>
            <li>Keep your word.</li>
            <li>Leave something worth remembering.</li>
          </ul>
          <p className="font-semibold">
            Because some men break under pressure. <br />
            <span className="text-amber-300">Monroe built a legacy out of it.</span>
          </p>
        </article>

        <footer className="text-center pt-10 border-t border-gray-700">
          <p className="uppercase tracking-wide font-semibold">Phoenix Creek Supply</p>
          <p className="italic text-gray-400">Lead yourself,Live with intent!!</p>
        </footer>

      </div>
    </section>
  );
}
