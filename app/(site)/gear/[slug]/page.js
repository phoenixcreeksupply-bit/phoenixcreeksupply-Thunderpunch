import affiliates from '../affiliates';
import AffiliateVisitButton from '../../../../components/AffiliateVisitButton';
import AffiliateOffers from '../../../../components/AffiliateOffers';
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
            {/* Render primary CTA and collapse additional offers into a small menu */}
            {affiliate.links && affiliate.links.length > 0 ? (
                <>
                  <AffiliateOffers
                    links={affiliate.links}
                    affiliate={affiliate.slug}
                    preferredHosts={affiliate.preferred || affiliate.preferredHosts}
                  />
                  {/* render impression pixels for all links server-side so impressions fire even when links are hidden */}
                  {affiliate.links.map((l, i) =>
                    l.pixel ? (
                      <img key={i} src={l.pixel} alt="" width="1" height="1" className="sr-only" />
                    ) : null
                  )}
                </>
            ) : (
              <AffiliateVisitButton href={affiliate.href} affiliate={affiliate.slug} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
