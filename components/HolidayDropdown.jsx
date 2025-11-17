"use client";

import Link from "next/link";
import { christmasItems } from "../data/christmasItems";

export default function HolidayDropdown() {
  return (
    <div
      className="
        absolute left-1/2 z-40 mt-3 w-[360px] -translate-x-1/2
        rounded-2xl border border-red-900/40 bg-slate-950/95
        shadow-2xl shadow-black/60 ring-1 ring-emerald-500/20
        backdrop-blur
      "
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-emerald-500/30 px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
          Phoenix Creek · Winter Drop
        </span>
        <span className="rounded-full bg-emerald-900/50 px-2 py-0.5 text-[10px] font-medium text-emerald-200">
          2025 Holiday Picks
        </span>
      </div>

      {/* Item list */}
      <ul className="max-h-[420px] space-y-1 overflow-y-auto px-2 py-3">
        {christmasItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              target="_blank"
              rel="nofollow noreferrer"
              className="
                flex items-center gap-3 rounded-xl px-2 py-2.5
                text-sm text-slate-100 transition
                hover:bg-emerald-900/40 hover:text-emerald-50
              "
            >
              {/* Icon */}
              <div
                className="
                  h-12 w-12 flex-shrink-0 overflow-hidden
                  rounded-xl border border-slate-700/70
                  bg-slate-900/80
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[13px] font-semibold leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-emerald-300/80">
                    View
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-[11px] text-slate-300/90">
                  {item.tagline}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Footer strip */}
      <div className="border-t border-slate-700/70 px-4 py-2 text-[10px] text-slate-400">
        Rugged picks for the modern stoic · Affiliate links help fund the
        mission.
      </div>
    </div>
  );
}
              {/* Icon */}
