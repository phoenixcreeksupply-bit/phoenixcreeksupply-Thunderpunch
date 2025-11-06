import { AFFILIATE_LINKS } from "/config/links";
import MonroeMenu from "./MonroeMenu";

export default function Header() {
  // Force-hide contact links for now (temporary override)
  const hideContact = true;

  return (
    <header className="flex justify-between items-center p-4 bg-black bg-opacity-50">
      <a
        href={AFFILIATE_LINKS.trailPack}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-bold text-lg hover:text-yellow-400"
      >
        Basic Trail Pack
      </a>
      <nav className="space-x-4 flex items-center">
        <a href="/about" className="text-white hover:text-yellow-400">About</a>
        <a href="/digital-kits" className="text-white hover:text-yellow-400">Digital Kits</a>
  <a href="/gear" className="text-white hover:text-yellow-400">Gear</a>
  <a href="/guides" className="text-white hover:text-yellow-400">Guides</a>
  <a href="/monroes-specials" className="text-white hover:text-yellow-400">Monroe's Specials</a>
  <MonroeMenu />
        {!hideContact && (
          <a href="/contact" className="text-white hover:text-yellow-400">Contact</a>
        )}
      </nav>
    </header>
  );
}
