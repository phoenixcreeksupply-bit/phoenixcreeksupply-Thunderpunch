
// app/layout.js
import '../styles/globals.css';
import '../styles/globals.css';
import TokenButton from '../components/TokenButton';
import StashButton from '../components/StashButton';
import MonroeMenu from '../components/MonroeMenu';
import WinterDrop from '../components/WinterDrop';
import Footer from '../components/Footer';
import VercelAnalytics from '../components/VercelAnalytics';
import Header from '../components/Header';

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
      </head>
      <body>
        <Header />
        <main>{children}</main>
  <Footer />
        {/* Vercel Analytics (client) */}
        <VercelAnalytics />
      </body>
    </html>
  );
}
