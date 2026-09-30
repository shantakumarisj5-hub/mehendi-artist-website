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
          description="Choose a package that fits your celebration and Mehendi requirements."
          center
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.id}
              className="relative rounded-3xl border border-[#ead9ca] bg-white p-7 text-[#3b2417]"
            >
              <h3 className="font-serif text-3xl">{item.name}</h3>

              <p className="mt-3 text-sm leading-6 text-stone-600">
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
                className="mt-8 block rounded-full bg-[#3b2417] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#5a3825]"
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