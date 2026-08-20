"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-12 w-12 items-center justify-center bg-[#ed1c24] text-2xl font-black text-white shadow-sm">
            P
          </div>

          <div className="leading-tight">
            <p className="text-xl font-black tracking-tight text-[#171a4b]">
              PARAPET
            </p>

            <p className="text-[10px] font-bold tracking-[0.08em] text-slate-500 sm:text-xs">
              CONTRACTORS & ENGINEERING LTD
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-7 text-sm font-bold transition ${
                  active
                    ? "text-[#ed1c24]"
                    : "text-slate-700 hover:text-[#ed1c24]"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-[#ed1c24]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/quote"
            className="inline-flex bg-[#ed1c24] px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700 hover:shadow-md"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-slate-200 text-[#171a4b] transition hover:border-[#ed1c24] hover:text-[#ed1c24] lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-3xl leading-none">×</span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </div>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-slate-100 py-4 font-bold transition ${
                    active
                      ? "text-[#ed1c24]"
                      : "text-[#171a4b] hover:text-[#ed1c24]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/quote"
              onClick={() => setMenuOpen(false)}
              className="mt-6 bg-[#ed1c24] px-5 py-4 text-center font-bold text-white transition hover:bg-red-700"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}