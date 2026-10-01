import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

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
  title: {
    default: "Shan Mehendi Art | Bridal Mehendi Artist in Davangere",
    template: "%s | Shan Mehendi Art",
  },
  description:
    "Premium bridal, Arabic, traditional, and Indo-Arabic Mehendi designs in Davangere. Enquire with Shan Mehendi Art for weddings and celebrations.",
  keywords: [
    "Mehendi artist in Davangere",
    "bridal Mehendi Davangere",
    "Arabic Mehendi artist",
    "wedding Mehendi artist",
    "Mehendi booking Davangere",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta
          name="google-site-verification"
          content="PNQdCiXjhTILSdz3rvHsduHgZb6v_1KtsLaI7BwNL1A"
        />
      </head>

      <body className={`${poppins.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}