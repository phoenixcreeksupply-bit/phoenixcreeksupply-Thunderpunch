"use client";

import { useEffect } from 'react';

export default function AffiliateRedirect({ href, pixel }) {
  useEffect(() => {
    // fire impression pixel
    try {
      const img = new Image();
      img.src = pixel;
    } catch (e) {
      // ignore
    }

    // Open the affiliate link in a new tab immediately so the user stays
    // on the current site. Use noopener,noreferrer for safety.
    try {
      window.open(appendUtm(href), '_blank', 'noopener,noreferrer');
    } catch (err) {
      // fallback: set location in a new window
      const w = window.open();
      if (w) w.location.href = appendUtm(href);
    }
  }, [href, pixel]);

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
    <div>
      <p className="text-sm text-gray-300">Opening partner offer in a new tab…</p>
  <p className="text-xs text-gray-500 mt-2">If nothing happens, <a href={appendUtm(href)} target="_blank" rel="noopener noreferrer" className="underline">click here</a>.</p>
    </div>
  );
}
