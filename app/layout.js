
// app/layout.js
import '../styles/globals.css';
import TokenButton from '../components/TokenButton';
import StashButton from '../components/StashButton';
import MoonshotHeaderButton from '../components/MoonshotHeaderButton';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Phoenix Creek Supply',
  description: 'Rugged tools for the modern Stoic',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header className="flex justify-between items-center p-4 bg-black/70">
          <div className="flex items-center">
            {/* Header buttons replace the title */}
            {/* Token (server-safe) is rendered as a floating button at the bottom-right via TokenButton */}
            {/* Moonshot client button */}
            <MoonshotHeaderButton />
            {/* Stash small icon */}
            <StashButton />
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
            <a href="/field-guides" className="text-white hover:underline">
              Field Guides
            </a>
            <a
              href="https://www.amazon.com/hz/wishlist/ls/7Z7QI47C28HP?ref_=wl_share&tag=phoenixcreeksupply-20"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              Build a Basic Trail Pack
            </a>
            {/* (Stash button moved to header left with other buttons) */}
          </nav>
        </header>
        <main>{children}</main>
        <Footer />
        {/* Floating PCS Token referral button */}
        <TokenButton />
      </body>
    </html>
  );
}
