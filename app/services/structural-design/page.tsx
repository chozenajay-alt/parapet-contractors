import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const benefits = [
  {
    number: "01",
    title: "Safety Comes First",
    description:
      "Our structural solutions are developed with careful attention to stability, safety, and the demands of your project.",
  },
  {
    number: "02",
    title: "Built for Performance",
    description:
      "We focus on practical and efficient structural solutions that support reliable performance and long-term durability.",
  },
  {
    number: "03",
    title: "Confidence Before Construction",
    description:
      "Proper structural planning gives you a clearer understanding of how your project will be supported before construction begins.",
  },
];

const process = [
  {
    number: "01",
    title: "Assess",
    description:
      "We begin by understanding the project requirements and the structural demands of the proposed development.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We identify the most practical approach and organize the structural requirements of the project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "The project is developed into a clear structural solution focused on strength, stability, and efficiency.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "With a clear structural direction, your project is better prepared for the next stage of development.",
  },
];

export default function StructuralDesignPage() {
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
                Strong designs. Solid structures.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                A strong structure begins with the right design. We provide
                practical structural solutions focused on safety, stability,
                efficiency, and long-term performance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="bg-[#ed1c24] px-7 py-4 font-bold text-white transition hover:bg-red-700"
                >
                  Discuss Your Project
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
                src="/images/services/structural-design.jpg"
                alt="Structural design and engineering"
                width={1080}
                height={1350}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Built on Strength
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                Every successful structure needs a solid foundation.
              </h2>
            </div>

            <div className="text-lg leading-8 text-slate-600">
              <p>
                Structural design plays an important role in determining how a
                building or engineering project performs over time. Proper
                planning helps create a clearer path toward a stable and
                reliable structure.
              </p>

              <p className="mt-6">
                At PARAPET CONTRACTORS & ENGINEERING LTD, we approach
                structural design with a focus on practical solutions that
                support safety, efficiency, and confidence throughout the
                construction process.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Why Structural Planning Matters
              </p>

              <h2 className="mt-5 text-4xl font-black text-[#171a4b] sm:text-5xl">
                Better planning. Stronger results.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                A carefully considered structural solution gives your project a
                stronger starting point before construction moves forward.
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
                A clear process from planning to direction.
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {process.map((step) => (
                <div key={step.number}>
                  <p className="text-5xl font-black text-[#ed1c24]">
                    {step.number}
                  </p>

                  <h3 className="mt-5 text-xl font-black text-[#171a4b]">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#ed1c24] py-24 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              Build With Confidence
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Start with a structure you can rely on.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Talk to our team about your project and discover how proper
              structural planning can help create a stronger path forward.
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