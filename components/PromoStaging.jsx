"use client";

import { useEffect, useState } from "react";

// PromoStaging Component
// - folder mode: fetch only /promos/<folder>/active.html
// - auto mode: fetch list, then each active.html
// - cleaned HTML parser with full IMG integrity preservation
export default function PromoStaging({ folder, className = "mx-auto max-w-5xl p-4" }) {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchOne(f) {
      try {
        const res = await fetch(`/promos/${f}/active.html`, { cache: "no-store" });
        if (!res.ok) return null;
        const text = await res.text();
        return { folder: f, html: text };
      } catch {
        return null;
      }
    }

    async function run() {
      // --- Single-folder mode ---
      if (folder) {
        const file = await fetchOne(folder);
        if (!cancelled) {
          setItems(file ? [file] : []);
          setLoaded(true);
        }
        return;
      }

      // --- Auto mode ---
      try {
        const r = await fetch("/api/promos/folders", { cache: "no-store" });

        let folders = [];
        if (r.ok) {
          const json = await r.json();
          folders = json.folders || [];
        } else {
          // fallback to old active.json
          const fb = await fetch("/promos/active.json", { cache: "no-store" });
          if (fb.ok) {
            const jj = await fb.json();
            folders = jj.active || [];
          }
        }

        const fetched = [];
        for (const f of folders) {
          const it = await fetchOne(f);
          if (it) fetched.push(it);
        }

        // ==========================
        // 🔥 GLOBAL PATCH APPLIED
        // ==========================
        const seenPixels = new Set();

        const cleaned = fetched.map((item) => {
          try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(item.html, "text/html");

            // Preserve EXACT promo HTML except:
            // - Dedupe 1x1 tracking pixels
            // - DO NOT touch, strip, or rewrite normal <img> tags
            const imgs = Array.from(doc.getElementsByTagName("img"));
            imgs.forEach((img) => {
              const w = img.getAttribute("width");
              const h = img.getAttribute("height");
              const src = img.getAttribute("src") || "";

              const isPixel =
                (w === "1" && h === "1") ||
                (w === "1" && !h) ||
                (!w && h === "1");

              if (isPixel) {
                if (seenPixels.has(src)) {
                  img.remove(); // block duplicates
                } else {
                  seenPixels.add(src); // allow first one only
                }
              }
            });

            return { folder: item.folder, html: doc.body.innerHTML };
          } catch (err) {
            return item;
          }
        });

        if (!cancelled) setItems(cleaned);
      } catch {
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    }

    run();
    return () => (cancelled = true);
  }, [folder]);

  // ---- Render ----
  if (!loaded || items.length === 0) return null;

  // Single promo
  if (folder) {
    return (
      <div className={className}>
        <div dangerouslySetInnerHTML={{ __html: items[0].html }} />
      </div>
    );
  }

  // Multiple promos (2-column masonry)
  return (
    <div className={className}>
      <div className="columns-1 md:columns-2 gap-4">
        {items.map((it) => (
          <div
            key={it.folder || it.html.slice(0, 40)}
            className="mb-4 break-inside-avoid"
          >
            <div dangerouslySetInnerHTML={{ __html: it.html }} />
          </div>
        ))}
      </div>
    </div>
  );
}


