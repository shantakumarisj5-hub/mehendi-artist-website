import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const whatsappText = encodeURIComponent(
    "Hi! I would like to enquire about Mehendi booking.",
  );

  return (
    <section className="relative isolate overflow-hidden bg-[#fffaf6]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(226,190,158,0.42),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(205,148,105,0.20),_transparent_38%)]" />

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#d9bba4] bg-[#fff7f0] px-4 py-2 text-sm font-medium text-[#7d4727]">
            <Sparkles className="size-4" />
            Bridal and occasion Mehendi artist
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-[#9b5d32]">
            {siteConfig.location}
          </p>

          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-[#3b2417] sm:text-6xl lg:text-7xl">
            Mehendi that turns every celebration into a memory.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
            Personalised bridal, Arabic, Indo-Arabic, and traditional Mehendi
            designs created with detail, care, and your special day in mind.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3b2417] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#3b2417]/15 transition-all hover:-translate-y-0.5 hover:bg-[#5a3825]"
            >
              <CalendarDays className="size-4" />
              Check availability
            </Link>

            <a
              href={`https://wa.me/${siteConfig.phone}?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b98c6b] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#5a3825] transition-all hover:-translate-y-0.5 hover:bg-[#f7e9de]"
            >
              <MessageCircle className="size-4" />
              WhatsApp enquiry
            </a>

          </div>
        </div>

        {/* RIGHT SIDE - MEHENDI IMAGE */}
        <div className="relative mx-auto w-full max-w-lg">

          {/* Decorative glow */}
          <div className="absolute -inset-4 rounded-[3rem] bg-[#c99873]/15 blur-2xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-[#e1c8b5] bg-[#ead9ca] p-3 shadow-2xl shadow-[#6b422a]/20">

            <div className="relative h-full overflow-hidden rounded-[2rem]">

              <Image
                src="/images/artist.jpg"
                alt="Beautiful Mehendi design by ShantaKumari Mehendi Art"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b160c]/50 via-transparent to-transparent" />

              {/* Image caption */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-[#fffaf6]/90 p-5 shadow-xl backdrop-blur-md">

                <p className="text-sm font-semibold text-[#3b2417]">
                  Your story, in every detail.
                </p>

                <p className="mt-1 text-sm text-stone-600">
                  Bridal artistry designed around your celebration.
                </p>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}