export const metadata = { title: "Field Guides | Phoenix Creek Supply" };

import AffiliateRedirect from '../../../components/AffiliateRedirect';

const AFFILIATE_HREF = 'https://www.jdoqocy.com/click-101573160-15735849';
const IMPRESSION_PIXEL = 'https://www.ftjcfx.com/image-101573160-15735849';

export default function FieldGuides() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-xl p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Field Guides</h1>
        <p className="mb-6">Redirecting to our partner offer — if you are not redirected, click the link below.</p>
        <AffiliateRedirect href={AFFILIATE_HREF} pixel={IMPRESSION_PIXEL} />
      </div>
    </div>
  );
}
