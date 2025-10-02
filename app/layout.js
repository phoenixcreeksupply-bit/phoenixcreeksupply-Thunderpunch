
export const metadata = {
  title: "Phoenix Creek Supply",
  description: "Rugged tools for the modern Stoic — guides, kits, and field gear.",
  openGraph: { images: ["/images/og.png"] }
};

import "./../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
