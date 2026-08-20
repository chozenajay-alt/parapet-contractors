import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Building Construction",
    description:
      "Professional construction solutions for commercial buildings and development projects, delivered with attention to quality and detail.",
  },
  {
    number: "02",
    title: "Industrial Construction",
    description:
      "Reliable construction solutions for industrial facilities, operational spaces, and complex project requirements.",
  },
  {
    number: "03",
    title: "Structural & Civil Engineering",
    description:
      "Engineering solutions designed to support safe, functional, and durable infrastructure and structures.",
  },
  {
    number: "04",
    title: "Project Management & Supervision",
    description:
      "Professional coordination and project supervision to help maintain quality, efficiency, and successful project delivery.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#f7f7f5] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#171a4b] sm:text-5xl">
            Comprehensive construction and engineering solutions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From construction and engineering to project management, Parapet
            provides practical solutions for commercial and industrial projects.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-sm font-bold text-[#ed1c24]">
                {service.number}
              </span>

              <h3 className="mt-8 text-2xl font-black text-[#171a4b]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center font-bold text-[#171a4b] transition group-hover:text-[#ed1c24]"
              >
                Learn more
                <span className="ml-2 text-xl">→</span>
              </Link>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#ed1c24] transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}