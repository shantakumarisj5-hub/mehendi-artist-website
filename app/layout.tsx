import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { siteUrl, shouldIndex } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shan Mehendi Art | Bridal Mehendi Artist in Davangere",
    template: "%s | Shan Mehendi Art",
  },
  description:
    "ShantaKumari Mehendi Art offers bridal, Arabic, Indo-Arabic and traditional Mehendi in Davangere, Karnataka. Explore designs, packages and booking options.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: shouldIndex,
    follow: shouldIndex,
  },
  verification: {
    google: "PNQdCiXjhTILSdz3rvHsduHgZb6v_1KtsLaI7BwNL1A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
