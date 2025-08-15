'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// NOTE: your components folder is at project root; context is under src/
import { useCart } from '../src/context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount, clearCart } = useCart();

  // Prefer reading from env; fallback to a placeholder for local testing
  const PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || 'price_1wvb1opTs8spuRXtB9pcsy0S';

  // Create a Checkout Session and redirect to Stripe
  const handleCheckout = useCallback(async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: PRICE_ID,
          quantity: Math.max(cartCount, 1), // allow testing even when count is 0
        }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert('Checkout failed. Please try again.');
      }
    } catch (e) {
      console.error(e);
      alert('Checkout failed. Please try again.');
    }
  }, [PRICE_ID, cartCount]);

  return (
    <header className="bg-[#00075A] absolute top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center h-full mt-10">
              <Image
                src="/Logo Horizontal-04.png"
                alt="Skills Tune Up Logo"
                width={150}
                height={74}
                className="object-contain cursor-pointer"
                priority
              />
            </div>
          </Link>

          {/* Right side: desktop nav + desktop actions + cart + hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop navigation */}
            <nav className="hidden md:flex flex-grow space-x-10 justify-end font-semibold items-center h-full">
              <Link href="/" className="hover:text-yellow-400 transition text-2xl">HOME</Link>
              <Link href="/program" className="hover:text-yellow-400 transition text-2xl">PROGRAM</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition text-2xl">CONTACT</Link>
            </nav>

            {/* Desktop actions (visible from md and up) */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleCheckout}
                className="inline-flex items-center bg-yellow-500 text-blue-50 font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition"
              >
                CHECKOUT
              </button>
              <button
                onClick={clearCart}
                disabled={cartCount === 0}
                className="inline-flex items-center border border-white/40 text-white/90 hover:bg-white/10 rounded-lg py-2 px-4 transition disabled:opacity-40 disabled:cursor-not-allowed"
                title={cartCount === 0 ? 'Cart is empty' : 'Clear cart'}
              >
                CLEAR CART
              </button>
            </div>

            {/* Cart button (shown at all breakpoints) */}
            <button
              onClick={handleCheckout}
              aria-label="Cart / Checkout"
              className="relative inline-flex items-center justify-center rounded-md ring-1 ring-yellow-400/60 hover:ring-yellow-300 transition p-1"
            >
              <Image
                src="/shopping-cart.png"
                alt="Shopping Cart"
                width={30}
                height={30}
                className="object-contain"
              />
              {/* Numeric badge */}
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>

            {/* Hamburger (mobile only) */}
            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none p-2"
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Toggle Menu"
              >
                <Image
                  src={isOpen ? '/close.png' : '/menu.png'}
                  alt="Menu Icon"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown (only when isOpen) */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-4 pb-4 space-y-3 text-center text-lg font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">HOME</Link>
          <Link href="/program" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">PROGRAM</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">CONTACT</Link>

          <button
            onClick={() => { setIsOpen(false); handleCheckout(); }}
            className="block w-full text-center hover:text-yellow-400 transition"
          >
            CHECKOUT
          </button>

          <button
            onClick={() => { clearCart(); setIsOpen(false); }}
            className="block w-full text-center hover:text-yellow-400 transition disabled:opacity-40"
            disabled={cartCount === 0}
          >
            CLEAR CART
          </button>
        </div>
      )}
    </header>
  );
}
