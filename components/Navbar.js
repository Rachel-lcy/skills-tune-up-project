// components/Navbar.js
'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 价格 ID：优先读 .env；也可以写死你刚拿到的 price_xxx
  const PRICE_ID =
    process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || 'price_1wvb1opTs8spuRXtB9pcsy0S';

  const handleCheckout = useCallback(async () => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: PRICE_ID, quantity: 1 }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // 跳到 Stripe Checkout
      } else {
        console.error('No checkout URL returned:', data);
        alert('Checkout failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Checkout failed. Please try again.');
    }
  }, [PRICE_ID]);

  const cartCount = 0; // 若未来做购物车，这里替换为真实数量

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

          {/* 右侧：桌面导航 + Cart + 汉堡 */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-grow space-x-10 justify-end font-semibold items-center h-full">
              <Link href="/" className="hover:text-yellow-400 transition text-2xl">HOME</Link>
              <Link href="/program" className="hover:text-yellow-400 transition text-2xl">PROGRAM</Link>
              <Link href="/contact" className="hover:text-yellow-400 transition text-2xl">CONTACT</Link>
            </nav>

            {/* Cart 按钮（所有断点） */}
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
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-red-500 text-xs font-bold text-white flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger - Mobile Only */}
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-4 pb-4 space-y-3 text-center text-lg font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">HOME</Link>
          <Link href="/program" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">PROGRAM</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">CONTACT</Link>

          {/* 移动端 Checkout 按钮 */}
          <button
            onClick={() => { setIsOpen(false); handleCheckout(); }}
            className="block w-full text-center hover:text-yellow-400 transition"
          >
            CHECKOUT
          </button>
        </div>
      )}
    </header>
  );
}
