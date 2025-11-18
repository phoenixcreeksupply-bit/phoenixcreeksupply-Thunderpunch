import Image from "next/image";

export default function BlogTemplate({ title, subtitle, headerImage, children }) {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4 space-y-10">
      {headerImage && (
        <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={headerImage}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      )}

      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-wide">{title}</h1>
        {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
      </header>

      <article className="prose prose-invert prose-lg max-w-none leading-relaxed">
        {children}
      </article>
    </main>
  );
}
