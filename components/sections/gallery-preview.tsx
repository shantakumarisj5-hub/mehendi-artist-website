import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const galleryPreview = [
  {
    title: "Royal Bridal Story",
    category: "Bridal",
    image: "/images/gallery/bridal-1.jpg",
  },
  {
    title: "Floral Arabic Trails",
    category: "Arabic",
    image: "/images/gallery/arabic-1.jpg",
  },
  {
    title: "Modern Indo-Arabic",
    category: "Indo-Arabic",
    image: "/images/gallery/indo-arabic-1.jpg",
  },
];

export function GalleryPreview() {
  return (
    <section className="bg-[#fffaf6] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse of the details."
            description="Explore a selection of bridal, Arabic, and Indo-Arabic Mehendi styles."
          />

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7d4727] hover:text-[#3b2417]"
          >
            View full gallery
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {galleryPreview.map((item) => (
            <article
              key={item.title}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#ead9ca]"
            >
              <Image
                src={item.image}
                alt={`${item.title} ${item.category} Mehendi design by ShantaKumari Mehendi Art`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, 33vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute inset-x-5 bottom-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f1c29d]">
                  {item.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}