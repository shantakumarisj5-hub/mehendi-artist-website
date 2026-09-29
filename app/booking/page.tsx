import { BookingWizard } from "@/components/booking/BookingWizard";

export const metadata = {
  title: "Book Your Mehendi | Ananya Mehendi Art",
  description:
    "Choose your date, Mehendi package and event details with Ananya Mehendi Art.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#fffaf6]">
      <section className="border-b border-[#ead9ca] bg-[#3b2417]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e7c8ad]">
            Ananya Mehendi Art
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-4xl text-white sm:text-5xl lg:text-6xl">
            Let&apos;s create something beautiful for your celebration.
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-[#e8d9ce]">
            Choose your preferred date, package and event details. Your
            booking journey takes just a few simple steps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <BookingWizard />
      </section>
    </main>
  );
}