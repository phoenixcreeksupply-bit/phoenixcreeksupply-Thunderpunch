import AdminPromos from '../../components/AdminPromos';
import PromoAdminLogin from '../../components/PromoAdminLogin';
import { cookies } from 'next/headers';

export const metadata = { title: 'Admin - Promo Controls' };

export default function Page() {
  const cookie = cookies().get('promo_admin');
  const secret = process.env.PROMO_ADMIN_TOKEN;
  const authed = secret && cookie && cookie.value === secret;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">Admin: Promo Controls</h1>
      {authed ? <AdminPromos /> : <PromoAdminLogin />}
    </main>
  );
}
