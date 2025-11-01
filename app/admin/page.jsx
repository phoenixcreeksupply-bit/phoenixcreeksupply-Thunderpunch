import AdminPromos from '../../components/AdminPromos';

export const metadata = { title: 'Admin - Promo Controls' };

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Admin: Promo Controls</h1>
      <AdminPromos />
    </main>
  );
}
