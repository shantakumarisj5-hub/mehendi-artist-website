"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryItems } from "@/lib/mock-data";
import { SectionHeading } from "@/components/ui/section-heading";

const categories = [
  "All",
  "Bridal",
  "Arabic",
  "Indo-Arabic",
  "Traditional",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-[#fffaf6]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Mehendi styles made for your celebration."
          description="Explore our collection of bridal, Arabic, Indo-Arabic and traditional Mehendi designs."
          center
          level="h1"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-[#3b2417] text-white shadow-md"
                  : "border border-[#d9bba4] bg-white text-[#7d4727] hover:bg-[#f5e7dc]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#ead9ca] transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} ${item.category} Mehendi design by ShantaKumari Mehendi Art`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-sm font-medium tracking-wide text-[#e7c8ad]">
                    {item.category}
                  </p>

                  <h2 className="mt-1 font-serif text-2xl">
                    {item.title}
                  </h2>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleItems.length === 0 && (
          <div className="mt-12 text-center text-stone-500">
            No Mehendi designs found in this category.
          </div>
        )}
      </section>
    </main>
  );
}
