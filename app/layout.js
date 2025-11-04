
// app/layout.js
import '../styles/globals.css';
import TokenButton from '../components/TokenButton';
import StashButton from '../components/StashButton';
import MonroeMenu from '../components/MonroeMenu';
import Footer from '../components/Footer';
import VercelAnalytics from '../components/VercelAnalytics';

export const metadata = {
  title: 'Phoenix Creek Supply | Lead Yourself, Live With Intent',
  description:
    'Phoenix Creek Supply — rugged tools, digital kits, and gear built for those who lead themselves and live with intent.',
  openGraph: {
    type: 'website',
    url: 'https://www.phoenixcreeksupply.com/',
    title: 'Phoenix Creek Supply',
    description: 'Lead Yourself. Live With Intent.',
    images: [
      {
        url: 'https://www.phoenixcreeksupply.com/brand/PCS-share.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
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
            {/* Blog link temporarily hidden until content is ready
            <a href="/blog" className="text-white hover:underline">
              Blog
            </a>
            */}
            <a href="/gear" className="text-white hover:underline">
              Tools & Gear
            </a>
            <a
              href="https://www.jdoqocy.com/click-101573160-15735849"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-white hover:underline"
            >
              Audio Books
            </a>
            <a
              href="https://www.amazon.com/hz/wishlist/ls/7Z7QI47C28HP?ref_=wl_share&tag=phoenixcreeksupply-20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              Trail Pack starters
            </a>
            {/* (Stash button moved to header left with other buttons) */}
          </nav>
        </header>
        <main>{children}</main>
  <Footer />
        {/* Vercel Analytics (client) */}
        <VercelAnalytics />
      </body>
    </html>
  );
}
