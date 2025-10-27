"use client";

export default function AffiliateVisitButton({ href, affiliate, label = 'Visit Affiliate', pixel }) {
  async function handleVisit(e) {
    e.preventDefault();
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'affiliate_click', href, affiliate }),
      });
    } catch (err) {
      // ignore tracking errors
      console.error('affiliate tracking error', err);
    }
    // open affiliate in a new tab
    window.open(href, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <button
        onClick={handleVisit}
        aria-label={`Visit affiliate ${affiliate}`}
        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
      >
        {label}
      </button>
      {/* pixel image for affiliate tracking if provided (1x1) */}
      {pixel ? <img src={pixel} alt="" width="1" height="1" className="sr-only" /> : null}
    </>
  );
}
