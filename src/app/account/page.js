'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let ignore = false;
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (ignore) return;
      if (!data.user) {
        // not logged in: show auth modal or redirect
        document.dispatchEvent(new CustomEvent('open-auth'));
        router.push('/'); // or stay and show modal; your call
        return;
      }
      setUser(data.user);
      setLoading(false);
    })();
    return () => { ignore = true; };
  }, [router]);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) return null;

  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-4">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h1 className="text-2xl font-bold mb-1">Account</h1>
          <p className="text-gray-600 mb-6">Manage your profile and sign out.</p>

          <dl className="grid grid-cols-1 gap-4">
            <div>
              <dt className="text-sm text-gray-500">Email</dt>
              <dd className="font-medium">{user?.email}</dd>
            </div>
            {/* add more fields if you store user_metadata */}
          </dl>

          <div className="mt-8 flex gap-3">
            <button
              onClick={signOut}
              className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Sign out
            </button>

            <button
              onClick={() => router.back()}
              className="rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
