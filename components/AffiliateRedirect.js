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
      window.open(href, '_blank', 'noopener,noreferrer');
    } catch (err) {
      // fallback: set location in a new window
      const w = window.open();
      if (w) w.location.href = href;
    }
  }, [href, pixel]);

  return (
    <div>
      <p className="text-sm text-gray-300">Opening partner offer in a new tab…</p>
      <p className="text-xs text-gray-500 mt-2">If nothing happens, <a href={href} target="_blank" rel="noopener noreferrer" className="underline">click here</a>.</p>
    </div>
  );
}
