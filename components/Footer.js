
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl p-6 text-sm text-gray-300 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© Phoenix Creek Supply. All rights reserved. 🜂 <a href="/legal/digital-goods" className="text-yellow-300 hover:underline">Digital Goods Policy</a></p>
        <nav className="flex gap-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/legal/affiliate">Affiliate</a>
          <a href="/legal/privacy">Privacy</a>
          <a href="/contact">Contact</a>
          <a href="/legal/terms">Terms</a>
          <a href="/legal/disclaimer">Disclaimer</a>
          <a href="/legal/returns">Returns Policy</a>
          <a href="/legal/dmca">DMCA Notice</a>
        </nav>
      </div>
    </footer>
  );
}
