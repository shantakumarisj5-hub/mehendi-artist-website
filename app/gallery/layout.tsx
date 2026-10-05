import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mehendi Gallery",
  description:
    "View bridal, Arabic, Indo-Arabic and traditional Mehendi designs by ShantaKumari Mehendi Art in Davangere, Karnataka.",
  path: "/gallery",
});

export default function GalleryLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
