import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const projects = [
  {
    title: "Commercial Building Project",
    category: "Building Construction",
    description:
      "A commercial construction project delivered with a focus on planning, coordination, and quality execution.",
    image: "/images/projects/commercial-building.jpg",
  },
  {
    title: "Industrial Development",
    category: "Industrial Construction",
    description:
      "Construction support for an industrial development with demanding operational and technical requirements.",
    image: "/images/projects/industrial-development-new.jpg",
  },
  {
    title: "Structural Engineering Works",
    category: "Structural & Civil Engineering",
    description:
      "Engineering and structural works designed to support safe and practical project delivery.",
    image: "/images/projects/structural-engineering-new.jpg",
  },
  {
    title: "Infrastructure Development",
    category: "Civil Engineering",
    description:
      "Civil and infrastructure works supported through technical coordination and project oversight.",
    image: "/images/projects/infrastructure-new.jpg",
  },
  {
    title: "Construction Project Supervision",
    category: "Project Management",
    description:
      "Professional supervision and coordination supporting organized construction project execution.",
    image: "/images/projects/project-supervision.jpg",
  },
  {
    title: "Commercial Development",
    category: "Building Construction",
    description:
      "A commercial development project supported through construction planning and site coordination.",
    image: "/images/projects/commercial-development.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-[#171a4b] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
              Our Projects
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Projects built around practical construction and engineering solutions.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Explore a selection of construction and engineering work that
              represents the type of projects Parapet supports across commercial,
              industrial, and infrastructure sectors.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-14 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Selected Work
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight text-[#171a4b] sm:text-5xl">
                A portfolio ready to grow with every project.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                As we continue adding Parapet's real project photography,
                this portfolio will become a stronger visual record of the
                company's construction and engineering work.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-72 overflow-hidden bg-slate-200">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171a4b]/70 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <span className="bg-[#ed1c24] px-3 py-2 text-xs font-bold uppercase tracking-wider text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h2 className="text-2xl font-black text-[#171a4b]">
                      {project.title}
                    </h2>

                    <p className="mt-4 leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <Link
                      href="/quote"
                      className="mt-6 inline-flex font-bold text-[#ed1c24] transition hover:text-red-700"
                    >
                      Discuss a Similar Project →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#171a4b] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
              Your Next Project
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
              Have a project you're ready to discuss?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tell us about your construction or engineering requirements and
              let's explore the best way to move your project forward.
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