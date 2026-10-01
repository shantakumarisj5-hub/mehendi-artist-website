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
  const whatsappMessage =
    "Hi Shan Mehendi, I would like to enquire about Mehendi booking.";

  const whatsappUrl = `https://wa.me/${
    siteConfig.phone
  }?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#faf7f2] text-[#30231c]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#c99a3b]/20" />

        <div className="absolute -right-32 bottom-[-100px] h-96 w-96 rounded-full border border-[#c99a3b]/15" />

        <div className="absolute right-[35%] top-[20%] h-40 w-40 rounded-full bg-[#c99a3b]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className="
            grid
            min-h-[calc(100vh-100px)]
            items-center
            gap-12
            py-12
            sm:py-16
            lg:grid-cols-2
            lg:gap-14
            lg:py-16
            xl:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <div className="order-2 max-w-xl lg:order-1">
            {/* Location */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4b77d] bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#966d26] shadow-sm sm:text-xs">
              <MapPin size={14} />

              Davangere, Karnataka
            </div>

            {/* Category */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#b98228]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a06f1f] sm:text-xs">
                Bridal • Arabic • Traditional
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                font-heading
                text-[3.4rem]
                leading-[0.98]
                tracking-[-0.035em]
                text-[#30231c]
                sm:text-6xl
                md:text-7xl
                lg:text-[4.4rem]
                xl:text-[5rem]
              "
            >
              Beautiful Mehendi,

              <span className="mt-2 block italic text-[#9a603d]">
                made for your story.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-lg text-sm leading-7 text-[#66574d] sm:text-base sm:leading-8">
              Elegant Mehendi artistry for brides and special celebrations,
              designed with intricate details, timeless patterns and a
              personal touch.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#3b271c]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#3b271c]/15
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#513527]
                  sm:px-7
                "
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
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#c9aa78]
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#4a3427]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#fffaf4]
                  sm:px-7
                "
              >
                <MessageCircle size={18} />

                Chat on WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 border-t border-[#ded3c7] pt-6">
              <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-7">
                {/* Rating */}
                <div>
                  <div className="flex items-center gap-1.5">
                    <Star
                      size={15}
                      className="fill-[#c59636] text-[#c59636]"
                    />

                    <span className="text-base font-bold sm:text-lg">
                      4.9/5
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] text-[#786a60] sm:text-xs">
                    Loved by brides
                  </p>
                </div>

                <div className="hidden h-9 w-px bg-[#d8ccc0] sm:block" />

                {/* Celebrations */}
                <div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2
                      size={16}
                      className="text-[#9a603d]"
                    />

                    <span className="text-base font-bold sm:text-lg">
                      500+
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] text-[#786a60] sm:text-xs">
                    Celebrations
                  </p>
                </div>

                <div className="hidden h-9 w-px bg-[#d8ccc0] sm:block" />

                {/* Experience */}
                <div>
                  <p className="text-base font-bold sm:text-lg">
                    Since 2018
                  </p>

                  <p className="mt-1 text-[10px] text-[#786a60] sm:text-xs">
                    Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT IMAGE
          ===================================================== */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              {/* Decorative frame */}
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-[#c99a3b]/35 sm:-right-5 sm:-top-5" />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-[2rem] bg-[#e7ddd2] p-2 shadow-2xl shadow-[#3b271c]/15 sm:p-3">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src="/images/hero/hero-mehendi.jpg"
                    alt="ShantaKumari Mehendi Art bridal Mehendi"
                    className="
                      block
                      aspect-[4/5]
                      h-auto
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      hover:scale-[1.03]
                    "
                  />

                  {/* Bottom image gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                  {/* Image caption */}
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

              {/* Small rating card */}
              <div
                className="
                  absolute
                  -left-3
                  top-8
                  rounded-2xl
                  border
                  border-[#eadfd4]
                  bg-white
                  px-4
                  py-3
                  shadow-xl
                  sm:-left-5
                  sm:px-5
                  sm:py-3.5
                  lg:-left-8
                "
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0dfc1]">
                    <Star
                      size={16}
                      className="fill-[#b98128] text-[#b98128]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#30231c]">
                      4.9 / 5
                    </p>

                    <p className="text-[10px] text-[#786a60]">
                      Bride favourite
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom experience card */}
              <div
                className="
                  absolute
                  -bottom-5
                  -right-2
                  rounded-2xl
                  bg-[#3b271c]
                  px-5
                  py-3.5
                  text-white
                  shadow-xl
                  sm:-bottom-6
                  sm:-right-4
                  sm:px-6
                  sm:py-4
                "
              >
                <p className="text-xl font-bold sm:text-2xl">
                  500+
                </p>

                <p className="text-[9px] uppercase tracking-[0.18em] text-white/65 sm:text-[10px]">
                  Happy Celebrations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}