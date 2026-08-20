const strengths = [
  {
    number: "01",
    title: "Integrated Expertise",
    description:
      "Construction and engineering capabilities brought together to support projects from planning through delivery.",
  },
  {
    number: "02",
    title: "Commercial & Industrial Focus",
    description:
      "Practical solutions tailored to the demands of commercial buildings, industrial facilities, and complex developments.",
  },
  {
    number: "03",
    title: "Professional Project Oversight",
    description:
      "Structured project management and supervision focused on coordination, quality, and efficient execution.",
  },
  {
    number: "04",
    title: "Built for Long-Term Value",
    description:
      "A commitment to delivering durable solutions that support the long-term goals of every project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#171a4b] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ed1c24]">
            Why Parapet
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Built on practical expertise and professional delivery.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            We combine construction capability, engineering knowledge, and
            project oversight to help clients move confidently from concept to
            completion.
          </p>

          <div className="mt-10 h-1 w-20 bg-[#ed1c24]" />
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
          {strengths.map((strength) => (
            <article
              key={strength.number}
              className="group bg-[#171a4b] p-8 transition hover:bg-[#20245f]"
            >
              <span className="text-sm font-bold text-[#ed1c24]">
                {strength.number}
              </span>

              <h3 className="mt-8 text-xl font-bold">
                {strength.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {strength.description}
              </p>

              <div className="mt-8 h-px w-12 bg-white/20 transition-all duration-300 group-hover:w-full group-hover:bg-[#ed1c24]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}