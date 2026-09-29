import Link from "next/link";
import { CalendarHeart } from "lucide-react";

export function BookingCta() {
  return (
    <section className="bg-[#fffaf6] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#3b2417] px-6 py-14 text-center text-white sm:px-12">
        <CalendarHeart className="mx-auto size-10 text-[#e9b991]" />
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#e9b991]">
          Let’s create something beautiful
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Your Mehendi journey begins with a simple enquiry.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#ead9ca]">
          Tell us your event date, style preference, and celebration details.
          The payment and confirmation workflow will be added later.
        </p>
        <Link
          href="/booking"
          className="mt-8 inline-flex rounded-full bg-[#fffaf6] px-6 py-3.5 text-sm font-semibold text-[#3b2417] transition-colors hover:bg-[#f2e4d8]"
        >
          Start booking enquiry
        </Link>
      </div>
    </section>
  );
}