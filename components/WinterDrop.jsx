"use client";

import { useRef, useState, useEffect } from "react";
import HolidayDropdown from "./HolidayDropdown";

export default function WinterDrop() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function scheduleClose(delay = 150) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), delay);
  }

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function onBlur(e) {
    // Keep open if focus moved inside the wrapper
    const related = e.relatedTarget;
    if (wrapperRef.current && related && wrapperRef.current.contains(related)) {
      return;
    }
    scheduleClose(0);
  }

  return (
    <div
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={() => scheduleClose(120)}
      onFocus={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlur={onBlur}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100 hover:border-red-500/60 hover:text-emerald-50"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            setOpen((s) => !s);
          }
        }}
      >
        Winter Drop
        <span className="text-[10px] text-emerald-300/80 ml-2">NEW</span>
      </button>

      {open && (
        <div className="z-50 mt-2">
          <HolidayDropdown />
        </div>
      )}
    </div>
  );
}
