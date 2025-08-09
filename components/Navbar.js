'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#00075A] absolute top-0 left-0 w-full z-50  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex justify-center items-center">
            <div className="flex justify-center items-center h-full mt-10">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-grow space-x-10 justify-end font-semibold items-center h-full">
            <Link href="/" className="hover:text-yellow-400 transition text-2xl">HOME</Link>
            <Link href="/program" className="hover:text-yellow-400 transition text-2xl">PROGRAM</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition text-2xl">CONTACT</Link>
            <Link href="/faq" className="hover:text-yellow-400 transition text-2xl">FAQ</Link>
          </nav>

          {/* Hamburger Icon - Mobile Only */}
          <div className="md:hidden flex items-center h-full">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <Image
                src={isOpen ? "/close.png" : "/menu.png"}
                alt="Menu Icon"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-4 pb-4 space-y-3 text-center text-lg font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">HOME</Link>
          <Link href="/program" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">PROGRAM</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">CONTACT</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">FAQ</Link>
        </div>
      )}
    </header>
  );
}
