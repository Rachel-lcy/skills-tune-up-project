'use client';

import Image from 'next/image';
import { useCart } from '../../context/CartContext';

export default function ProgramPage() {
  const { addToCart } = useCart();

  return (
    <section id="about" className="bg-[#fcfbfb] w-full py-16 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-gray-800 tracking-wide">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          Alberta Basic <span className="text-yellow-500">Security Training</span>
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          (ABST) program covers:
        </h3>

        <div className="flex flex-col md:flex-row md:items-stretch items-center md:justify-between gap-8 md:gap-12 mt-6">
          {/* Left image: centered on mobile, responsive on desktop */}
          <div className="w-full md:w-auto md:flex-shrink-0 md:mt-10">
            <div className="relative mx-auto md:mx-0 h-[200px] sm:h-[260px] md:h-[460px] w-[200px] sm:w-[260px] md:w-auto">
              <Image
                src="/program2.png"
                alt="Program Hero Image"
                width={600}
                height={460}
                priority
                className="object-cover h-full w-full rounded-md shadow-md"
              />
            </div>
          </div>

          {/* Right content: list + button; button aligns left and sticks to bottom on desktop */}
          <div className="flex-1 flex flex-col md:justify-between text-left">
            <ul className="text-lg sm:text-2xl text-gray-900 list-disc list-inside max-w-2xl space-y-3 leading-relaxed mx-4 md:mx-0 mb-4 md:mb-0">
              <li>Canadian laws and procedures for security guards</li>
              <li>Conflict resolution & de-escalation</li>
              <li>How to observe and report incidents</li>
              <li>Written/verbal English communication</li>
              <li>Professionalism, ethics, and safety</li>
            </ul>

            <button
              onClick={() => addToCart(1)}
              className="self-start mx-4 md:mx-0 mt-2 md:mt-0 bg-yellow-500 text-blue-50 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-800 transition duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
