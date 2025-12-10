export default function PCSPageLayout({
  title,
  intro,
  note,
  children,
}) {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-100">

      {/* HEADER SECTION */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>

        {intro && (
          <p className="text-lg text-gray-300 max-w-3xl">
            {intro}
          </p>
        )}

        {note && (
          <p className="mt-4 text-sm text-gray-500">
            {note}
          </p>
        )}
      </section>

      {/* MAIN CONTENT (Cards, Text, Etc.) */}
      <section>
        {children}
      </section>

    </main>
  );
}
