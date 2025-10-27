import affiliates from '../affiliates';
import AffiliateVisitButton from '../../../../components/AffiliateVisitButton';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return affiliates.map(a => ({ slug: a.slug }));
}

export default function AffiliatePage({ params }) {
  const { slug } = params;
  const affiliate = affiliates.find(a => a.slug === slug);
  if (!affiliate) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          {affiliate.logo && (
            <img src={affiliate.logo} alt={affiliate.name} className="w-full h-64 object-cover rounded-md shadow-lg" />
          )}
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold">{affiliate.name}</h1>
          <p className="text-gray-300 mt-2 mb-4">{affiliate.description}</p>

          {affiliate.features && affiliate.features.length > 0 && (
            <ul className="list-disc list-inside mb-6 text-gray-300">
              {affiliate.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-3">
            {/* Render each provided affiliate link as a tracked button with optional pixel */}
            {affiliate.links && affiliate.links.length > 0 ? (
              affiliate.links.map((l, idx) => (
                <AffiliateVisitButton
                  key={idx}
                  href={l.href}
                  affiliate={affiliate.slug}
                  label={l.label}
                  pixel={l.pixel}
                />
              ))
            ) : (
              <AffiliateVisitButton href={affiliate.href} affiliate={affiliate.slug} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
