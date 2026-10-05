import type { MetadataRoute } from "next";
import { absoluteUrl, shouldIndex } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!shouldIndex) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
