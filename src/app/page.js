import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Hero section */}
        <section id="hero" className="relative w-full h-screen">
          <Image
          src= "/hero.png"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
          />
        </section>

        {/* About section */}
        <section id="about">

        </section>

        {/* Features / Programs section */}
        <section id="features">

        </section>

        {/* Testimonials / Clients */}
        <section id="testimonials">

        </section>

        {/* CTA Section */}
        <section id="cta">

        </section>

      </main>

    </div>
  );
}
