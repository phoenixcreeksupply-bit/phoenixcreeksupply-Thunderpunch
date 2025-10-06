// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Phoenix Creek Supply',
  description: 'Rugged tools for the modern Stoic',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="flex justify-between items-center p-4 bg-black/70">
          <h1 className="text-2xl font-bold text-white">Phoenix Creek Supply</h1>
          <nav className="space-x-6">
            <a href="/digital-kits" className="text-white hover:underline">
              Digital Kits
            </a>
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
              Basic Trail Pack
            </a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
