import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { services } from "@/lib/mock-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mehendi Services in Davangere",
  description:
    "Explore bridal, engagement, party and Arabic Mehendi services from ShantaKumari Mehendi Art in Davangere, Karnataka.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="bg-[#fffaf6]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Mehendi for every meaningful occasion."
          description="Explore signature styles and choose the one that fits your celebration."
          center
          level="h1"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-[#ead9ca] bg-white p-7"
            >
              <h2 className="font-serif text-3xl text-[#3b2417]">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-stone-600">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2 text-stone-500">
                  <Clock className="size-4" />
                  {service.duration}
                </span>

                <span className="font-semibold text-[#7d4727]">
                  {service.price}
                </span>
              </div>

              <Link
                href="/booking"
                className="mt-8 inline-flex rounded-full bg-[#3b2417] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#52301f]"
              >
                Enquire for this service
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
