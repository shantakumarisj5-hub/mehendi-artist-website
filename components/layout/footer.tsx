import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I would like to enquire about Mehendi booking.",
  );

  return (
    <footer className="bg-[#3b2417] text-[#fff7f0]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-[#fff7f0] font-serif text-xl text-[#3b2417]">
              A
            </span>

            <div>
              <h2 className="font-serif text-2xl font-bold">
                {siteConfig.name}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#d9bba4]">
                Mehendi artistry
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[#ead9ca]">
            Personalised bridal, Arabic, Indo-Arabic, and traditional Mehendi
            for weddings and special celebrations.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Explore</h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-[#ead9ca]">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/gallery" className="hover:text-white">
              Gallery
            </Link>
            <Link href="/packages" className="hover:text-white">
              Packages
            </Link>
            <Link href="/availability" className="hover:text-white">
              Availability
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>

          <div className="mt-5 space-y-4 text-sm text-[#ead9ca]">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {siteConfig.location}
            </p>

            <a
              href={`tel:+${siteConfig.phone}`}
              className="flex items-center gap-3 hover:text-white"
            >
              <Phone className="size-4 shrink-0" />
              Call the artist
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 hover:text-white"
            >
              <Mail className="size-4 shrink-0" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Start your enquiry</h3>

          <p className="mt-5 text-sm leading-6 text-[#ead9ca]">
            Share your event date and Mehendi requirements for a personalised
            response.
          </p>

          <Link
            href="/booking"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#f1c29d]"
          >
            Book your date
            <ArrowUpRight className="size-4" />
          </Link>

          <div className="mt-6 flex gap-3">
            {siteConfig.instagram && (
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
                className="rounded-full bg-[#5a3825] p-3 transition-colors hover:bg-[#7d4727]"
              >
                <Camera className="size-4" />
              </a>
            )}

            <a
              href={`https://wa.me/${siteConfig.phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="rounded-full bg-[#5a3825] p-3 transition-colors hover:bg-[#7d4727]"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#5a3825]">
        <p className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-[#d8bca7] lg:px-8">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}