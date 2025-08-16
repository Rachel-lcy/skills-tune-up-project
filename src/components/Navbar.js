'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { supabase } from '@/lib/supabaseClient';
import AuthModal from '@/components/AuthModal';
import AccountMenu from '@/components/AccountMenu';

export default function Navbar() {
  const router = useRouter();
  const { cartCount, clearCart } = useCart();

  // Mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);
  // Auth modal
  const [showAuth, setShowAuth] = useState(false);
  // Supabase user
  const [user, setUser] = useState(null);
  // Checkout state
  const [checkingOut, setCheckingOut] = useState(false);

  // Keep user state in sync with Supabase
  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setUser(data.session?.user ?? null);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setShowAuth(false); // close modal after sign-in/up
    });

    return () => {
      mounted = false;
      // guard against changes in supabase-js versions
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  // Centralized auth entry for CTAs
  const handleAuthClick = useCallback(async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      setShowAuth(true);
      return;
    }
    router.push('/program');
  }, [router]);

  // Sign out
  const handleSignOut = useCallback(async () => {
    await supabase.auth.signOut();
    router.refresh();
  }, [router]);

  // Call /api/checkout with POST, then redirect to returned URL
  const handleCheckout = useCallback(async () => {
    try {
      setCheckingOut(true);
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // If you want to pass cart details to the API:
        // body: JSON.stringify({ quantity: cartCount })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Checkout failed');
      }

      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (e) {
      console.error(e);
      alert(e?.message || 'Checkout failed');
    } finally {
      setCheckingOut(false);
    }
  }, []); // add `cartCount` to deps if you pass it to the API

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#051a65] text-white shadow-md">
      {/* Centered container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Keep this height in sync with page padding (e.g. pt-24 on pages) */}
        <div className="flex h-24 items-center gap-4">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 justify-center mt-8">
            <Image
              src="/Logo.png"
              alt="Skills Tune Up"
              width={140}
              height={40}
              priority
            />
          </Link>

          {/* Middle: main nav (centered) */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-10">
            <Link href="/" className="hover:text-yellow-400 font-bold text-xl">
              HOME
            </Link>
            <Link href="/program" className="hover:text-yellow-400 font-bold text-xl">
              PROGRAM
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 font-bold text-xl">
              CONTACT
            </Link>
          </div>

          {/* Right: actions */}
          <div className="ml-auto flex items-center gap-3">
            {/* Checkout -> POST to /api/checkout */}
            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              aria-busy={checkingOut}
              className="hidden sm:inline-block rounded-md bg-[#ffb300] px-4 py-2 text-sm font-semibold text-[#051a65] hover:bg-[#ffd166] transition disabled:opacity-60"
            >
              {checkingOut ? 'PROCESSING...' : 'CHECKOUT'}
            </button>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="hidden sm:inline-block rounded-md border border-white/30 px-4 py-2 text-sm hover:bg-white/10 transition"
              aria-label="Clear cart"
            >
              CLEAR CART
            </button>

            {/* Cart icon with badge */}
            <Link
              href="/program" // or your own /cart route
              className="relative rounded-full p-2 hover:bg-white/10 transition"
              aria-label="Cart"
              title="Cart"
            >
              <Image src="/shopping-cart.png" alt="Cart" width={24} height={24} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-red-500 px-1 text-[11px] font-bold leading-none">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Account: if logged in show menu, otherwise a sign-in icon */}
            {user ? (
              <AccountMenu />
            ) : (
              <button
                onClick={handleAuthClick}
                className="rounded-full p-2 hover:bg-white/10 transition"
                aria-label="Sign in"
                title="Sign in"
              >
                {/* person-circle icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21a8 8 0 1 0-16 0" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-2 hover:bg-white/10"
              onClick={() => setIsOpen(v => !v)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                // close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <Link href="/" className="rounded-md px-3 py-2 hover:bg-white/10">
                HOME
              </Link>
              <Link href="/program" className="rounded-md px-3 py-2 hover:bg-white/10">
                PROGRAM
              </Link>
              <Link href="/contact" className="rounded-md px-3 py-2 hover:bg-white/10">
                CONTACT
              </Link>

              <button
                onClick={clearCart}
                className="rounded-md px-3 py-2 text-left hover:bg-white/10"
              >
                CLEAR CART
              </button>

              {/* Mobile: sign-in / account entry */}
              <button
                onClick={handleAuthClick}
                className="rounded-md px-3 py-2 text-left hover:bg-white/10"
              >
                {user ? 'ACCOUNT' : 'SIGN IN / ACCOUNT'}
              </button>

              {/* Optional: sign out quick action if logged in */}
              {user && (
                <button
                  onClick={handleSignOut}
                  className="rounded-md px-3 py-2 text-left hover:bg-white/10"
                >
                  SIGN OUT
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Auth modal lives in Navbar so it works on all pages */}
      <AuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
        onSuccess={() => router.push('/program')}
      />
    </nav>
  );
}
