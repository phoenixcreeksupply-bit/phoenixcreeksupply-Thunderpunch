
"use client";

import GlobalMarketButton from "./GlobalMarketButton";
import { useState } from "react";

export default function Footer() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl p-6 space-y-2 text-sm text-gray-300">
          <p>
            © Phoenix Creek Supply. All rights reserved. 🜂{" "}
            <a
              href="/legal/digital-goods"
              className="text-yellow-300 hover:underline"
            >
              Digital Goods Policy
            </a>
          </p>

          <nav className="space-y-2 text-sm text-gray-300">
            <div className="group relative">
              <div className="hover:underline block cursor-default">Contact</div>
              <div className="absolute left-0 mt-1 w-56 rounded-md bg-black text-sm text-white p-3 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50">
                <div className="leading-relaxed">clarity@phoenixcreeksupply.com</div>
                <div className="leading-relaxed mt-1">monroe@phoenixcreeksupply.com</div>
                <div className="leading-relaxed mt-1">support@phoenixcreeksupply.com</div>
              </div>
            </div>

            <a href="/about" className="hover:underline block">About</a>
            <a href="/legal/affiliate" className="block">Affiliate</a>
            <a href="/policies/affiliate-disclosure" className="hover:underline block">
              Affiliate Disclosure
            </a>
            <a href="/policies/privacy" className="hover:underline block">Privacy Policy</a>
            <a href="/policies/returns" className="hover:underline block">Returns & Refunds</a>
            <a href="/policies/shipping" className="hover:underline block">Shipping Policy</a>
          </nav>
        </div>
      </footer>

      {/* ================================
          FLOATING TAILINGS PILE BUTTON
          + Tooltip (mobile & desktop)
         ================================= */}
      {process.env.NEXT_PUBLIC_SHOW_GLOBAL_MARKET === "true" && (
        <div
          className="
            fixed 
            bottom-4 right-4 
            z-50 
            pointer-events-auto
            max-sm:bottom-3 
            max-sm:right-3 
            max-sm:scale-90
          "
        >
          <div
            className="relative group"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() =>
              setShowTooltip((prev) => !prev) // mobile tap toggle
            }
          >
            <GlobalMarketButton
              label="The Tailings Pile (Explore at Your Own Risk)"
            />

            {/* Tooltip */}
            {showTooltip && (
              <div
                className="
                  absolute 
                  right-0 
                  bottom-full 
                  mb-2 
                  w-52
                  bg-black/90 
                  text-white 
                  text-xs 
                  p-3 
                  rounded-lg 
                  shadow-lg 
                  border 
                  border-neutral-700
                  animate-fade-in
                "
                style={{
                  transform: "translateY(-4px)",
                }}
              >
                Independent global marketplace.
                PCS does not endorse product quality.
                Shipping & reliability vary.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

