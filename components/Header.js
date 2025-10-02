
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <a href="/" className="font-bold text-xl tracking-wide">Phoenix Creek Supply</a>
        <div className="flex gap-4">
          <a href="/(site)/digital-kits" className="btn">Digital Kits</a>
          <a href="/(site)/gear" className="btn">Gear</a>
          <a href="/(site)/blog" className="btn">Guides</a>
        </div>
      </nav>
    </header>
  );
}
