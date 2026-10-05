import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mehendi Availability in Davangere",
  description:
    "View the displayed Mehendi availability calendar for ShantaKumari Mehendi Art in Davangere and send a booking enquiry for your date.",
  path: "/availability",
});

const dates = Array.from({ length: 30 }, (_, index) => index + 1);
const unavailableDates = [3, 7, 12, 18, 21, 27];

export default function AvailabilityPage() {
  return (
    <main className="bg-[#fffaf6]">
      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Availability"
          title="Find a date for your Mehendi."
          description="This calendar is a frontend availability display. Send a booking enquiry to confirm your preferred date."
          center
          level="h1"
        />

        <div className="mt-12 rounded-3xl border border-[#ead9ca] bg-white p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-3xl text-[#3b2417]">October 2026</h2>
            <div className="flex gap-4 text-xs">
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-[#b9d5bd]" />
                Available
              </span>
              <span className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-[#e8b8b1]" />
                Booked
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-7 gap-2 text-center text-xs font-semibold text-stone-500">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-7 gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={`empty-${index}`} />
            ))}

            {dates.map((date) => {
              const isUnavailable = unavailableDates.includes(date);

              return (
                <div
                  key={date}
                  className={`flex aspect-square items-center justify-center rounded-xl text-sm font-semibold ${
                    isUnavailable
                      ? "bg-[#f3d2cd] text-[#8a3e35]"
                      : "bg-[#dcecdf] text-[#34623d]"
                  }`}
                >
                  {date}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/booking"
            className="inline-flex rounded-full bg-[#3b2417] px-6 py-3.5 text-sm font-semibold text-white"
          >
            Send booking enquiry
          </Link>
        </div>
      </section>
    </main>
  );
}
