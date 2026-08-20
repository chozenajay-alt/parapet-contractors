import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Commercial Building Development",
    category: "Building Construction",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Industrial Facility Project",
    category: "Industrial Construction",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Structural Engineering Works",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#171a4b] sm:text-5xl">
              Projects built around real-world demands.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A preview of the type of commercial, industrial, and engineering
              work Parapet is positioned to deliver.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center font-bold text-[#171a4b] transition hover:text-[#ed1c24]"
          >
            View all projects
            <span className="ml-2 text-xl">→</span>
          </Link>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden bg-[#171a4b]"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171a4b] via-[#171a4b]/10 to-transparent" />
              </div>

              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-wider text-[#ed1c24]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {project.title}
                </h3>

                <Link
                  href="/projects"
                  className="mt-6 inline-flex items-center text-sm font-bold text-white transition hover:text-[#ed1c24]"
                >
                  View project
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}