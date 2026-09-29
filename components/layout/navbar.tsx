"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hi! I would like to enquire about Mehendi booking.",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9ca] bg-[#fffaf6]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-[#3b2417] font-serif text-xl text-[#fffaf6]">
            S
          </span>

          <span>
            <span className="block font-serif text-lg font-bold leading-none text-[#3b2417]">
              {siteConfig.name}
            </span>

            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b5d32]">
              Mehendi artistry
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-[#9b5d32]"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={`https://wa.me/${siteConfig.phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#3b2417] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5a3825]"
          >
            <MessageCircle className="size-4" />
            Enquire now
          </a>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="rounded-lg p-2 text-[#3b2417] transition-colors hover:bg-[#f2e4d8] lg:hidden"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-[#ead9ca] bg-[#fffaf6] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#f0e1d5] pb-3 text-sm font-medium text-stone-700"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={`https://wa.me/${siteConfig.phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#3b2417] px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="size-4" />
              WhatsApp enquiry
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}