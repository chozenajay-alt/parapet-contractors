import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#171a4b] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#171a4b] via-[#10143d] to-[#0b0d29]" />

      <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-slate-200">
            Construction • Engineering • Project Delivery
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building ambitious spaces.
            <span className="block text-[#ed1c24]">
              Engineering lasting solutions.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            PARAPET CONTRACTORS & ENGINEERING LTD delivers professional
            construction, industrial development, civil and structural
            engineering, and project management solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="rounded-md bg-[#ed1c24] px-7 py-4 text-center font-bold text-white transition hover:bg-red-700"
            >
              Request a Quote
            </Link>

            <Link
              href="/services"
              className="rounded-md border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white hover:text-[#171a4b]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 rounded-full bg-[#ed1c24]/20 blur-3xl" />

          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 rounded-xl bg-slate-700" />
              <div className="mt-12 h-48 rounded-xl bg-[#ed1c24]" />
              <div className="h-48 rounded-xl bg-[#ed1c24]/80" />
              <div className="mt-12 h-48 rounded-xl bg-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}