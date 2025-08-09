import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="">
      <div className="w-full bg-blue-500 mt-16 sm:mt-10 min-h-[15vh] md:min-h-[20vh] lg:min-h-[25vh] flex items-center justify-center px-4">
        <h1 className="text-white font-semibold text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Contact Us
        </h1>
      </div>

      <div className="grid col-span-1 text-center mt-14 leading-6">
        <h1 className="font-semibold text-lg sm:text-lg md:text-xl lg:text-2xl">We're happy to help you get started!</h1>
        <h2 className="mb-14 mt-2">Have questions or need more details?<br /> Fill out our contact form and we’ll get back to you as soon as possible.</h2>
      </div>


     {/* Form Section */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* left */}
          <div className="flex justify-center">
            <Image
              src="/program.png"
              width={443}
              height={599}
              alt="Contact us image"
              className="rounded-md shadow"
              priority
            />
          </div>

          {/* right form */}
          <div>
            <h2 className="font-semibold mb-4">Contact Form</h2>

            <form className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm text-gray-600 mb-1">
                  Full Name:
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="James Bond"
                  required
                  className="w-full bg-gray-200/70 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  E-mail:
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jamesbond@gmail.com"
                  required
                  className="w-full bg-gray-200/70 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone-number" className="block text-sm text-gray-600 mb-1">
                  Phone Number:
                </label>
                <input
                  id="phone-number"
                  type="tel"
                  placeholder="888 8888 8888"
                  required
                  className="w-full bg-gray-200/70 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
                  Message:
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full h-40 bg-gray-200/70 rounded-md p-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                />
              </div>


              <button className="w-full md:w-auto px-6 py-3 rounded-md bg-[#00075A] text-white font-medium shadow-md hover:bg-blue-600 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <hr className="w-11/12 mx-auto border-b-2 border-blue-300" />
      </div>


      {/* Contact info */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <li className="flex flex-col items-center text-center gap-3">
            <Image
              src="/phone.png"
              width={56}
              height={56}
              alt=""
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              priority
            />
            <div className="text-blue-900">
              <h3 className="font-semibold text-base sm:text-lg">Our Phone</h3>
              <p className="text-sm sm:text-base">Call us at:</p>
              <p className="font-semibold text-sm sm:text-lg tracking-wide">
                000 0000 0000
              </p>
            </div>
          </li>

          {/* Email */}
          <li className="flex flex-col items-center text-center gap-3">
            <Image
              src="/email.png"
              width={56}
              height={56}
              alt=""
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              priority
            />
            <div className="text-blue-900">
              <h3 className="font-semibold text-base sm:text-lg">Our Email</h3>
              <p className="text-sm sm:text-base">Drop us your email at:</p>
              <a
                href="mailto:info@skillstuneup.com"
                className="font-semibold text-sm sm:text-lg underline-offset-4 hover:underline"
              >
                info@skillstuneup.com
              </a>
            </div>
          </li>

          {/* Address */}
          <li className="flex flex-col items-center text-center gap-3">
            <Image
              src="/address.png"
              width={56}
              height={56}
              alt=""
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              priority
            />
            <div className="text-blue-900">
              <h3 className="font-semibold text-base sm:text-lg">Our Address</h3>
              <p className="text-sm sm:text-base">Visit us at:</p>
              <address className="not-italic font-semibold text-sm sm:text-lg">
                Edmonton, Alberta
              </address>
            </div>
          </li>
        </ul>
      </section>


      <div className="mt-10 mb-10">
        <hr className="w-11/12 mx-auto border-b-2 border-blue-300" />
      </div>


    </main>
  );
}