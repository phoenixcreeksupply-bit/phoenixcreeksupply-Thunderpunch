export default function FieldNote({ title, children }) {
  return (
    <section className="border border-amber-500/40 bg-neutral-900/80 rounded-lg p-4 md:p-5 space-y-2 mt-6 mb-8">
      {title && (
        <h3 className="text-lg md:text-xl font-semibold text-amber-400">
          {title}
        </h3>
      )}
      <div className="text-gray-200 text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </section>
  );
}
