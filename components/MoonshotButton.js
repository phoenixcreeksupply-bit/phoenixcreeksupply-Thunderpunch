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
    // open moonshot link in new tab (append UTM params for outbound tracking)
    const final = appendUtm(href);
    window.open(final, '_blank', 'noopener');
  }

  function appendUtm(raw) {
    try {
      const url = new URL(raw);
      if (url.origin === window.location.origin) return raw;
      const params = url.searchParams;
      if (!params.has('utm_source')) params.append('utm_source', 'pcs');
      if (!params.has('utm_medium')) params.append('utm_medium', 'site');
      if (!params.has('utm_campaign')) params.append('utm_campaign', 'winter_drop_2025');
      return url.toString();
    } catch (e) {
      return raw;
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Open Moonshot offer"
      className="fixed bottom-6 left-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/90 shadow-lg hover:scale-105 transition-transform"
    >
      <img src="/images/PCSmoonToken.jpg" alt="Moonshot" className="w-10 h-10" />
    </button>
  );
}
