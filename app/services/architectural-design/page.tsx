import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const benefits = [
  {
    number: "01",
    title: "Designed Around Your Vision",
    description:
      "We listen to your ideas and turn them into practical designs that reflect your needs and project goals.",
  },
  {
    number: "02",
    title: "Functional & Practical",
    description:
      "Our designs focus on spaces that are not only visually appealing but also comfortable, efficient, and practical to build.",
  },
  {
    number: "03",
    title: "Clear Project Planning",
    description:
      "Proper planning and design help you understand your project before construction begins, reducing uncertainty along the way.",
  },
];

export default function ArchitecturalDesignPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="bg-[#171a4b] text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Our Services
              </p>

              <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
                Building ideas into reality.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Every successful project begins with a clear vision. We help
                transform your ideas into practical, functional, and
                well-planned architectural designs that are ready for the next
                stage.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="bg-[#ed1c24] px-7 py-4 font-bold text-white transition hover:bg-red-700"
                >
                  Start Your Project
                </Link>

                <Link
                  href="/contact"
                  className="border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#171a4b]"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <Image
                src="/images/services/architectural-design.jpg"
                alt="Architectural design and construction planning"
                width={1080}
                height={1350}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Good Design Matters
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                A strong project starts with a clear plan.
              </h2>
            </div>

            <div className="text-lg leading-8 text-slate-600">
              <p>
                A well-prepared design gives your project direction before
                construction begins. It helps bring together your vision,
                practical requirements, and available space into a solution
                that can move forward with confidence.
              </p>

              <p className="mt-6">
                At PARAPET CONTRACTORS & ENGINEERING LTD, we work with clients
                to develop thoughtful design solutions that support better
                planning and smoother project execution.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Why Work With Us
              </p>

              <h2 className="mt-5 text-4xl font-black text-[#171a4b] sm:text-5xl">
                Designed to move your project forward.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our approach combines your vision with practical planning to
                create a stronger starting point for your project.
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="bg-white p-8 shadow-sm"
                >
                  <p className="text-sm font-black text-[#ed1c24]">
                    {benefit.number}
                  </p>

                  <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Our Approach
              </p>

              <h2 className="mt-5 text-4xl font-black text-[#171a4b] sm:text-5xl">
                From your idea to a clear direction.
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              <div>
                <p className="text-5xl font-black text-[#ed1c24]">01</p>
                <h3 className="mt-5 text-xl font-black text-[#171a4b]">
                  Understand
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  We begin by understanding your project, ideas, and
                  requirements.
                </p>
              </div>

              <div>
                <p className="text-5xl font-black text-[#ed1c24]">02</p>
                <h3 className="mt-5 text-xl font-black text-[#171a4b]">
                  Plan
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  We organize the requirements and develop a clear design
                  direction.
                </p>
              </div>

              <div>
                <p className="text-5xl font-black text-[#ed1c24]">03</p>
                <h3 className="mt-5 text-xl font-black text-[#171a4b]">
                  Design
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Your ideas are developed into practical and functional design
                  solutions.
                </p>
              </div>

              <div>
                <p className="text-5xl font-black text-[#ed1c24]">04</p>
                <h3 className="mt-5 text-xl font-black text-[#171a4b]">
                  Move Forward
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  With a clearer direction, your project is ready for its next
                  stage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#ed1c24] py-24 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Let's Build Your Vision
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Have an idea? Let's turn it into a clear plan.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Tell us about your project and take the first step toward a
              practical, well-planned solution.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="bg-white px-7 py-4 font-bold text-[#171a4b] transition hover:bg-slate-100"
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                className="border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#ed1c24]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}