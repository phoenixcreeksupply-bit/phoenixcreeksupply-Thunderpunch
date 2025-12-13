import { AFFILIATE_LINKS } from "/config/links";
import MonroeMenu from "./MonroeMenu";
import HolidayDropdown from "./HolidayDropdown";
import { useState } from "react";

export default function Header() {
  // Force-hide contact links for now (temporary override)
  const hideContact = true;
  const [open, setOpen] = useState(false);

  function appendUtm(raw) {
    try {
      if (!raw || (!raw.startsWith('http://') && !raw.startsWith('https://'))) return raw;
      const url = new URL(raw);
      // if the link points to the same origin, don't modify
      if (url.origin === window.location.origin) return raw;
      const params = url.searchParams;
      if (!params.has('utm_source')) params.append('utm_source', 'pcs');
      if (!params.has('utm_medium')) params.append('utm_medium', 'site');
      if (!params.has('utm_campaign')) params.append('utm_campaign', 'winter_drop_2025');
      return url.toString();
    } catch (e) {
      return raw;
    }
  }

  return (
    <header className="flex justify-between items-center p-4 bg-black bg-opacity-50">
      <a
        href={appendUtm(AFFILIATE_LINKS.trailPack)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-bold text-lg hover:text-yellow-400"
      >
        Basic Trail Pack
      </a>
      <nav className="space-x-4 flex items-center">
        {/* === Alternative Energy Dropdown === */}
        <div className="relative group inline-block">
          <button
            type="button"
            className="inline-flex items-center space-x-1 text-white hover:text-amber-500 transition-colors"
          >
            <span>Alternative Energy</span>
            <svg
              className="w-4 h-4 mt-0.5 transition-transform group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <ul className="absolute left-0 mt-2 w-64 bg-neutral-900/95 text-sm text-gray-200 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 backdrop-blur-md">
            <li>
              <a
                href={appendUtm('https://5539dkiatcvrixj8ycmtbn5u17.hop.clickbank.net')}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 hover:bg-amber-700/40 rounded-t-xl"
              >
                ⚡ Energy Revolution System
              </a>
            </li>
            <li>
                  <a
                    href={appendUtm('https://03eeffwauivvcukl10r0zn2lbs.hop.clickbank.net')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-amber-700/40"
                  >
                🔋 Ultimate Off-Grid Generator
              </a>
            </li>
            <li>
                  <a
                    href={appendUtm('https://636bfnt8sbmvizle3bgl61amfv.hop.clickbank.net')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-amber-700/40"
                  >
                🏠 Home Power Shield
              </a>
            </li>
            <li>
                  <a
                    href={appendUtm('https://cf2dbbrimbsifxkrrjd9fo9t3l.hop.clickbank.net')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-amber-700/40"
                  >
                ⚙️ Orgone Motor
              </a>
            </li>
            <li>
                  <a
                    href={appendUtm('https://66490ejipfprer7mz7kezc53ul.hop.clickbank.net')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-amber-700/40 rounded-b-xl"
                  >
                🔆 Quick Power System
              </a>
            </li>
          </ul>
        </div>
        <a href="/about" className="text-white hover:text-yellow-400">About</a>
        <a href="/digital-kits" className="text-white hover:text-yellow-400">Digital Kits</a>
        <a href="/gear" className="text-white hover:text-yellow-400">Gear</a>
        {/* <a href="/guides" className="text-white hover:text-yellow-400">Guides</a> */}
        <a href="/monroes-specials" className="text-white hover:text-yellow-400">Monroe's Specials</a>
        <MonroeMenu />
        {/* Winter Drop (NEW) */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
            <a
              href={appendUtm('https://www.jdoqocy.com/click-101573160-14512672')}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-white hover:underline"
            >
              Audio Books
            </a>
            <a href="/library" className="text-white hover:text-yellow-400">Library</a>
            <a
              href={appendUtm('https://www.amazon.com/hz/wishlist/ls/7Z7QI47C28HP?ref_=wl_share&tag=phoenixcreeksupply-20')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              Trail Pack Starters
            </a>
          <a href="/contact" className="text-white hover:text-yellow-400">Contact</a>
        )}
      </nav>
    </header>
  );
}
