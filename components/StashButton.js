"use client";

export default function StashButton({ href = 'https://get.stash.com/r/50c5cr30f50cb-MNXV8C57' }) {
  async function handleClick(e) {
    e.preventDefault();
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'stash_click', href }),
      });
    } catch (err) {
      // ignore tracking errors
      console.error('stash tracking error', err);
    }
    window.open(href, '_blank', 'noopener,noreferrer');
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label="Open Stash referral"
      rel="noopener noreferrer sponsored"
      className="inline-flex items-center justify-center ml-3 px-2 py-1 rounded-lg bg-white/90 text-black hover:bg-gray-200 transition"
    >
      <img src="/images/COin2.jpg" alt="Stash" className="w-6 h-6 rounded-full" />
    </a>
  );
}
