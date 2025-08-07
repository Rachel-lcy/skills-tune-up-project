import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className="relative w-full h-[80vh] font-sans">
        <section id="hero" className="relative w-full h-full">
          {/* img */}
          <Image
            src="/hero.png"
            alt="Hero Banner"
            fill
            className="object-cover"
            priority
          />

          {/* img-cover */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-20 text-white z-10">
            <h1 className="text-3xl sm:text-5xl font-bold max-w-[600px] leading-tight">
              Your pathway to a new career in Alberta starts here.
            </h1>
            <p className="text-base sm:text-lg mt-4 max-w-[500px]">
              New to Canada and facing challenges with job recognition? Alberta needs
              licensed security guards, and we’re here to help you get certified and start working.
            </p>
            <button className="mt-6 bg-yellow-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-500 transition">
              Join the Program
            </button>
          </div>


          <div className="absolute bottom-0 left-0 w-full h-[48px] bg-[#3E86F5] z-10"></div>
        </section>
      </div>

       {/* About section */}

      <section id="about" className="bg-[#fcfbfb] w-full py-16 px-4 sm:px-8 text-center">
        <div className="max-w-5xl mx-auto text-gray-800 tracking-wide">

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-blue-500">Skill Tune Up</span>
          </h2>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            Supporting Immigrants. Building Careers.
          </h3>

          <p className="text-base sm:text-xl text-gray-700 mb-10 sm:leading-loose leading-relaxed">
            We understand the challenges of starting over in a new country. That’s why Skills Tune-Up exists:
            to guide newcomers like you toward reliable, in-demand work as licensed security guards.
          </p>


          <ul className="text-left text-sm sm:text-base text-gray-900 list-disc list-inside max-w-2xl space-y-3 mb-12 leading-relaxed mx-4">
            <li>Over 10 years of real-world experience</li>
            <li>Empathetic, one-on-one support</li>
            <li>Interactive, engaging classes — no boring slideshows</li>
            <li>Post-exam help with completing and submitting your license application</li>
          </ul>


          <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap">
            <Image src="/school.png" alt="icon1" width={60} height={60} />
              <Image src="/school.png" alt="icon2" width={60} height={60} />
              <Image src="/school.png" alt="icon3" width={60} height={60} />
              <Image src="/school.png" alt="icon4" width={60} height={60} />
              <Image src="/school.png" alt="icon5" width={60} height={60} />
          </div>
        </div>
      </section>

        {/* Features / Programs section */}
        <section id="program" className="mt-20">
          <div className="bg-yellow-400 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-10 py-16">

            {/* left */}
            <div className="flex justify-center">
              <Image
                src="/program.png"
                width={480}
                height={800}
                alt="Program pic"
                className="rounded-xl object-cover"
              />
            </div>

            {/* right */}
            <div className="text-left space-y-6 tracking-widest">
              <h3 className="text-5xl font-extrabold">Our Program</h3>
              <p className="text-lg text-gray-900 leading-loose">
                Our 2-week, classroom training program can help you pass the
                <strong> Alberta Basic Security Training (ABST) exam</strong> with a
                final grade of 80% or higher which fulfills a government licensing
                requirement. We also help to prepare you for real-life security work.
              </p>

              <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-blue-800 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-[#fcfbfb] relative w-full pt-8 pb-16">
          <h2 className="text-5xl font-bold mb-2 mt-10 text-center">
            Key <span className="text-blue-500">Features</span>
          </h2>

          <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src="/yellow.png" width={40} height={40} alt="feature icon" />
              <p>Small class size for personal support and engagement</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src="/yellow.png" width={40} height={40} alt="feature icon" />
              <p>Practice exams and exam prep</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src="/yellow.png" width={40} height={40} alt="feature icon" />
              <p>Classes taught by a former law enforcement professional</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src="/blue.png" width={40} height={40} alt="feature icon" />
              <p>72 hours of classroom instruction</p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src="/blue.png" width={40} height={40} alt="feature icon" />
              <p>Safe, welcoming classroom environment for newcomers</p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <Image src="/blue.png" width={40} height={40} alt="feature icon" />
              <p>
                Student led role-playing & story-telling makes learning fun, engaging
                and memorable
              </p>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section id="cta" className="bg-blue-500 w-full py-20">
          <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden">
          {/* back-img */}
            <Image
              src="/cta.png"
              alt="CTA Image"
              fill
              className="object-cover"
            />

          {/* img-cover */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content + button */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-10 h-[500px]">
            <h1 className="text-3xl md:text-4xl font-bold max-w-3xl">
              You don’t just pass the test — you grow your confidence and professional skills for life.
            </h1>
            <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-100 transition duration-300">
              Register Today
            </button>
            </div>
            </div>
        </section>

      </main>

    </div>
  );
}
