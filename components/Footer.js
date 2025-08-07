'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-500 w-full py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo + Text  */}
        <div className="flex items-center space-x-3">
          <Image
            src="/Logo white-04.png"
            width={122}
            height={61}
            alt="Footer Logo"
          />
          <p className="text-white text-sm md:text-base">
            © 2025 <span className="underline font-semibold">SkillsTuneUp</span> – All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 font-medium text-white text-lg">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/program" className="hover:text-yellow-300 transition">Program</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          <Link href="/faq" className="hover:text-yellow-300 transition">FAQ</Link>
        </nav>
      </div>
    </footer>
  );
}
