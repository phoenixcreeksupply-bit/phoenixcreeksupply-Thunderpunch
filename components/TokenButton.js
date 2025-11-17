export default function TokenButton() {
  // Simple floating referral button — server-safe (no client-only logic)
  const refUrl = "https://freebitco.in/?r=37252628&utm_source=pcs&utm_medium=site&utm_campaign=winter_drop_2025";
  // Prefer the full graphic if present, otherwise fallback to the icon
  const imgSrc = "/images/pcs-token.jpg";

  return (
    <a
      href={refUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="PCS Token referral"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/90 shadow-lg hover:scale-105 transition-transform"
    >
      {/* Server-safe image: prefer full graphic. If missing, browser will fall back visually. */}
      <img src={imgSrc} alt="PCS Token" className="w-10 h-10" />
    </a>
  );
}
