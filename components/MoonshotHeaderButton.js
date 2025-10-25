"use client";

export default function MoonshotHeaderButton({ href = 'https://moonshot.com/ubgcjEpaApLjpMjyrP3GCcbpoehEcp47qUWSdTjmoon?ref=28SVAj' }) {
  async function handleClick(e) {
    e.preventDefault();
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'moonshot_click', href }),
      });
    } catch (err) {
      console.error('tracking error', err);
    }
    window.open(href, '_blank', 'noopener,noreferrer');
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Buy PCS Token on Moonshot"
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-sm hover:scale-105 transition mr-2"
    >
      <img src="/images/PCSmoonToken.jpg" alt="Moonshot" className="w-6 h-6" />
    </button>
  );
}
