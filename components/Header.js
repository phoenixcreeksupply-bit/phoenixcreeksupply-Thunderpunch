import { AFFILIATE_LINKS } from "/config/links";

export default function Header() {
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
      <nav className="space-x-4">
        <a href="/about" className="text-white hover:text-yellow-400">About</a>
        <a href="/digital-kits" className="text-white hover:text-yellow-400">Digital Kits</a>
        <a href="/gear" className="text-white hover:text-yellow-400">Gear</a>
        <a href="/guides" className="text-white hover:text-yellow-400">Guides</a>
        {/* Monroe's Specials image-button. Visible by default now; change to an env-based toggle if you want to hide it later. */}
        <a href="/monroes-specials" className="inline-block">
          <img src="/images/monroe-button.jpg" alt="Monroe's specials" className="inline-block h-8" />
        </a>
        <a href="/contact" className="text-white hover:text-yellow-400">Contact</a>
      </nav>
    </header>
  );
}
