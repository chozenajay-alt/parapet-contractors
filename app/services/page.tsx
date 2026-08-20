import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Creative, functional, and practical architectural solutions tailored to your project.",
    href: "/services/architectural-design",
  },
  {
    number: "02",
    title: "Structural Design",
    description:
      "Safe and efficient structural systems designed for durability and performance.",
    href: "/services/structural-design",
  },
  {
    number: "03",
    title: "Cost Estimates & BOQs",
    description:
      "Detailed cost estimates and Bills of Quantities to support proper budgeting.",
    href: "/services/cost-estimates",
  },
  {
    number: "04",
    title: "Building Construction",
    description:
      "Professional construction services delivered with quality workmanship and attention to detail.",
    href: "/services/building-construction",
  },
  {
    number: "05",
    title: "Project Management & Consultancy",
    description:
      "Expert coordination, planning, supervision, and consultancy throughout your project.",
    href: "/services/project-management",
  },
  {
    number: "06",
    title: "Material Testing",
    description:
      "Testing and evaluation services to support quality, safety, and confidence in your project.",
    href: "/services/material-testing",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* SERVICES HERO */}
        <section className="bg-[#171a4b] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
                Parapet Contractors
              </p>

              <h1 className="mt-5 text-5xl font-black sm:text-6xl">
                Our Services
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Professional construction and engineering services designed to
                support your project from concept to completion.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
              <Image
                src="/images/services/services-overview.jpg"
                alt="Parapet Contractors services"
                width={1080}
                height={1350}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* SERVICE GRID */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="text-lg font-black text-[#ed1c24]">
                    {service.number}
                  </span>

                  <h2 className="mt-8 text-2xl font-black text-[#171a4b]">
                    {service.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <p className="mt-8 font-bold text-[#ed1c24]">
                    Explore Service →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}