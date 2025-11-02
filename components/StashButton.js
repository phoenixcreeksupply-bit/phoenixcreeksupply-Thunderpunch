"use client";

// Controlled by build-time env flag NEXT_PUBLIC_SHOW_STASH_BUTTON
// Default: hidden (do not render) unless NEXT_PUBLIC_SHOW_STASH_BUTTON=true
export default function StashButton({ href = 'https://freebitco.in/?r=37252628' }) {
  if (process.env.NEXT_PUBLIC_SHOW_STASH_BUTTON !== 'true') return null;
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
