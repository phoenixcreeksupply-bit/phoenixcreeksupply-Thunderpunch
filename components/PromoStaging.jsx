"use client";

import { useEffect, useState } from "react";

export default function PromoStaging({ folder = "kqzyfj-17058779", className = "mx-auto max-w-2xl p-4" }) {
  const [html, setHtml] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const url = `/promos/${folder}/active.html`;
    fetch(url, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setHtml(text);
      })
      .catch(() => {
        if (!cancelled) setHtml(null);
      })
      .finally(() => {
        if (!cancelled) setLoaded(true);
      });

    return () => {
      cancelled = true;
    };
  }, [folder]);

  // If not loaded yet, render nothing to avoid layout shift; once loaded, only show if html exists
  if (!loaded) return null;
  if (!html) return null;

  return (
    <div className={className} data-promo-folder={folder}>
      {/* Render arbitrary trusted HTML from the promo file. Files in /public are controlled by site maintainers. */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
