import Image from "next/image";

export default function ProgramPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#a9beeb] to-white py-24">
        <div className="grid md:grid-cols-2 items-center gap-10 ">

          <div className=" rounded-2xl p-8 md:p-14 leading-4 ">
            <h1 className="font-extrabold text-gray-900 text-4xl md:text-5xl leading-8 ml-32">
              Become a <br />Licensed Security <br />Guard in Alberta
            </h1>
          </div>

          <div className="relative h-[420px] md:h-[560px] mt-10 sm:mr-32 ">
            <Image
              src="/program1.jpg"
              alt="Program Hero Image"
              fill
              priority
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover  shadow-md"
            />
          </div>
        </div>
      </section>

      <div className="mt-10">
        <hr className="w-11/12 mx-auto border-b-2 border-blue-300" />
      </div>

      {/* Content Section */}
      <section id="about" className="bg-[#fcfbfb] w-full py-16 px-4 sm:px-8 text-center">

        <div className="max-w-5xl mx-auto text-gray-800 tracking-wide">

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Alberta Basic <span className="text-yellow-500">Security Training</span>
          </h2>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            (ABST) program covers:
          </h3>

          <div className="flex justify-around items-center">
            <div className="relative h-[320px] md:h-[460px] mt-10">
            <Image
              src="/program2.png"
              alt="Program Hero Image"
              width={229}
              height={264}
              priority
              className="object-cover  shadow-md"
            />
            </div>

            <div className="flex justify-start">
              <ul className="text-left text-lg sm:text-2xl text-gray-900 list-disc list-inside max-w-2xl space-y-3 mb-12 leading-relaxed mx-4">
              <li>Canadian laws and procedures for security guards</li>
              <li>Conflict resolution & de-escalation</li>
              <li>How to observe and report incidents</li>
              <li>Written/verbal English communication</li>
              <li>Professionalism, ethics, and safety</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="program">
        <div className="grid md:grid-cols-2 w-full">
          {/* left：Government Eligibility Requirements */}
          <div className="bg-[#2c9ee9] px-8 py-10 ">
            <h2 className="text-white font-bold text-xl sm:text-2xl mb-6">
              Government Eligibility Requirements
            </h2>
            <p className="text-white mb-4 text-base sm:text-lg">
              To apply, you must:
            </p>
            <ul className="text-white text-base sm:text-lg list-disc list-inside space-y-2">
              <li>Be aged 18+</li>
              <li>Be eligible to work in Canada</li>
              <li>Have English proficiency (CLB 5 or higher)</li>
              <li>Have no criminal record or ongoing investigations</li>
              <li>Complete training and pass final exam (80%+)</li>
            </ul>
          </div>

          {/* right：After You Pass */}
          <div className="bg-[#1648b4] px-8 py-10">
            <h2 className="text-white font-bold text-xl sm:text-2xl mb-6">
              After You Pass
            </h2>
            <ul className="text-white text-base sm:text-lg list-disc list-inside space-y-2">
              <li>
                We’ll help you fill out and submit your provincial license application
              </li>
              <li>You’ll get a certificate of completion</li>
              <li>
                Access a free review class anytime within 2 years after graduation!
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="call-to-action">
        <div className="mt-10 mb-10 flex justify-center items-center">
          <div className="max-w-7xl bg-blue-200 text-center p-20 rounded-3xl ">
            <h1 className="text-blue-900 font-semibold text-xl">Want more details about our training dates, cost, or location?</h1>
            <h2 className="text-blue-900">Fill out our contact form we’ll get back to you quickly.</h2>

            <div>
              <button className="mt-6 bg-white text-blue-600 font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-100 transition duration-300 ">
                Talk to Us
              </button>
          </div>
          </div>
        </div>


      </section>

      {/* FAQ */}
      <section id="faq" className="bg-yellow-400 py-8 md:py-10 ">
        <div className="max-w-5xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions (FAQ)
          </h2>

          <div className="mt-6 rounded-3xl bg-white shadow-sm p-4 md:p-6">
            <div className="rounded-xl border-2 border-blue-300 p-5 md:p-8 space-y-6 text-gray-800">
              {/* Q1 */}
              <div>
                <p className="font-semibold">Q: Who is this course for?</p>
                <p>
                  A: Anyone new to Canada who meets the eligibility criteria established
                  by the provincial government and wants to begin a stable, rewarding job
                  as a licensed security guard.
                </p>
              </div>

              {/* Q2 */}
              <div>
                <p className="font-semibold">Q: What’s included in the program?</p>
                <p>
                  A: Interactive classes, ABST curriculum training, exam preparation, help with
                  accurate and full completion of government licensing application, resume writing
                  and networking support.
                </p>
              </div>

              {/* Q3 */}
              <div>
                <p className="font-semibold">Q: Do I need prior security experience?</p>
                <p>A: No, just a willingness to learn and meet Alberta's licensing requirements.</p>
              </div>

              {/* Q4 */}
              <div>
                <p className="font-semibold">Q: How much does it cost and where is it held?</p>
                <p>A: Admission fee is $1000</p>
                <p>Flexible payment arrangements are:</p>
                <ul className="list-disc list-inside pl-1 space-y-1">
                  <li>$250 weekly payments over 4 weeks prior to class</li>
                  <li>
                    $500 paid in advance to reserve a seat; remaining $500 is paid a week
                    prior to the start of class
                  </li>
                </ul>
              </div>

              {/* Q5 */}
              <div>
                <p className="font-semibold">Q: What if I need to refresh my knowledge later?</p>
                <p>A: You can attend a free review session up to 2 years after certification.</p>
              </div>

              {/* Q6 */}
              <div>
                <p className="font-semibold">
                  Q: Why is it so much more expensive than the existing alternatives?
                </p>
                <p>
                  A: This is a high-quality training service designed to truly prepare you
                  for a successful career.
                </p>
              </div>

              {/* Q7 */}
              <div>
                <p className="font-semibold">
                  Q: Is there government financial support to take this training?
                </p>
                <p>A: Unfortunately, there is no government financial support at this time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 bg-white h-8">
        <hr className="w-11/12 mx-auto border-b-2 border-blue-300" />
      </div>

    </main>
  );
}