
// app/layout.js
import '../styles/globals.css';
import '../styles/globals.css';
import TokenButton from '../components/TokenButton';
import StashButton from '../components/StashButton';
import MonroeMenu from '../components/MonroeMenu';
import WinterDrop from '../components/WinterDrop';
import Footer from '../components/Footer';
import VercelAnalytics from '../components/VercelAnalytics';

export const metadata = {
  metadataBase: new URL('https://www.phoenixcreeksupply.com'),
  title: "Phoenix Creek Supply | Rugged Tools for the Modern Stoic",
  description:
    "Phoenix Creek Supply — digital kits, rugged prospecting gear, and stoic tools for those who lead themselves.",
  openGraph: {
    type: "website",
    url: "https://www.phoenixcreeksupply.com/",
    title: "Phoenix Creek Supply",
    description: "Lead Yourself. Live With Intent.",
    images: [
      {
        url: "/brand/pcs-og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Creek Supply",
    description: "Lead Yourself. Live With Intent.",
    images: ["/brand/pcs-og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Verification script required by AvantLink affiliate onboarding.
            Placing the raw script tag in the head ensures the vendor sees it on the homepage HTML.
            Note: this uses HTTP exactly as supplied by AvantLink; prefer HTTPS if they provide it.
        */}
    {/* Plain HTML comment with the auth token so verifiers that fetch raw HTML can see it easily */}
    {/* Visible in page source: <!-- AvantLink authResponse: 01d685267d651f03926454eb4973f82277048b2b --> */}
  <script type="text/javascript" src="http://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=01d685267d651f03926454eb4973f82277048b2b"></script>
  {/* Also add a harmless meta tag with the plain auth token so it's plainly visible in the homepage HTML source */}
  <meta name="avantlink-authresponse" content="01d685267d651f03926454eb4973f82277048b2b" />
  
  {/* Pinterest Domain Verification */}
  <meta name="p:domain_verify" content="c2681aa5590f1c30fc98c8d35f9a78fd" />
  
  {/* Blog Schema for SEO */}
  <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Creekside with Monroe",
  "url": "https://www.phoenixcreeksupply.com/blog",
  "description": "Reflections, grit, gear, and field notes from the Phoenix Creek frontier.",
  "publisher": {
    "@type": "Organization",
    "name": "Phoenix Creek Supply"
  }
}
`}
  </script>
      </head>
      <body>
        <header className="flex justify-between items-center p-4 bg-black/70">
          <div className="flex items-center space-x-3">
            {/* Site title/logo area */}
            <a href="/" className="text-white font-bold text-lg">Phoenix Creek Supply</a>
            {/* Stash small icon */}
            <StashButton />
            {/* Monroe coin dropdown/menu */}
            <MonroeMenu />
          </div>
          <nav className="space-x-6">
            <a href="/digital-kits" className="text-white hover:underline">
              Digital Kits
            </a>
            {/* === Alternative Energy Dropdown (placed beside Digital Kits) === */}
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
                    href="https://5539dkiatcvrixj8ycmtbn5u17.hop.clickbank.net?utm_source=pcs&utm_medium=site&utm_campaign=winter_drop_2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-amber-700/40 rounded-t-xl"
                  >
                    ⚡ Energy Revolution System
                  </a>
                </li>
                <li>
                  <a
                    href="https://03eeffwauivvcukl10r0zn2lbs.hop.clickbank.net?utm_source=pcs&utm_medium=site&utm_campaign=winter_drop_2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-amber-700/40"
                  >
                    🔋 Ultimate Off-Grid Generator
                  </a>
                </li>
                <li>
                  <a
                    href="https://636bfnt8sbmvizle3bgl61amfv.hop.clickbank.net?utm_source=pcs&utm_medium=site&utm_campaign=winter_drop_2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-amber-700/40"
                  >
                    🏠 Home Power Shield
                  </a>
                </li>
                <li>
                  <a
                    href="https://cf2dbbrimbsifxkrrjd9fo9t3l.hop.clickbank.net?utm_source=pcs&utm_medium=site&utm_campaign=winter_drop_2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-amber-700/40"
                  >
                    ⚙️ Orgone Motor
                  </a>
                </li>
                <li>
                  <a
                    href="https://66490ejipfprer7mz7kezc53ul.hop.clickbank.net?utm_source=pcs&utm_medium=site&utm_campaign=winter_drop_2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-amber-700/40 rounded-b-xl"
                  >
                    🔆 Quick Power System
                  </a>
                </li>
              </ul>
            </div>
            <a href="/blog" className="text-white hover:underline">
              Journal
            </a>
            {/* Winter Drop (server-rendered wrapper uses a small client component for accessibility and interaction) */}
            <WinterDrop />
            <a href="/gear" className="text-white hover:underline">
              Tools & Gear
            </a>
            <a
              href="https://www.jdoqocy.com/click-101573160-15735849?utm_source=pcs&utm_medium=site&utm_campaign=winter_drop_2025"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-white hover:underline"
            >
              Audio Books
            </a>
            <a
              href="https://www.amazon.com/hz/wishlist/ls/7Z7QI47C28HP?ref_=wl_share&tag=phoenixcreeksupply-20&utm_source=pcs&utm_medium=site&utm_campaign=winter_drop_2025"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              Trail Pack Starters
            </a>
            {/* (Stash button moved to header left with other buttons) */}
          </nav>
        </header>
        <main>{children}</main>
  <Footer />
        {/* Vercel Analytics (client) */}
        <VercelAnalytics />
    </div>
    <p class="pcs-disclosure">
      As an Amazon/CJ affiliate, we may earn from qualifying purchases—at no extra cost to you.
    </p>
  </body>
</html>
  );
}
