"use client";
import { useState, useEffect, useRef } from "react";
import products from "../data/monroe-products.json";

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
  <img src="/images/COin2.png" alt="Monroe's specials" className="h-8 w-8 rounded-full border" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50">
          <div className="py-2">
            {products.map((l, idx) => (
              <a
                key={l.href + idx}
                href={l.href}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
              >
                <span className="mr-3 flex-shrink-0">
                  {getIcon(l.title)}
                </span>
                <span>{l.title}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function getIcon(title) {
  const commonProps = { width: 18, height: 18, className: "text-gray-600" };

  if (/kit/i.test(title)) {
    // box / kit
    return (
      <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7l9-4 9 4v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3v14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (/knife/i.test(title)) {
    // simple knife / blade
    return (
      <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 20l8-8 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 18l4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (/shovel|shov/i.test(title)) {
    // shovel / spade
    return (
      <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3l6 6-6 6-6-6 6-6z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15l-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (/pan|gold pan|pan/i.test(title)) {
    // pan
    return (
      <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 16l6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // default: magnet
  return (
    <svg {...commonProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3v7a6 6 0 0 0 12 0V3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10h0" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 10h0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
