"use client";

export default function MoonshotButton({ href }) {
  async function handleClick(e) {
    try {
      // fire-and-forget tracking
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'moonshot_click', href }),
      });
    } catch (err) {
      // ignore tracking errors
      console.error('tracking error', err);
    }
    // open moonshot link in new tab
    window.open(href, '_blank', 'noopener');
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Buy PCS Token on Moonshot"
      className="fixed bottom-6 left-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/90 shadow-lg hover:scale-105 transition-transform"
    >
      <img src="/images/PCSmoonToken.jpg" alt="Buy PCS Token on Moonshot" className="w-10 h-10" />
    </button>
  );
}
