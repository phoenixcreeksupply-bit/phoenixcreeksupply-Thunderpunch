export default function GearCallout({
  name,
  noticed,
  matters,
  excels,
  fallsShort,
  recommendation,
}) {
  return (
    <section className="border border-neutral-700 bg-neutral-900/70 rounded-lg p-4 md:p-6 space-y-3 mt-8 mb-10">
      {name && (
        <h3 className="text-xl md:text-2xl font-semibold text-amber-400">
          {name}
        </h3>
      )}

      {noticed && (
        <div>
          <h4 className="font-semibold text-gray-100">What I Noticed</h4>
          <p className="text-gray-300 text-sm md:text-base">{noticed}</p>
        </div>
      )}

      {matters && (
        <div>
          <h4 className="font-semibold text-gray-100">Why It Matters</h4>
          <p className="text-gray-300 text-sm md:text-base">{matters}</p>
        </div>
      )}

      {excels && (
        <div>
          <h4 className="font-semibold text-gray-100">Where It Excels</h4>
          <p className="text-gray-300 text-sm md:text-base">{excels}</p>
        </div>
      )}

      {fallsShort && (
        <div>
          <h4 className="font-semibold text-gray-100">Where It Falls Short</h4>
          <p className="text-gray-300 text-sm md:text-base">{fallsShort}</p>
        </div>
      )}

      {recommendation && (
        <div>
          <h4 className="font-semibold text-gray-100">Recommendation</h4>
          <p className="text-gray-300 text-sm md:text-base">
            {recommendation}
          </p>
        </div>
      )}
    </section>
  );
}
