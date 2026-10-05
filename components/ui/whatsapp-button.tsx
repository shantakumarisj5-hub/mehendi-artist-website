import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  const whatsappMessage = encodeURIComponent(
    "Hi! I would like to enquire about Mehendi booking.",
  );

  return (
    <a
      href={`https://wa.me/${siteConfig.phone}?text=${whatsappMessage}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact ShantaKumari Mehendi Art on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-900/20 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}