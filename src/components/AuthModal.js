'use client';

import { useEffect, useRef } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabaseClient';

export default function AuthModal({ open, onClose, onSuccess }) {
  const didHandle = useRef(false);

  // Listen once for a successful sign-in, then close and notify parent
  useEffect(() => {
    if (!open) return;
    didHandle.current = false; // reset each time modal opens

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (!didHandle.current && event === 'SIGNED_IN' && session?.user) {
        didHandle.current = true;
        onClose?.();
        onSuccess?.();
      }
    });

    return () => sub.subscription.unsubscribe();
  }, [open, onClose, onSuccess]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4"
    >
      <div className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-2xl">
        <button
          aria-label="Close auth"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full border px-2 py-1 text-sm hover:bg-gray-50"
        >
          ✕
        </button>

        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}   // add/remove providers as you like
          view="sign_in"
          magicLink
          showLinks
        />
      </div>
    </div>
  );
}
