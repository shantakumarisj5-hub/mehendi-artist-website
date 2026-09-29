"use client";

import { Check } from "lucide-react";
import { packages } from "@/lib/mock-data";

interface PackageStepProps {
  selectedPackage: string;
  onPackageChange: (packageId: string) => void;
}

export function PackageStep({
  selectedPackage,
  onPackageChange,
}: PackageStepProps) {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6040]">
          Step 02
        </p>

        <h2 className="mt-2 font-serif text-3xl text-[#3b2417]">
          Choose your package
        </h2>

        <p className="mt-3 text-stone-600">
          Select the Mehendi package that best fits your celebration.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {packages.map((pkg) => {
          const isSelected = selectedPackage === pkg.id;

          return (
            <button
              key={pkg.id}
              type="button"
              onClick={() => onPackageChange(pkg.id)}
              className={`relative text-left rounded-3xl border p-6 transition ${
                isSelected
                  ? "border-[#3b2417] bg-[#fffaf6] shadow-lg"
                  : "border-[#ead9ca] bg-white hover:-translate-y-1 hover:shadow-md"
              }`}
            >
              {isSelected && (
                <span className="absolute right-5 top-5 flex size-7 items-center justify-center rounded-full bg-[#3b2417] text-white">
                  <Check className="size-4" />
                </span>
              )}

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6040]">
                Package
              </p>

              <h3 className="mt-3 font-serif text-2xl text-[#3b2417]">
                {pkg.name}
              </h3>

              <p className="mt-2 text-2xl font-semibold text-[#7d4727]">
                {pkg.price}
              </p>

              <p className="mt-4 text-sm leading-6 text-stone-600">
                {pkg.description}
              </p>

              <div className="mt-6 space-y-3 border-t border-[#ead9ca] pt-5">
                {pkg.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2 text-sm text-stone-600"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-[#7d4727]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}