"use client";
import { useState, useEffect, useRef } from "react";

const LINKS = [
  { title: "Prospecting Kit", href: "https://amzn.to/3WzWi2Y" },
  { title: "Field Knife", href: "https://amzn.to/4oslQvi" },
  { title: "Compact Shovel", href: "https://amzn.to/47GTdDl" },
  { title: "Gold Pan", href: "https://amzn.to/3JhTXGW" },
  { title: "Magnet Recovery Kit", href: "https://amzn.to/4oK0gBV" }
];

export default function MonroeMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center px-1 py-0 bg-transparent"
      >
        <img src="/images/monroe-button.jpg" alt="Monroe's specials" className="h-8 w-8 rounded-full border" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white text-black rounded shadow-lg z-50">
          <div className="py-2">
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="block px-4 py-2 text-sm hover:bg-gray-100"
              >
                {l.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
