import { Quote, Star } from "lucide-react";
import { reviews } from "@/lib/mock-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Reviews() {
  return (
    <section className="bg-[#fffaf6] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client experiences"
          title="Celebrations made even more special."
          description="Read experiences shared by clients who chose Shan Mehendi Art for their celebrations."
          center
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl border border-[#ead9ca] bg-white p-6"
            >
              <Quote
                aria-hidden="true"
                className="size-8 text-[#c98155]"
              />

              <p className="mt-5 text-sm leading-7 text-stone-600">
                “{review.text}”
              </p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <p className="font-semibold text-[#3b2417]">
                  {review.name}
                </p>

                <div
                  className="flex"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      aria-hidden="true"
                      className={`size-4 text-[#c98155] ${
                        star <= review.rating ? "fill-current" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}