'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Auth} from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabaseClient";

export default function AuthModal({ open, onClose }) {
  const router = useRouter();

  // If already signed in, close modal and go home
  useEffect(() => {
    if (!open) return;
    supabase.auth.getSession().then(({ data }) => {
      if (data?.session) {
        onClose?.();
        router.replace('/');
      }
    });
  }, [open, onClose, router]);

  // Listen for auth state changes (sign in / sign up success)
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        onClose?.();
        router.replace('/');
      }
    });
    return () => listener.subscription.unsubscribe();
  }, [onClose, router]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-4 shadow-xl">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Sign in / Sign up</h3>
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
          >
            Close
          </button>
        </div>

        <Auth
          supabaseClient={supabase}
          view="sign_in"
          // users can switch to "Sign up" in UI
          providers={[]}
          // add OAuth providers if you want
          appearance={{ theme: ThemeSupa }}
          onlyThirdPartyProviders={false}
          localization={{ variables: { sign_in: { email_label: 'Email' } } }}
          redirectTo={
            typeof window !== 'undefined'
              ? `${window.location.origin}/`
              : undefined
          }
        />
      </div>
    </div>
  );
}