import Link from "next/link";
import { Check } from "lucide-react";
import { packages } from "@/lib/mock-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function PackagesPreview() {
  return (
    <section className="bg-[#fffaf6] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Packages"
          title="Simple packages, beautiful memories."
          description="Use these as visible frontend prices for now. Replace them later with live, editable package data."
          center
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`relative rounded-3xl border p-7 ${
                item.featured
                  ? "border-[#3b2417] bg-[#3b2417] text-white shadow-xl shadow-[#6b422a]/15"
                  : "border-[#ead9ca] bg-white text-[#3b2417]"
              }`}
            >
              {item.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#c98155] px-4 py-1 text-xs font-bold text-white">
                  Most popular
                </span>
              )}

              <h3 className="font-serif text-3xl">{item.name}</h3>
              <p
                className={`mt-3 text-sm leading-6 ${
                  item.featured ? "text-[#ead9ca]" : "text-stone-600"
                }`}
              >
                {item.description}
              </p>

              <p className="mt-6 font-serif text-4xl">{item.price}</p>

              <ul className="mt-7 space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#c98155]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/booking"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                  item.featured
                    ? "bg-[#fffaf6] text-[#3b2417] hover:bg-[#f2e4d8]"
                    : "bg-[#3b2417] text-white hover:bg-[#5a3825]"
                }`}
              >
                Enquire now
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}