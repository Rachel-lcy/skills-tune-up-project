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
    <header className="bg-black bg-opacity-70 text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/Logo Horizontal-04.png"
              alt="Skills Tune Up Logo"
              width={200}
              height={100}
              className="cursor-pointer"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-semibold">
            <Link href="/" className="hover:text-yellow-400 transition">HOME</Link>
            <Link href="/program" className="hover:text-yellow-400 transition">PROGRAM</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition">CONTACT</Link>
            <Link href="/faq" className="hover:text-yellow-400 transition">FAQ</Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Image
              src={isOpen ? "/close-icon.svg" : "/burger-menu-right-svgrepo-com.svg"}
              alt="Menu Icon"
              width={24}
              height={24}
              className="w-6 h-6 cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-4 pb-4 space-y-3 text-center text-sm font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">
            HOME
          </Link>
          <Link href="/program" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">
            PROGRAM
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">
            CONTACT
          </Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="block hover:text-yellow-400 transition">
            FAQ
          </Link>
        </div>
      )}
    </header>
  );
}
