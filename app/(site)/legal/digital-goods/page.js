import React from 'react';

export const metadata = {
  title: 'Digital Goods Policy | Phoenix Creek Supply',
  description: 'Digital goods policy, refunds, and support contact information for Phoenix Creek Supply.'
};

export default function DigitalGoodsPolicy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-2xl font-bold mb-4">Phoenix Creek Supply Digital Goods Policy</h1>

      <p className="mb-4 text-gray-300"><strong>Effective Date:</strong> October 2025</p>

      <p className="mb-4 text-gray-300">
        All products sold through Phoenix Creek Supply, including digital downloads, guides, templates, and media files, are
        non-refundable due to their immediate, downloadable nature. Please review product descriptions carefully before purchase.
      </p>

      <p className="mb-4 text-gray-300">
        If you experience a technical issue with access or file delivery, contact our support team at
        <a className="ml-1 text-yellow-300 hover:underline" href="mailto:clarity@phoenixcreeksupply.com">clarity@phoenixcreeksupply.com</a>
        within 7 days of purchase, and we&rsquo;ll ensure you receive the correct working files.
      </p>

      <p className="mb-4 text-gray-300">
        By completing your purchase, you acknowledge and agree to this policy. For other inquiries you can also reach us at
        <a className="ml-1 text-yellow-300 hover:underline" href="mailto:monroe@phoenixcreeksupply.com">monroe@phoenixcreeksupply.com</a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Support & Refunds</h2>
      <p className="mb-4 text-gray-300">
        Because digital goods deliver instantly, we can&rsquo;t offer standard refunds. We will, however, assist with any technical
        problems and provide a working copy if delivery failed. Contact support promptly with a copy of your order or receipt.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Eligibility</h2>
      <p className="mb-4 text-gray-300">
        If the product is defective or the download is corrupt, we will make a reasonable effort to provide a replacement or fix.
        Product misuse, changes of mind, or failure to follow installation instructions are not grounds for a refund.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Contact</h2>
      <p className="mb-4 text-gray-300">
        Support: <a className="text-yellow-300 hover:underline" href="mailto:clarity@phoenixcreeksupply.com">clarity@phoenixcreeksupply.com</a>
        <br />
        General: <a className="text-yellow-300 hover:underline" href="mailto:monroe@phoenixcreeksupply.com">monroe@phoenixcreeksupply.com</a>
      </p>

    </div>
  );
}
