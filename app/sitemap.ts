import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const publicRoutes = [
  "/",
  "/about",
  "/services",
  "/gallery",
  "/packages",
  "/availability",
  "/booking",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: absoluteUrl(path),
  }));
}
