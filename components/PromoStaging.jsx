"use client";

import { useEffect, useState } from "react";

// PromoStaging: two modes
// - folder provided: fetch /promos/<folder>/active.html and render it
// - no folder: fetch /promos/active.json and render every active folder found
export default function PromoStaging({ folder, className = "mx-auto max-w-2xl p-4" }) {
  const [items, setItems] = useState([]); // array of { folder, html }
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchOne(f) {
      try {
        const res = await fetch(`/promos/${f}/active.html`, { cache: "no-store" });
        if (!res.ok) return null;
        const text = await res.text();
        return { folder: f, html: text };
      } catch (e) {
        return null;
      }
    }

    async function run() {
      if (folder) {
        const single = await fetchOne(folder);
        if (!cancelled) {
          setItems(single ? [single] : []);
          setLoaded(true);
        }
        return;
      }

      // No folder specified: fetch promo folder list from readonly API and then fetch each active file
      try {
        const r = await fetch('/api/promos/folders', { cache: 'no-store' });
        if (!r.ok) {
          // fallback to the old active.json if the API is unavailable
          const fallback = await fetch('/promos/active.json', { cache: 'no-store' }).catch(() => null);
          if (!fallback || !fallback.ok) {
            if (!cancelled) setItems([]);
            return;
          }
          const fj = await fallback.json();
          const active = fj.active || [];
          const fetched = [];
          for (const f of active) {
            const it = await fetchOne(f);
            if (it) fetched.push(it);
          }
          if (!cancelled) setItems(fetched);
          return;
        }

        const json = await r.json();
        const active = json.folders || [];
        const fetched = [];
        for (const f of active) {
          const it = await fetchOne(f);
          if (it) fetched.push(it);
        }

        // Deduplicate 1x1 tracking pixels across promos so the same pixel URL doesn't fire multiple times
        try {
          const seen = new Set();
          const processed = fetched.map((item) => {
            try {
              const parser = new DOMParser();
              const doc = parser.parseFromString(item.html, 'text/html');

              // Append UTMs to outbound links in promos (client-side) while preserving
              // existing query params and affiliate tracking tags.
              try {
                const anchors = Array.from(doc.getElementsByTagName('a'));
                for (const a of anchors) {
                  const href = a.getAttribute('href') || '';
                  try {
                    const tmp = new URL(href, window.location.origin);
                    if (tmp.origin !== window.location.origin && (tmp.protocol === 'http:' || tmp.protocol === 'https:')) {
                      const params = tmp.searchParams;
                      if (!params.has('utm_source')) params.append('utm_source', 'pcs');
                      if (!params.has('utm_medium')) params.append('utm_medium', 'site');
                      if (!params.has('utm_campaign')) params.append('utm_campaign', 'winter_drop_2025');
                      a.setAttribute('href', tmp.toString());
                    }
                  } catch (e) {
                    // leave href unchanged if URL parsing fails
                  }
                }
              } catch (e) {
                // ignore anchor processing errors
              }

              const imgs = Array.from(doc.getElementsByTagName('img'));
              for (const img of imgs) {
                const w = img.getAttribute('width');
                const h = img.getAttribute('height');
                const src = img.getAttribute('src') || '';
                // treat as tracking pixel when width and height are 1 (common pattern)
                if ((w === '1' && h === '1') || (w === '1' && !h) || (!w && h === '1')) {
                  if (seen.has(src)) {
                    img.remove();
                  } else {
                    seen.add(src);
                  }
                }
              }
              return { folder: item.folder, html: doc.body.innerHTML };
            } catch (e) {
              return item;
            }
          });
          if (!cancelled) setItems(processed);
        } catch (e) {
          if (!cancelled) setItems(fetched);
        }
      } catch (e) {
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [folder]);

  if (!loaded) return null;
  if (!items || items.length === 0) return null;

  // Render promos in a controlled masonry (CSS columns) layout — image-only, no tiles.
  return (
    <div className={className}>
      <div className={`columns-1 sm:columns-2 lg:columns-3 gap-5 mt-10 ${className}`}>
        {items.map((it) => (
          <div
            key={it.folder}
            className="promo-masonry mb-5 break-inside-avoid"
            dangerouslySetInnerHTML={{ __html: it.html }}
          />
        ))}
      </div>
    </div>
  );
}
