"use client";

interface BookingProgressProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: "Date & Time" },
  { number: 2, label: "Package" },
  { number: 3, label: "Your Details" },
  { number: 4, label: "Review" },
];

export function BookingProgress({ currentStep }: BookingProgressProps) {
  return (
    <div className="mb-10">
      <div className="hidden items-center justify-between md:flex">
        {steps.map((step, index) => (
          <div key={step.number} className="flex flex-1 items-center">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
                  currentStep >= step.number
                    ? "border-[#3b2417] bg-[#3b2417] text-white"
                    : "border-[#d9c4b4] bg-white text-stone-500"
                }`}
              >
                {step.number}
              </div>

              <span
                className={`text-sm font-medium ${
                  currentStep >= step.number
                    ? "text-[#3b2417]"
                    : "text-stone-400"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`mx-4 h-px flex-1 ${
                  currentStep > step.number
                    ? "bg-[#3b2417]"
                    : "bg-[#ead9ca]"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <p className="text-sm font-medium text-stone-500">
          Step {currentStep} of {steps.length}
        </p>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#ead9ca]">
          <div
            className="h-full rounded-full bg-[#3b2417] transition-all duration-300"
            style={{
              width: `${(currentStep / steps.length) * 100}%`,
            }}
          />
        </div>

        <p className="mt-2 text-sm font-semibold text-[#3b2417]">
          {steps[currentStep - 1].label}
        </p>
      </div>
    </div>
  );
}