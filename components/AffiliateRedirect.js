"use client";

import { useEffect, useState } from 'react';

export default function AffiliateRedirect({ href, pixel, delay = 300 }) {
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    // fire impression pixel
    try {
      const img = new Image();
      img.src = pixel;
    } catch (e) {
      // ignore
    }

    const t = setTimeout(() => {
      setRedirected(true);
      // use top to ensure it breaks out of iframes
      try {
        window.top.location.href = href;
      } catch (err) {
        window.location.href = href;
      }
    }, delay);

    return () => clearTimeout(t);
  }, [href, pixel, delay]);

  return (
    <div>
      {!redirected ? (
        <div>
          <p className="text-sm text-gray-300">Opening partner offer…</p>
          <p className="text-xs text-gray-500 mt-2">If nothing happens, <a href={href} className="underline">click here</a>.</p>
        </div>
      ) : (
        <p className="text-sm text-gray-400">Redirecting…</p>
      )}
    </div>
  );
}
