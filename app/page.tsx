import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/about-preview";
import { BookingCta } from "@/components/sections/booking-cta";
import { Faq } from "@/components/sections/faq";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import Hero from "@/components/home/hero";
import { PackagesPreview } from "@/components/sections/packages-preview";
import { Reviews } from "@/components/sections/reviews";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SiteStructuredData } from "@/components/seo/site-structured-data";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bridal Mehendi Artist in Davangere",
  description:
    "ShantaKumari Mehendi Art creates bridal, Arabic, Indo-Arabic and traditional Mehendi designs in Davangere, Karnataka. Explore the gallery, packages and booking options.",
  path: "/",
});

export default function HomePage() {
  return (
    <main>
      <SiteStructuredData />
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <PackagesPreview />
      <GalleryPreview />
      <Reviews />
      <Faq />
      <BookingCta />
    </main>
  );
}
