import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/mock-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesPreview() {
  return (
    <section className="bg-[#f8eee7] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="A design for every kind of celebration."
            description="Choose a style that fits your occasion, personality, and Mehendi vision."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7d4727] hover:text-[#3b2417]"
          >
            View all services <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[#ead9ca] bg-[#fffaf6] p-6"
            >
              <div className="flex size-11 items-center justify-center rounded-full bg-[#f2e4d8] font-serif text-lg text-[#9b5d32]">
                M
              </div>
              <h3 className="mt-5 font-serif text-2xl text-[#3b2417]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {service.description}
              </p>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="flex items-center gap-1.5 text-stone-500">
                  <Clock className="size-4" />
                  {service.duration}
                </span>
                <span className="font-semibold text-[#7d4727]">
                  {service.startingPrice}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}