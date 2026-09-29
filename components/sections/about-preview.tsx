import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const highlights = [
  {
    icon: Heart,
    title: "Made for your celebration",
    description:
      "Designs shaped around your outfit, event, and personal story.",
  },
  {
    icon: Sparkles,
    title: "Detailed artistry",
    description:
      "From minimal Arabic trails to rich bridal storytelling designs.",
  },
  {
    icon: Award,
    title: "Professional experience",
    description:
      "A smooth, organised booking experience from enquiry to event day.",
  },
];

export function AboutPreview() {
  return (
    <section className="bg-[#fffaf6] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        
        {/* Mehendi Image */}
        <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#ead9ca] bg-[#ead9ca] p-3 shadow-xl shadow-[#6b422a]/10">
          <div className="relative h-full overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/home-mehendi-2.jpg"
              alt="Detailed Mehendi artistry by ShantaKumari Mehendi Art"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Image caption */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#fffaf6]/90 p-5 backdrop-blur-sm">
              <p className="font-serif text-xl font-semibold text-[#3b2417]">
                Art that tells your story.
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Detailed Mehendi created especially for your celebration.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <SectionHeading
            eyebrow="The artist behind the art"
            title="Mehendi designs that make your moments feel personal."
            description="Every celebration deserves a design that feels uniquely yours—whether it is a wedding, engagement, baby shower, or festival."
          />

          <div className="mt-8 space-y-5">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f2e4d8] text-[#9b5d32]">
                  <Icon className="size-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#3b2417]">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-stone-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-9 inline-flex rounded-full bg-[#3b2417] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5a3825]"
          >
            Meet the artist
          </Link>
        </div>
      </div>
    </section>
  );
}