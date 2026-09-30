import { AboutPreview } from "@/components/sections/about-preview";
import { BookingCta } from "@/components/sections/booking-cta";
import { Faq } from "@/components/sections/faq";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import Hero from "@/components/home/hero";
import { PackagesPreview } from "@/components/sections/packages-preview";
import { Reviews } from "@/components/sections/reviews";
import { ServicesPreview } from "@/components/sections/services-preview";

export default function HomePage() {
  return (
    <main>
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