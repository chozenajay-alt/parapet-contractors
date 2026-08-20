import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const benefits = [
  {
    number: "01",
    title: "Better Project Coordination",
    description:
      "We help bring together the people, activities, and project requirements needed to keep work organized and moving forward.",
  },
  {
    number: "02",
    title: "Clearer Direction",
    description:
      "Professional project management provides structure and guidance throughout different stages of your project.",
  },
  {
    number: "03",
    title: "Focused on Your Goals",
    description:
      "We work with your project requirements and priorities to support a more organized and efficient delivery process.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding your project objectives, requirements, and priorities.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "A clear approach is developed to help organize activities and guide the project forward.",
  },
  {
    number: "03",
    title: "Coordinate",
    description:
      "We support the coordination of key project activities, requirements, and stakeholders.",
  },
  {
    number: "04",
    title: "Move Forward",
    description:
      "With clearer direction and organization, your project is better positioned to progress toward completion.",
  },
];

export default function ProjectManagementPage() {
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
                Your project, expertly managed.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Successful projects require more than good ideas. They need
                clear planning, coordination, and professional guidance. We
                help bring these important elements together to support a
                smoother path from planning to completion.
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
                src="/images/services/project-management.jpg"
                alt="Professional construction project management"
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
                Professional Guidance
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                Keep your project moving in the right direction.
              </h2>
            </div>

            <div className="text-lg leading-8 text-slate-600">
              <p>
                Construction and engineering projects involve many different
                activities, people, and decisions. Proper coordination helps
                create structure and provides clearer direction throughout the
                project.
              </p>

              <p className="mt-6">
                At PARAPET CONTRACTORS & ENGINEERING LTD, we provide project
                management and consultancy support to help clients organize,
                coordinate, and guide their projects with greater confidence.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Why Professional Management Matters
              </p>

              <h2 className="mt-5 text-4xl font-black text-[#171a4b] sm:text-5xl">
                Better coordination. Greater confidence.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                With clearer planning and professional coordination, you can
                focus more confidently on the goals of your project.
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
                From planning to project progress.
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
              Let's Move Your Project Forward
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              Your project deserves professional direction.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Speak with our team about your project and discover how
              professional management and consultancy can support a smoother
              path toward completion.
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