"use client";

import { useState, useRef, useEffect } from 'react';
import AffiliateVisitButton from './AffiliateVisitButton';

export default function AffiliateOffers({ links = [], affiliate, preferredHosts: preferredProp }) {
  const [open, setOpen] = useState(false);
  const [overrideIndex, setOverrideIndex] = useState(null);
  const menuRef = useRef(null);
  const itemRefs = useRef([]);

  // preferred host order — choose the primary link by known hosts if present
  // allow per-affiliate override via `preferredProp`; otherwise use sensible default
  const DEFAULT_PREFERRED_HOSTS = ['dpbolvw.net', 'tkqlhce.com', 'kqzyfj.com'];
  const preferredHosts = Array.isArray(preferredProp) && preferredProp.length > 0 ? preferredProp : DEFAULT_PREFERRED_HOSTS;

  useEffect(() => {
    function onDoc(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  if (!links || links.length === 0) return null;

  // respect an explicit primary flag first, then preferred host order, otherwise first
  let primaryIndex = links.findIndex(l => l.primary === true);
  if (primaryIndex === -1) {
    for (const host of preferredHosts) {
      const idx = links.findIndex(l => l.href && l.href.includes(host));
      if (idx !== -1) {
        primaryIndex = idx;
        break;
      }
    }
  }
  if (primaryIndex === -1) primaryIndex = 0;

  // allow runtime overrides (query param or server-provided preference)
  const primary = links[overrideIndex ?? primaryIndex];
  const rest = links.filter((_, i) => i !== primaryIndex);

  useEffect(() => {
    // runtime preference logic (client-side only):
    // 1. Query param `primaryHref` takes highest precedence (exact match)
    // 2. Query param `primaryHost` next (match host substring)
    // 3. Fallback: fetch /api/affiliate-preferences which returns { "affiliate-slug": "href" }
    // This allows instant runtime switching (no rebuild) via URL query or a small server-side mapping.
    try {
      const params = new URLSearchParams(window.location.search);
      const primaryHref = params.get('primaryHref');
      const primaryHost = params.get('primaryHost');
      if (primaryHref) {
        const idx = links.findIndex(l => l.href === primaryHref);
        if (idx !== -1) {
          setOverrideIndex(idx);
          return;
        }
      }
      if (primaryHost) {
        const idx = links.findIndex(l => l.href && l.href.includes(primaryHost));
        if (idx !== -1) {
          setOverrideIndex(idx);
          return;
        }
      }
      // fetch server mapping as a fallback
      fetch('/api/affiliate-preferences')
        .then(r => r.ok ? r.json() : {})
        .then(data => {
          if (!data) return;
          const preferred = data && data[affiliate];
          if (preferred) {
            const idx = links.findIndex(l => l.href === preferred);
            if (idx !== -1) setOverrideIndex(idx);
          }
        })
        .catch(() => {});
    } catch (e) {
      // ignore in SSR or when window is not available
    }

    if (open && itemRefs.current[0]) {
      // focus first menu item for keyboard navigation
      itemRefs.current[0].focus();
    }
  }, [open]);

  function onKeyDownToggle(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpen(true);
    }
  }

  function onItemKeyDown(e, idx) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (idx + 1) % rest.length;
      itemRefs.current[next]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (idx - 1 + rest.length) % rest.length;
      itemRefs.current[prev]?.focus();
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div className="flex items-center gap-3">
  <AffiliateVisitButton href={primary.href} affiliate={affiliate} label={primary.displayLabel ?? primary.label} pixel={primary.pixel} />

      {rest.length > 0 && (
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen(s => !s)}
            onKeyDown={onKeyDownToggle}
            aria-haspopup="menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center px-3 py-2 rounded-lg bg-white/5 text-sm text-gray-200 hover:bg-white/10 transition"
          >
            More offers
            <svg className="ml-2 w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 rounded-md bg-black/80 border border-white/10 shadow-lg p-2 z-50" role="menu" aria-label="More affiliate offers">
              <div className="flex flex-col gap-2">
                {rest.map((l, i) => (
                  <div key={i} className="w-full">
                    <div role="menuitem">
                      <AffiliateVisitButton
                        href={l.href}
                        affiliate={affiliate}
                        label={l.displayLabel ?? l.label}
                        pixel={l.pixel}
                      />
                      {/* expose the button for keyboard focus management */}
                      <button
                        ref={el => (itemRefs.current[i] = el)}
                        onKeyDown={e => onItemKeyDown(e, i)}
                        aria-hidden
                        style={{ position: 'absolute', left: '-9999px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
