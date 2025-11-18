export default function Toolkit({
  title = "Monroe's Field Kit",
  items = [],
}) {
  if (!items.length) return null;

  return (
    <section className="mt-10 pt-8 border-t border-neutral-800 space-y-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="space-y-2 text-gray-300 text-base md:text-lg">
        {items.map((item, idx) => (
          <li key={idx}>
            {"•"}{" "}
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline"
              >
                {item.name}
              </a>
            ) : (
              item.name
            )}
            {item.note && (
              <span className="text-gray-400"> {"—"} {item.note}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
