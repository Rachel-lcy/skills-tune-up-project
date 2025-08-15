'use client';

import Image from 'next/image';
import { useCart } from '../../context/CartContext';

export default function ProgramPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-[#fcfbfb]">
      {/* Hero */}
      <section className="pt-28 md:pt-36 w-full bg-gradient-to-r from-[#a9beeb] to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid md:grid-cols-2 items-center gap-10">
          <div className="rounded-2xl leading-tight">
            <h1 className="font-extrabold text-gray-900 text-4xl md:text-5xl">
              Become a <br />Licensed Security <br />Guard in Alberta
            </h1>
          </div>

          <div className="relative h-[280px] sm:h-[360px] md:h-[560px] mt-6 md:mt-0">
            <Image
              src="/program1.jpg"
              alt="Program hero"
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover rounded-md shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mt-10">
        <hr className="w-11/12 mx-auto border-b-2 border-blue-300" />
      </div>

      {/* ABST overview + Add to Cart */}
      <section id="about" className="w-full py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-gray-800 tracking-wide">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-center">
            Alberta Basic <span className="text-yellow-500">Security Training</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
            (ABST) program covers:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-stretch">
            {/* Left image */}
            <div className="w-full">
              <div className="relative mx-auto md:mx-0 h-[220px] sm:h-[300px] md:h-[460px] w-full">
                <Image
                  src="/program2.png"
                  alt="Classroom training"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover rounded-md shadow-md"
                  priority
                />
              </div>
            </div>

            {/* Right bullets + CTA */}
            <div className="flex flex-col md:justify-between text-left">
              <ul className="text-lg sm:text-2xl text-gray-900 list-disc list-inside max-w-2xl space-y-3 leading-relaxed mb-6">
                <li>Canadian laws and procedures for security guards</li>
                <li>Conflict resolution &amp; de-escalation</li>
                <li>How to observe and report incidents</li>
                <li>Written/verbal English communication</li>
                <li>Professionalism, ethics, and safety</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => addToCart(1)}
                  className="self-start bg-yellow-500 text-blue-50 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-800 transition"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program details: requirements / after pass */}
      <section id="program">
        <div className="grid md:grid-cols-2 w-full">
          {/* Left: Government Eligibility Requirements */}
          <div className="bg-[#2c9ee9] px-8 py-10">
            <h2 className="text-white font-bold text-xl sm:text-2xl mb-6">
              Government Eligibility Requirements
            </h2>
            <p className="text-white mb-4 text-base sm:text-lg">To apply, you must:</p>
            <ul className="text-white text-base sm:text-lg list-disc list-inside space-y-2">
              <li>Be aged 18+</li>
              <li>Be eligible to work in Canada</li>
              <li>Have English proficiency (CLB 5 or higher)</li>
              <li>Have no criminal record or ongoing investigations</li>
              <li>Complete training and pass final exam (80%+)</li>
            </ul>
          </div>

          {/* Right: After You Pass */}
          <div className="bg-[#1648b4] px-8 py-10">
            <h2 className="text-white font-bold text-xl sm:text-2xl mb-6">After You Pass</h2>
            <ul className="text-white text-base sm:text-lg list-disc list-inside space-y-2">
              <li>We will help you submit your provincial license application</li>
              <li>You will receive a certificate of completion</li>
              <li>Free review class within 2 years after graduation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="call-to-action">
        <div className="mt-10 mb-10 flex justify-center items-center px-4">
          <div className="w-full max-w-7xl bg-blue-200 text-center p-8 sm:p-14 md:p-20 rounded-3xl">
            <h3 className="text-blue-900 font-semibold text-xl">
              Want more details about our training dates, cost, or location?
            </h3>
            <p className="text-blue-900 mt-2">
              Fill out our contact form and we’ll get back to you quickly.
            </p>

            <div>
              <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-100 transition">
                Talk to Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-yellow-400 py-8 md:py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions (FAQ)
          </h2>

          <div className="mt-6 rounded-3xl bg-white shadow-sm p-4 md:p-6">
            <div className="rounded-xl border-2 border-blue-300 p-5 md:p-8 space-y-6 text-gray-800">
              <div>
                <p className="font-semibold">Q: Who is this course for?</p>
                <p>
                  A: Anyone new to Canada who meets government eligibility and wants to start
                  a stable, rewarding job as a licensed security guard.
                </p>
              </div>

              <div>
                <p className="font-semibold">Q: What’s included in the program?</p>
                <p>
                  A: Interactive classes, ABST curriculum, exam prep, help with licensing
                  application, resume writing, and networking support.
                </p>
              </div>

              <div>
                <p className="font-semibold">Q: Do I need prior security experience?</p>
                <p>A: No—just a willingness to learn and meet Alberta’s licensing requirements.</p>
              </div>

              <div>
                <p className="font-semibold">Q: How much does it cost and where is it held?</p>
                <p>A: Admission fee is $1000</p>
                <p>Flexible payment arrangements:</p>
                <ul className="list-disc list-inside pl-1 space-y-1">
                  <li>$250 weekly payments over 4 weeks prior to class</li>
                  <li>
                    $500 deposit to reserve a seat; remaining $500 due one week before class
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Q: What if I need to refresh my knowledge later?</p>
                <p>A: You can attend a free review session up to 2 years after certification.</p>
              </div>

              <div>
                <p className="font-semibold">Q: Why is it more expensive than alternatives?</p>
                <p>
                  A: It is a high-quality training service designed to truly prepare you for a
                  successful career.
                </p>
              </div>

              <div>
                <p className="font-semibold">
                  Q: Is there government financial support to take this training?
                </p>
                <p>A: Not at this time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom divider */}
      <div className="mt-10 bg-white h-8">
        <hr className="w-11/12 mx-auto border-b-2 border-blue-300" />
      </div>
    </main>
  );
}
