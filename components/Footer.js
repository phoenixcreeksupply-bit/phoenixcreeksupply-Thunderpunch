
export default function Footer() {
  return (
    <>
      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl p-6 space-y-2 text-sm text-gray-300">
          <p>
            © Phoenix Creek Supply. All rights reserved. 🜂{' '}
            <a href="/legal/digital-goods" className="text-yellow-300 hover:underline">
              Digital Goods Policy
            </a>
          </p>
          <nav className="space-y-2 text-sm text-gray-300">
            <a href="/about" className="hover:underline block">About</a>
            <a href="/legal/affiliate" className="block">Affiliate</a>
            <a href="/policies/affiliate-disclosure" className="hover:underline block">Affiliate Disclosure</a>
            <a href="/policies/privacy" className="hover:underline block">Privacy Policy</a>
            <a href="/policies/returns" className="hover:underline block">Returns & Refunds</a>
            <a href="/policies/shipping" className="hover:underline block">Shipping Policy</a>
          </nav>
        </div>
      </footer>

      {/* Bottom-right affiliate button - styled like the header Amazon button. Hidden unless NEXT_PUBLIC_SHOW_HOLIDAY_PROMO=true */}
        {process.env.NEXT_PUBLIC_SHOW_HOLIDAY_PROMO === 'true' && (
        <div className="fixed bottom-4 right-4 z-50">
          <a
            href="https://www.anrdoezrs.net/click-101573160-11985611?url=https%3A%2F%2Fwww.dhgate.com%2F&utm_source=pcs&utm_medium=site&utm_campaign=winter_drop_2025"
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
