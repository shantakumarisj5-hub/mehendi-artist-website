import type { Metadata } from "next";
import { PackagesPreview } from "@/components/sections/packages-preview";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mehendi Packages and Prices",
  description:
    "Explore bridal and wedding Mehendi packages from ShantaKumari Mehendi Art, with starting prices for celebrations in Davangere.",
  path: "/packages",
});

export default function PackagesPage() {
  return (
    <main className="bg-[#fffaf6]">
      <PackagesPreview headingLevel="h1" />
    </main>
  );
}
