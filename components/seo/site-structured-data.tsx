import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

export function SiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl("/")}#business`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    image: [absoluteUrl("/images/hero/hero-mehendi.jpg")],
    telephone: `+${siteConfig.phone}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Davangere",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Davangere",
    },
    serviceType: "Mehendi artistry",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
