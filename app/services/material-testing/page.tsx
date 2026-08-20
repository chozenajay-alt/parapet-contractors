import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function MaterialTestingPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="bg-[#171a4b] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Material Testing
              </p>

              <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
                Build with confidence in your materials.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Quality construction starts with understanding the materials
                being used. Our material testing services help support informed
                decisions, quality control, safety, and confidence throughout
                your project.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex bg-[#ed1c24] px-6 py-4 font-bold text-white transition hover:bg-red-700"
                >
                  Request Testing →
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/services/material-testing.jpg"
                alt="Construction material testing"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Quality begins with knowledge
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                Know what goes into your project.
              </h2>
            </div>

            <div className="text-lg leading-8 text-slate-600">
              <p>
                The performance of a building depends greatly on the quality
                and suitability of the materials used during construction.
                Testing provides valuable information that helps support better
                engineering and construction decisions.
              </p>

              <p className="mt-6">
                Our approach focuses on careful evaluation and clear reporting
                to help clients and project teams better understand the
                materials involved in their projects.
              </p>
            </div>
          </div>
        </section>

        {/* TESTING SERVICES */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Our Services
              </p>

              <h2 className="mt-5 text-4xl font-black text-[#171a4b] sm:text-5xl">
                Supporting quality from the ground up.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our material evaluation services can support different stages
                of construction and quality control.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">01</span>

                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Concrete Testing
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Evaluation of concrete properties to help support quality,
                  strength, and performance requirements.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">02</span>

                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Soil Investigation
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Assessment of soil conditions to support informed foundation
                  and construction decisions.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">03</span>

                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Aggregate Testing
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Evaluation of construction aggregates to help determine their
                  suitability for intended applications.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">04</span>

                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Material Evaluation
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Practical assessment of construction materials to support
                  quality control and project requirements.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">05</span>

                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Quality Control Support
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Support for construction teams seeking to monitor and
                  maintain material quality during project execution.
                </p>
              </div>

              <div className="bg-[#171a4b] p-8 text-white shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">06</span>

                <h3 className="mt-6 text-2xl font-black">
                  Clear Results
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  We aim to provide information that is practical,
                  understandable, and useful for project decision-making.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TESTING MATTERS */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                  Why Testing Matters
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                  Better information leads to better decisions.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Material testing can help identify potential concerns early
                  and provide useful information before they become larger
                  project challenges.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="border border-slate-200 p-6">
                  <h3 className="text-xl font-black text-[#171a4b]">
                    Improve Quality
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Better knowledge of materials supports improved quality
                    control during construction.
                  </p>
                </div>

                <div className="border border-slate-200 p-6">
                  <h3 className="text-xl font-black text-[#171a4b]">
                    Reduce Risk
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Early evaluation can help identify potential material
                    concerns before they affect the project.
                  </p>
                </div>

                <div className="border border-slate-200 p-6">
                  <h3 className="text-xl font-black text-[#171a4b]">
                    Support Compliance
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Testing information can support project requirements,
                    specifications, and quality standards.
                  </p>
                </div>

                <div className="border border-slate-200 p-6">
                  <h3 className="text-xl font-black text-[#171a4b]">
                    Build Confidence
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Make project decisions with greater confidence and a better
                    understanding of the materials involved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-[#ed1c24] py-24 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Need Material Testing?
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Start your project with greater confidence.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Contact Parapet Contractors to discuss your project and learn how
              our services can support quality, safety, and informed
              construction decisions.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex bg-white px-7 py-4 font-bold text-[#171a4b] transition hover:bg-slate-100"
            >
              Contact Our Team →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}