import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#fffaf6] px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="About Ananya Mehendi Art"
            title="Thoughtful Mehendi for meaningful celebrations."
            description="Ananya Mehendi Art creates personalised bridal and occasion Mehendi designs in Mysuru with a focus on detail, elegance, and a calm booking experience."
            center
          />

          <div className="mt-10 space-y-5 text-base leading-8 text-stone-600">
            <p>
              Every Mehendi design is created to suit the celebration, outfit,
              and personal story of the client.
            </p>
            <p>
              From detailed bridal work to simple Arabic trails, the goal is to
              create Mehendi that feels beautiful and personal.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/booking"
              className="inline-flex rounded-full bg-[#3b2417] px-6 py-3 text-sm font-semibold text-white"
            >
              Enquire about your date
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}