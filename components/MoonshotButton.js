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
    <button onClick={handleClick} className="btn-dark">
      Limited Buy In
    </button>
  );
}
