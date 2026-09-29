import Image from "next/image";

const galleryItems = [
  {
    title: "Bridal Mehendi",
    category: "Bridal",
    image: "/images/gallery/bridal-1.jpg",
  },
  {
    title: "Arabic Mehendi",
    category: "Arabic",
    image: "/images/gallery/arabic-1.jpg",
  },
  {
    title: "Indo-Arabic Mehendi",
    category: "Indo-Arabic",
    image: "/images/gallery/indo-arabic-1.jpg",
  },
  {
    title: "Traditional Mehendi",
    category: "Traditional",
    image: "/images/gallery/traditional-1.jpg",
  },
  {
    title: "Bridal Detail",
    category: "Bridal",
    image: "/images/gallery/bridal-2.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#fffaf6] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#9b5d32]">
            Our Work
          </p>

          <h2 className="font-serif text-4xl font-semibold text-[#3b2417] sm:text-5xl">
            Mehendi Gallery
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
            Explore our collection of beautiful bridal, Arabic,
            Indo-Arabic and traditional Mehendi designs.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.image}
              className="group overflow-hidden rounded-2xl border border-[#ead9ca] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#e7c8ad]">
                    {item.category}
                  </p>

                  <h3 className="font-serif text-2xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}