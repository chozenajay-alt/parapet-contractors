import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const services = [
  {
    title: "Architectural Design",
    description:
      "Creative and practical designs that transform your ideas into functional spaces.",
    href: "/services/architectural-design",
  },
  {
    title: "Structural Design",
    description:
      "Safe, durable, and efficient structural solutions for projects of every scale.",
    href: "/services/structural-design",
  },
  {
    title: "Cost Estimates & BOQs",
    description:
      "Accurate cost planning and Bills of Quantities to help you control your budget.",
    href: "/services/cost-estimates",
  },
  {
    title: "Project Management",
    description:
      "Professional coordination and supervision from planning through completion.",
    href: "/services/project-management",
  },
];

const projects = [
  {
    title: "Building Construction",
    category: "Construction",
    description:
      "Delivering quality construction solutions with attention to planning, workmanship, and project requirements.",
    image: "/images/projects/project-1-new.jpg",
  },
  {
    title: "Structural & Engineering Works",
    category: "Engineering",
    description:
      "Practical engineering solutions designed to support safe, efficient, and durable structures.",
    image: "/images/projects/project-2.jpg",
  },
  {
    title: "Project Development",
    category: "Project Delivery",
    description:
      "Supporting projects from the early planning stages through construction and completion.",
    image: "/images/projects/project-3.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="overflow-hidden bg-[#0f3159]">
          <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-0">
            <div className="max-w-2xl text-white">
              <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
                Parapet Contractors & Engineering Ltd
              </p>

              <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Building ideas.
                <span className="block text-[#ed1c24]">
                  Engineering confidence.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                From design and planning to construction and project
                completion, we deliver practical engineering solutions and
                quality workmanship for projects that are built to perform.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/quote"
                  className="bg-[#ed1c24] px-7 py-4 font-bold text-white transition hover:bg-red-700"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/services"
                  className="border border-white/70 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#0f3159]"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-8 text-sm font-semibold text-slate-300">
                <span>Construction</span>
                <span>Engineering</span>
                <span>Project Management</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 -top-6 hidden h-40 w-40 border border-[#ed1c24]/50 lg:block" />

              <div className="relative overflow-hidden">
                <Image
                  src="/images/home/quality-you-can-build-on.jpg"
                  alt="Construction project by Parapet Contractors"
                  width={1080}
                  height={1350}
                  priority
                  className="h-[500px] w-full object-cover sm:h-[600px]"
                />
              </div>

              <div className="absolute bottom-0 left-0 bg-[#ed1c24] px-6 py-5 text-white sm:px-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em]">
                  Built with purpose
                </p>

                <p className="mt-1 text-lg font-black">
                  From concept to completion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative overflow-hidden">
              <Image
                src="/images/home/who-we-are-new.jpg"
                alt="Parapet Contractors construction and engineering project"
                width={1080}
                height={1350}
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
                Building With Purpose
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                Practical expertise for projects that demand quality.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Parapet Contractors & Engineering Ltd provides professional
                construction, engineering, design, planning, and project
                management services tailored to the needs of each project.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                We combine technical knowledge, practical experience, and
                careful project coordination to help clients move confidently
                from an idea on paper to a completed project on the ground.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block font-bold text-[#ed1c24] transition hover:text-red-700"
              >
                Learn More About Us →
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
                  Our Expertise
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                  Professional services for every stage of your project.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Our services bring together design, engineering, planning,
                  construction, and project support under one professional
                  team.
                </p>
              </div>

              <Link
                href="/services"
                className="font-bold text-[#ed1c24] transition hover:text-red-700"
              >
                View All Services →
              </Link>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-sm font-black text-[#ed1c24]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 text-2xl font-black text-[#171a4b]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <p className="mt-6 font-bold text-[#ed1c24]">
                    Learn More →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="bg-[#0f3159] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
                  Featured Projects
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                  Bringing plans to life through quality work.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Explore a selection of projects that reflect our commitment
                  to practical solutions, quality workmanship, and professional
                  project delivery.
                </p>
              </div>

              <Link
                href="/projects"
                className="font-bold text-[#ed1c24] transition hover:text-red-400"
              >
                View All Projects →
              </Link>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden bg-white text-[#171a4b] shadow-lg"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <p className="text-sm font-black uppercase tracking-[0.15em] text-[#ed1c24]">
                      {project.category}
                    </p>

                    <h3 className="mt-4 text-2xl font-black">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-block border border-white/70 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#0f3159]"
              >
                Explore Our Projects
              </Link>
            </div>
          </div>
        </section>

```tsx
{/* GALLERY PREVIEW */}
<section className="bg-[#f7f7f5] py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
          Our Gallery
        </p>

        <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
          A closer look at the work we do.
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Explore moments from our construction, engineering, and project
          delivery work. Our gallery gives you a visual look at the type of
          projects and solutions we are proud to support.
        </p>
      </div>

      <Link
        href="/gallery"
        className="font-bold text-[#ed1c24] transition hover:text-red-700"
      >
        View Full Gallery →
      </Link>
    </div>

    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Link
        href="/gallery"
        className="group relative h-80 overflow-hidden"
      >
        <Image
          src="/images/gallery/building-1.jpg"
          alt="Building construction project"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171a4b]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ed1c24]">
            Construction
          </p>

          <h3 className="mt-2 text-xl font-black">
            Building Projects
          </h3>
        </div>
      </Link>

      <Link
        href="/gallery"
        className="group relative h-80 overflow-hidden"
      >
        <Image
          src="/images/gallery/architecture-1.jpg"
          alt="Architectural design project"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171a4b]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ed1c24]">
            Design
          </p>

          <h3 className="mt-2 text-xl font-black">
            Architectural Work
          </h3>
        </div>
      </Link>

      <Link
        href="/gallery"
        className="group relative h-80 overflow-hidden"
      >
        <Image
          src="/images/gallery/structural-1.jpg"
          alt="Structural engineering project"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171a4b]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ed1c24]">
            Engineering
          </p>

          <h3 className="mt-2 text-xl font-black">
            Structural Works
          </h3>
        </div>
      </Link>

      <Link
        href="/gallery"
        className="group relative h-80 overflow-hidden"
      >
        <Image
          src="/images/gallery/infrastructure-1.jpg"
          alt="Infrastructure development project"
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#171a4b]/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#ed1c24]">
            Infrastructure
          </p>

          <h3 className="mt-2 text-xl font-black">
            Civil Projects
          </h3>
        </div>
      </Link>
    </div>

    <div className="mt-12 text-center">
      <Link
        href="/gallery"
        className="inline-block bg-[#171a4b] px-8 py-4 font-bold text-white transition hover:bg-[#ed1c24]"
      >
        Explore Our Full Gallery →
      </Link>
    </div>
  </div>
</section>
```

        {/* WHY CHOOSE PARAPET */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
                Why Parapet
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                A dependable partner from planning to completion.
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="border-t-4 border-[#ed1c24] pt-7">
                <span className="text-4xl font-black text-[#171a4b]">
                  01
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#171a4b]">
                  Practical Expertise
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Professional knowledge combined with practical solutions for
                  real construction and engineering challenges.
                </p>
              </div>

              <div className="border-t-4 border-[#ed1c24] pt-7">
                <span className="text-4xl font-black text-[#171a4b]">
                  02
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#171a4b]">
                  Quality Focus
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  We pay attention to planning, workmanship, materials, and
                  project coordination to support quality results.
                </p>
              </div>

              <div className="border-t-4 border-[#ed1c24] pt-7">
                <span className="text-4xl font-black text-[#171a4b]">
                  03
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#171a4b]">
                  Client-Focused Approach
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  We work closely with clients to understand project
                  requirements and provide clear, practical support throughout
                  the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#171a4b] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
              Start Your Project
            </p>

            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Ready to turn your plans into reality?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Talk to our team about your construction, engineering, design,
              or project management requirements. We are ready to discuss your
              project and help you take the next step.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="bg-[#ed1c24] px-8 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                className="border border-white/70 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#171a4b]"
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