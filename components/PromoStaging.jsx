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

      // No folder specified: fetch active.json and then fetch each active file
      try {
        const r = await fetch('/promos/active.json', { cache: 'no-store' });
        if (!r.ok) {
          if (!cancelled) setItems([]);
          return;
        }
        const json = await r.json();
        const active = json.active || [];
        const fetched = [];
        for (const f of active) {
          const it = await fetchOne(f);
          if (it) fetched.push(it);
        }
        if (!cancelled) setItems(fetched);
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

  return (
    <div className={className}>
      {items.map((it) => (
        <div key={it.folder} data-promo-folder={it.folder} className="mb-4">
          <div dangerouslySetInnerHTML={{ __html: it.html }} />
        </div>
      ))}
    </div>
  );
}
