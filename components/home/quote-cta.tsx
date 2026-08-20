import Link from "next/link";

export default function QuoteCTA() {
  return (
    <section className="relative overflow-hidden bg-[#ed1c24] py-24 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full border-[40px] border-white" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full border-[50px] border-white" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            Start Your Project
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Have a project in mind? Let's build it together.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Tell us about your construction or engineering requirements and our
            team will help you take the next step.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          <Link
            href="/quote"
            className="rounded-md bg-white px-7 py-4 text-center font-bold text-[#171a4b] transition hover:bg-slate-100"
          >
            Request a Quote
          </Link>

          <Link
            href="/contact"
            className="rounded-md border border-white/40 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}