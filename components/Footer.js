
export default function Footer() {
  return (
    <>
      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl p-6 text-sm text-gray-300 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© Phoenix Creek Supply. All rights reserved. 🜂 <a href="/legal/digital-goods" className="text-yellow-300 hover:underline">Digital Goods Policy</a></p>
          <nav className="flex gap-4">
            <a href="/about" className="hover:underline">About</a>
            <a href="/legal/affiliate">Affiliate</a>
            <a href="/legal/privacy">Privacy</a>
            {/* Contact link hidden temporarily */}
            <a href="/legal/terms">Terms</a>
            <a href="/legal/disclaimer">Disclaimer</a>
            <a href="/legal/returns">Returns Policy</a>
            <a href="/legal/dmca">DMCA Notice</a>
          </nav>
        </div>
      </footer>

      {/* Bottom-right affiliate button - styled like the header Amazon button. Hidden unless NEXT_PUBLIC_SHOW_HOLIDAY_PROMO=true */}
      {process.env.NEXT_PUBLIC_SHOW_HOLIDAY_PROMO === 'true' && (
        <div className="fixed bottom-4 right-4 z-50">
          <a
            href="https://www.anrdoezrs.net/click-101573160-11985611?url=https%3A%2F%2Fwww.dhgate.com%2F"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="px-3 py-1 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
            aria-label="Holidays Handled!"
          >
            Holidays Handled!
          </a>
        </div>
      )}
    </>
  );
}
