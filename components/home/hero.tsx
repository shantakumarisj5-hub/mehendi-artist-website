import { CalendarDays, CheckCircle2, MapPin, MessageCircle, Star } from "lucide-react";
import { siteConfig } from "@/constants/site";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-forest px-5 py-20 text-[#fff9f0] sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full border border-[#c99a3b]" />
        <div className="absolute -right-20 bottom-[-70px] h-96 w-96 rounded-full border border-[#c99a3b]" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c99a3b]/50" />
      </div>

      <div className="container-custom relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c99a3b]/50 bg-[#c99a3b]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f7d98c]">
            <MapPin size={15} />
            Premium Mehendi Artist in Mysuru
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c99a3b]">
            Bridal • Arabic • Traditional
          </p>

          <h1 className="font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Every celebration deserves
            <span className="block text-[#e6bd62]">a beautiful story.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#f6ebdd] sm:text-lg">
            Exquisite Mehendi artistry designed around your love story, outfit,
            traditions and most unforgettable celebrations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#booking" className="btn-gold">
              <CalendarDays size={19} />
              Check Availability
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold"
            >
              <MessageCircle size={19} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-[#c99a3b]/30 pt-7 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-1 text-[#e6bd62]">
                <Star size={16} fill="currentColor" />
                <span className="text-lg font-bold text-[#fff9f0]">4.9/5</span>
              </div>
              <p className="mt-1 text-xs text-[#f6ebdd]">Loved by brides</p>
            </div>

            <div>
              <div className="flex items-center gap-1 text-[#e6bd62]">
                <CheckCircle2 size={17} />
                <span className="text-lg font-bold text-[#fff9f0]">500+</span>
              </div>
              <p className="mt-1 text-xs text-[#f6ebdd]">Happy celebrations</p>
            </div>

            <div>
              <div className="flex items-center gap-1 text-[#e6bd62]">
                <MapPin size={17} />
                <span className="text-lg font-bold text-[#fff9f0]">Mysuru</span>
              </div>
              <p className="mt-1 text-xs text-[#f6ebdd]">Travel on request</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#c99a3b]/50 bg-gradient-to-br from-[#315f4a] via-[#274e3c] to-[#17352a] p-6 shadow-2xl">
            <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-[#c99a3b]/40 p-6">
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl text-[#e6bd62]">A</span>
                <span className="text-xs uppercase tracking-[0.22em] text-[#f6ebdd]">
                  Since 2018
                </span>
              </div>

              <div>
                <p className="font-heading text-4xl leading-tight text-[#fff9f0]">
                  Hands adorned
                  <br />
                  with love.
                </p>

                <div className="mt-5 h-px w-20 bg-[#c99a3b]" />

                <p className="mt-5 text-sm leading-6 text-[#f6ebdd]">
                  Bridal Mehendi crafted with intricate details, heritage
                  patterns and a personal touch.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-[#f6ebdd]">
                <span>{siteConfig.city}</span>
                <span className="text-[#e6bd62]">✦</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[#e5d7c2] bg-[#fff9f0] px-4 py-3 text-forest shadow-lg sm:-left-8">
            <p className="font-heading text-lg font-bold">Bridal Specialist</p>
            <p className="mt-1 text-xs text-[#6b6258]">Your dream design, beautifully detailed.</p>
          </div>
        </div>
      </div>
    </section>
  );
}