import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Star,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  const whatsappMessage = siteConfig.whatsappMessage;

  const whatsappUrl = `https://wa.me/${
    siteConfig.phone
  }?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf7f2] text-[#30231c]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#c99a3b]/20" />
        <div className="absolute -right-32 bottom-[-100px] h-96 w-96 rounded-full border border-[#c99a3b]/15" />
        <div className="absolute right-[35%] top-[20%] h-40 w-40 rounded-full bg-[#c99a3b]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid min-h-[calc(100vh-100px)] items-center gap-12 py-12 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-16 xl:gap-20">
          <div className="order-2 max-w-xl lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4b77d] bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#966d26] shadow-sm sm:text-xs">
              <MapPin size={14} />
              Davangere, Karnataka
            </div>

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#b98228]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a06f1f] sm:text-xs">
                Bridal • Arabic • Traditional
              </span>
            </div>

            <h1 className="font-heading text-[3.4rem] leading-[0.98] tracking-[-0.035em] text-[#30231c] sm:text-6xl md:text-7xl lg:text-[4.4rem] xl:text-[5rem]">
              Beautiful Mehendi,
              <span className="mt-2 block italic text-[#9a603d]">
                made for your story.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#66574d] sm:text-base sm:leading-8">
              Elegant Mehendi artistry for brides and special celebrations,
              designed with intricate details, timeless patterns and a
              personal touch.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/booking"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#3b271c] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#3b271c]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#513527] sm:px-7"
              >
                <CalendarDays size={18} />
                Check Availability
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#b98228] bg-white px-6 py-3.5 text-sm font-semibold text-[#3b271c] transition duration-300 hover:bg-[#f5eadf] sm:px-7"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-[#c99a3b]/30 pt-7 sm:grid-cols-3">
              <div>
                <div className="flex items-center gap-1 text-[#e6bd62]">
                  <Star size={16} fill="currentColor" />
                  <span className="text-lg font-bold text-[#30231c]">4.9/5</span>
                </div>
                <p className="mt-1 text-xs text-[#66574d]">Loved by brides</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#e6bd62]">
                  <CheckCircle2 size={17} />
                  <span className="text-lg font-bold text-[#30231c]">500+</span>
                </div>
                <p className="mt-1 text-xs text-[#66574d]">Happy celebrations</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#e6bd62]">
                  <MapPin size={17} />
                  <span className="text-lg font-bold text-[#30231c]">Davangere</span>
                </div>
                <p className="mt-1 text-xs text-[#66574d]">Travel on request</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#c99a3b]/50 bg-[#eadfd4] p-2 shadow-2xl shadow-[#3b271c]/15 sm:p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/hero/hero-mehendi.jpg"
                  alt="Bridal Mehendi design by ShantaKumari Mehendi Art in Davangere"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  quality={85}
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/75 sm:text-[10px]">
                    ShantaKumari Mehendi Art
                  </p>
                  <h2 className="mt-1 font-heading text-2xl text-white sm:text-3xl">
                    Bridal Mehendi
                  </h2>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-8 rounded-2xl border border-[#eadfd4] bg-white px-4 py-3 shadow-xl sm:-left-5 sm:px-5 sm:py-3.5 lg:-left-8">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0dfc1]">
                  <Star size={16} className="fill-[#b98128] text-[#b98128]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#30231c]">4.9 / 5</p>
                  <p className="text-[10px] text-[#786a60]">Bride favourite</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 rounded-2xl bg-[#3b271c] px-5 py-3.5 text-white shadow-xl sm:-bottom-6 sm:-right-4 sm:px-6 sm:py-4">
              <p className="font-heading text-lg font-bold">Bridal Specialist</p>
              <p className="mt-1 text-xs text-[#e8d9ce]">
                Your dream design, beautifully detailed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
