import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Request a Quote", href: "/quote" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    name: "Architectural Design",
    href: "/services/architectural-design",
  },
  {
    name: "Structural Design",
    href: "/services/structural-design",
  },
  {
    name: "Cost Estimates & BOQs",
    href: "/services/cost-estimates",
  },
  {
    name: "Project Management",
    href: "/services/project-management",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0d29] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        
        {/* COMPANY */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center bg-[#ed1c24] text-2xl font-black text-white">
              P
            </div>

            <div>
              <p className="text-xl font-black tracking-tight">
                PARAPET
              </p>

              <p className="text-xs font-semibold tracking-wide text-slate-400">
                CONTRACTORS & ENGINEERING LTD
              </p>
            </div>
          </div>

          <p className="mt-7 leading-7 text-slate-400">
            Delivering professional construction, engineering, design, and
            project management solutions from concept to completion.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex font-bold text-[#ed1c24] transition hover:text-red-400"
          >
            Learn More About Us →
          </Link>
        </div>

        {/* QUICK LINKS */}
        <div>
          <p className="text-sm font-black uppercase tracking-[0.15em] text-white">
            Quick Links
          </p>

          <ul className="mt-7 space-y-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-[#ed1c24]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <p className="text-sm font-black uppercase tracking-[0.15em] text-white">
            Our Services
          </p>

          <ul className="mt-7 space-y-4">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="text-sm text-slate-400 transition hover:text-[#ed1c24]"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/services"
            className="mt-7 inline-flex text-sm font-bold text-[#ed1c24] transition hover:text-red-400"
          >
            View All Services →
          </Link>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-sm font-black uppercase tracking-[0.15em] text-white">
            Get in Touch
          </p>

          <div className="mt-7 space-y-5 text-sm">
            <div>
              <p className="font-bold text-white">Call Us</p>

              <div className="mt-2 space-y-1">
                <a
                  href="tel:0765750255"
                  className="block text-slate-400 transition hover:text-[#ed1c24]"
                >
                  0765 750 255
                </a>

                <a
                  href="tel:0741451478"
                  className="block text-slate-400 transition hover:text-[#ed1c24]"
                >
                  0741 451 478
                </a>
              </div>
            </div>

            <div>
              <p className="font-bold text-white">Email Us</p>

              <a
                href="mailto:PARAPETCONTRACTORS@GMAIL.COM"
                className="mt-2 block break-all text-slate-400 transition hover:text-[#ed1c24]"
              >
                PARAPETCONTRACTORS@GMAIL.COM
              </a>
            </div>

            <div>
              <p className="font-bold text-white">WhatsApp</p>

              <a
                href="https://wa.me/256765750255"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[#ed1c24] transition hover:text-red-400"
              >
                Chat with us →
              </a>
            </div>
          </div>

          <Link
            href="/quote"
            className="mt-8 inline-flex bg-[#ed1c24] px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* FOOTER DIVIDER */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-7 text-sm text-slate-500 md:flex-row md:items-center lg:px-8">
          <p>
            © {new Date().getFullYear()} PARAPET CONTRACTORS & ENGINEERING LTD.
            All rights reserved.
          </p>

          <p className="font-medium text-slate-400">
            Building ideas. Engineering confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}