import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const capabilities = [
  "Building Construction",
  "Industrial Construction",
  "Structural & Civil Engineering",
  "Project Management & Supervision",
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-[#171a4b] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
              About Parapet
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Construction and engineering solutions built around your project.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              PARAPET CONTRACTORS & ENGINEERING LTD provides construction,
              engineering, and project supervision services for commercial and
              industrial projects.
            </p>
          </div>
        </section>

        {/* Building with Purpose */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
            {/* Image */}
            <div className="relative min-h-[500px] overflow-hidden bg-slate-200">
              <Image
  src="/images/about/about-parapet.jpg"
  alt="Parapet Contractors and Engineering team"
  width={800}
  height={1000}
  className="h-full w-full object-cover"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-[#171a4b]/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 h-2 w-32 bg-[#ed1c24]" />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Building with Purpose
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#171a4b] sm:text-5xl">
                Engineering with precision. Building for lasting impact.
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  At Parapet, we bring together construction capability,
                  engineering knowledge, and project oversight to support
                  clients through different stages of project delivery.
                </p>

                <p>
                  Our focus includes commercial buildings, industrial
                  construction, structural and civil engineering, and
                  professional project management and supervision.
                </p>

                <p>
                  We believe successful projects require clear coordination,
                  practical technical solutions, and attention to the details
                  that matter throughout the construction process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Our Capabilities
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-[#171a4b] sm:text-5xl">
                Supporting projects from planning to delivery.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our services bring together construction, engineering, and
                project oversight to support the different demands of each
                project.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((capability, index) => (
                <article
                  key={capability}
                  className="group border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-sm font-bold text-[#ed1c24]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="mt-8 h-px w-12 bg-slate-200 transition-all duration-300 group-hover:w-full group-hover:bg-[#ed1c24]" />

                  <h3 className="mt-8 text-xl font-black leading-snug text-[#171a4b]">
                    {capability}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="bg-[#171a4b] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                  Our Approach
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                  Clear thinking. Practical execution.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  We approach every project with a focus on understanding the
                  requirements, coordinating the work, and supporting effective
                  delivery from start to finish.
                </p>
              </div>

              <div className="space-y-8">
                <div className="border-b border-white/10 pb-8">
                  <span className="text-sm font-bold text-[#ed1c24]">01</span>

                  <h3 className="mt-3 text-xl font-bold">
                    Understand the project
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    We begin by understanding the project requirements,
                    objectives, and technical considerations.
                  </p>
                </div>

                <div className="border-b border-white/10 pb-8">
                  <span className="text-sm font-bold text-[#ed1c24]">02</span>

                  <h3 className="mt-3 text-xl font-bold">
                    Plan and coordinate
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    Construction and engineering activities require effective
                    planning and coordination across the project.
                  </p>
                </div>

                <div>
                  <span className="text-sm font-bold text-[#ed1c24]">03</span>

                  <h3 className="mt-3 text-xl font-bold">
                    Deliver with oversight
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    Our project management and supervision capabilities support
                    organized execution and attention to project requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
              Let's Work Together
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight text-[#171a4b] sm:text-5xl">
              Tell us about your next project.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you are planning a commercial development, industrial
              project, or engineering work, we would like to hear from you.
            </p>

            <Link
              href="/quote"
              className="mt-10 inline-flex rounded-md bg-[#ed1c24] px-7 py-4 font-bold text-white transition hover:bg-red-700"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}