
export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl p-6 text-sm text-gray-300 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© Phoenix Creek Supply. All rights reserved.</p>
        <nav className="flex gap-4">
          <a href="/(site)/legal/affiliate">Affiliate</a>
          <a href="/(site)/legal/privacy">Privacy</a>
          <a href="/(site)/legal/terms">Terms</a>
          <a href="/(site)/legal/disclaimer">Disclaimer</a>
        </nav>
      </div>
    </footer>
  );
}
