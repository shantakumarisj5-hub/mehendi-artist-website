import type { Metadata } from "next";

const fallbackSiteUrl = "http://localhost:3000";

function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (explicitUrl) {
    return explicitUrl.replace(/\/+$/, "");
  }

  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

  if (productionUrl) {
    return `https://${productionUrl}`.replace(/\/+$/, "");
  }

  const deploymentUrl = process.env.VERCEL_URL?.trim();

  if (deploymentUrl) {
    return `https://${deploymentUrl}`.replace(/\/+$/, "");
  }

  return fallbackSiteUrl;
}

export const siteUrl = getSiteUrl();

export const shouldIndex = process.env.VERCEL_ENV !== "preview";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  imageAlt = "ShantaKumari Mehendi Art bridal Mehendi in Davangere",
}: PageMetadataOptions): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const fullTitle = `${title} | Shan Mehendi Art`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    robots: {
      index: shouldIndex,
      follow: shouldIndex,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "ShantaKumari Mehendi Art",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}
