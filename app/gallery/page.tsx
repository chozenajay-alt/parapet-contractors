"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const categories = [
  "All",
  "Building Construction",
  "Architectural Design",
  "Structural Works",
  "Civil & Infrastructure",
  "Project Supervision",
];

const galleryItems = [
  {
    title: "Commercial Building Construction",
    category: "Building Construction",
    image: "/images/gallery/building-1.jpg",
  },
  {
    title: "Residential Construction",
    category: "Building Construction",
    image: "/images/gallery/building-2.jpg",
  },
  {
    title: "Architectural Planning",
    category: "Architectural Design",
    image: "/images/gallery/architecture-1.jpg",
  },
  {
    title: "Design Development",
    category: "Architectural Design",
    image: "/images/gallery/architecture-2.jpg",
  },
  {
    title: "Structural Engineering Works",
    category: "Structural Works",
    image: "/images/gallery/structural-1.jpg",
  },
  {
    title: "Structural Site Works",
    category: "Structural Works",
    image: "/images/gallery/structural-2.jpg",
  },
  {
    title: "Infrastructure Development",
    category: "Civil & Infrastructure",
    image: "/images/gallery/infrastructure-1.jpg",
  },
  {
    title: "Civil Engineering Works",
    category: "Civil & Infrastructure",
    image: "/images/gallery/infrastructure-2.jpg",
  },
  {
    title: "Construction Site Supervision",
    category: "Project Supervision",
    image: "/images/gallery/supervision-1.jpg",
  },
  {
    title: "Project Coordination",
    category: "Project Supervision",
    image: "/images/gallery/supervision-2-n.jpg",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="bg-[#171a4b] py-24 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
              Our Gallery
            </p>

            <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              A closer look at our work.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Explore a growing collection of project photos showcasing our
              construction, engineering, design, and project supervision work.
            </p>
          </div>
        </section>

        {/* GALLERY */}
        <section className="bg-[#f7f7f5] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
                Project Showcase
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#171a4b] sm:text-5xl">
                Built projects. Real progress.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Select a category to explore different areas of our work.
                More project photography will continue to be added as our
                portfolio grows.
              </p>
            </div>

            {/* FILTER BUTTONS */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-3 text-sm font-bold transition ${
                    activeCategory === category
                      ? "bg-[#ed1c24] text-white"
                      : "bg-white text-[#171a4b] hover:bg-[#171a4b] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* IMAGE GRID */}
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={`${item.title}-${item.image}`}
                  className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-80 overflow-hidden bg-slate-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171a4b]/80 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ed1c24]">
                        {item.category}
                      </p>

                      <h3 className="mt-2 text-xl font-black">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="mt-16 text-center">
                <p className="text-lg text-slate-600">
                  No photos have been added to this category yet.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0f3159] py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
            <p className="text-base font-black uppercase tracking-[0.18em] text-[#ed1c24] sm:text-lg">
              Your Next Project
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Let's turn your plans into something real.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you are planning, designing, or preparing to build, our
              team is ready to discuss your project requirements.
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
                className="border border-white/70 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#0f3159]"
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

