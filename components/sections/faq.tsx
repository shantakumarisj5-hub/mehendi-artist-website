"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/mock-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f8eee7] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions before you book?"
          description="Everything you need to know before sharing your Mehendi vision."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="rounded-2xl border border-[#ead9ca] bg-[#fffaf6]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                >
                  <span className="font-semibold text-[#3b2417]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-[#9b5d32] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-6 text-stone-600">
                    {faq.answer}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}