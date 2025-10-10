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
    <button onClick={handleClick} className="inline-flex items-center justify-center p-0 w-auto h-auto bg-transparent rounded-lg shadow-none">
      <img src="/images/PCSmoonToken.jpg" alt="Buy PCS Token on Moonshot" className="w-48 h-auto rounded-md" />
    </button>
  );
}
