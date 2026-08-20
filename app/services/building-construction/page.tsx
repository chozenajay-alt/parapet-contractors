import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function BuildingConstructionPage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="bg-[#171a4b] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div className="text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Building Construction
              </p>

              <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl">
                Quality you can build on.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                We turn carefully developed plans into strong, functional, and
                durable structures through professional workmanship, proper
                coordination, and attention to every stage of construction.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex bg-[#ed1c24] px-6 py-4 font-bold text-white transition hover:bg-red-700"
                >
                  Start Your Project →
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/services/building-construction-new.jpg"
                alt="Building construction services"
                width={1080}
                height={1350}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Built for the future
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                From the first foundation to the final finish.
              </h2>
            </div>

            <div className="text-lg leading-8 text-slate-600">
              <p>
                A successful construction project requires more than materials
                and labor. It requires proper planning, experienced
                coordination, quality control, and a commitment to delivering
                results that meet expectations.
              </p>

              <p className="mt-6">
                At Parapet Contractors, we manage the construction process with
                a focus on quality workmanship, efficient execution, safety,
                and lasting value.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                What we do
              </p>

              <h2 className="mt-5 text-4xl font-black text-[#171a4b] sm:text-5xl">
                Construction solutions tailored to your project.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We provide practical construction services for projects of
                different sizes and requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">01</span>
                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Residential Construction
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Quality homes built with attention to functionality,
                  durability, and the details that make a space feel complete.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">02</span>
                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Commercial Construction
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Practical and efficient construction solutions for offices,
                  commercial buildings, and business spaces.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">03</span>
                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Structural Works
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Carefully executed structural works designed to provide
                  strength, stability, and long-term performance.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">04</span>
                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Renovation & Remodeling
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Upgrade and transform existing spaces with practical
                  improvements that add functionality and value.
                </p>
              </div>

              <div className="bg-white p-8 shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">05</span>
                <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                  Site Supervision
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  Professional supervision to help maintain quality, progress,
                  coordination, and compliance throughout construction.
                </p>
              </div>

              <div className="bg-[#171a4b] p-8 text-white shadow-sm">
                <span className="text-lg font-black text-[#ed1c24]">06</span>
                <h3 className="mt-6 text-2xl font-black">
                  One Team. One Goal.
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  From planning to completion, we work to keep your project
                  moving forward with clarity and confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                  Why Parapet Contractors
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                  Building with confidence at every stage.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  We understand that every construction project represents a
                  major investment. That is why we focus on communication,
                  planning, quality, and accountability from the beginning.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="border border-slate-200 p-6">
                  <h3 className="text-xl font-black text-[#171a4b]">
                    Quality Workmanship
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Careful execution and attention to detail throughout the
                    construction process.
                  </p>
                </div>

                <div className="border border-slate-200 p-6">
                  <h3 className="text-xl font-black text-[#171a4b]">
                    Professional Coordination
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Organized planning and coordination to keep your project
                    moving forward.
                  </p>
                </div>

                <div className="border border-slate-200 p-6">
                  <h3 className="text-xl font-black text-[#171a4b]">
                    Clear Communication
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    We keep clients informed and involved throughout important
                    stages of the project.
                  </p>
                </div>

                <div className="border border-slate-200 p-6">
                  <h3 className="text-xl font-black text-[#171a4b]">
                    Lasting Value
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Our goal is to deliver structures built to perform and
                    provide value for years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#ed1c24] py-24 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Ready to Build?
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Let's turn your plans into reality.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
              Talk to our team about your construction project and discover how
              we can help you move from concept to completion.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex bg-white px-7 py-4 font-bold text-[#171a4b] transition hover:bg-slate-100"
            >
              Contact Us →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}