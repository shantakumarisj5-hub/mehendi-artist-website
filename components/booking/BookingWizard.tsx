"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { packages } from "@/lib/mock-data";

import { BookingProgress } from "./BookingProgress";
import { DateTimeStep } from "./DateTimeStep";
import { PackageStep } from "./PackageStep";
import {
  CustomerDetailsStep,
  type CustomerFormData,
} from "./CustomerDetailsStep";
import { BookingSummary } from "./BookingSummary";

export function BookingWizard() {
  const [step, setStep] = useState(1);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const [customerData, setCustomerData] = useState<CustomerFormData>({
    name: "",
    phone: "",
    email: "",
    location: "",
    specialRequest: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const selectedPackageData = packages.find(
    (pkg) => pkg.id === selectedPackage,
  );

  const goNext = () => {
    if (step < 4) {
      setStep((current) => current + 1);
    }
  };

  const goBack = () => {
    if (step > 1 && !isSubmitting) {
      setStep((current) => current - 1);
    }
  };

  const handleCustomerSubmit = (data: CustomerFormData) => {
    setCustomerData(data);
    setStep(4);
  };

  const handleFinalSubmit = async () => {
    if (!selectedPackageData) {
      setSubmitError("Please select a package.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name: customerData.name,
          phone: customerData.phone,
          email: customerData.email || null,
          event_date: selectedDate,
          event_time: selectedTime || null,
          event_type: "Mehendi Booking",
          service: selectedPackageData.name,
          location: customerData.location,
          guests: null,
          message: customerData.specialRequest || null,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Booking API error:", result);

        throw new Error(
          result.error || "Unable to submit your booking.",
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Booking submission error:", error);

      setSubmitError(
        "We couldn't submit your booking right now. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#ead9ca] bg-white px-6 py-16 text-center shadow-sm sm:px-10">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#f5ebe3]">
          <CheckCircle2 className="size-9 text-[#7d4727]" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6040]">
          Booking Request Received
        </p>

        <h2 className="mt-3 font-serif text-3xl text-[#3b2417] sm:text-4xl">
          Thank you, {customerData.name.split(" ")[0]}!
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-stone-600">
          Your booking request has been submitted successfully. We&apos;ll
          contact you regarding your selected date, time and package.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl bg-[#fffaf6] p-5 text-left">
          <p className="text-sm text-stone-500">Requested appointment</p>

          <p className="mt-1 font-semibold text-[#3b2417]">
            {selectedDate} · {selectedTime}
          </p>

          <p className="mt-4 text-sm text-stone-500">Package</p>

          <p className="mt-1 font-semibold text-[#3b2417]">
            {selectedPackageData?.name}
          </p>
        </div>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-8 rounded-full bg-[#3b2417] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#52301f]"
        >
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div>
      <BookingProgress currentStep={step} />

      <div className="rounded-3xl border border-[#ead9ca] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        {step === 1 && (
          <DateTimeStep
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateChange={setSelectedDate}
            onTimeChange={setSelectedTime}
          />
        )}

        {step === 2 && (
          <PackageStep
            selectedPackage={selectedPackage}
            onPackageChange={setSelectedPackage}
          />
        )}

        {step === 3 && (
          <CustomerDetailsStep
            initialData={customerData}
            onSubmit={handleCustomerSubmit}
          />
        )}

        {step === 4 && selectedPackageData && (
          <BookingSummary
            date={selectedDate}
            time={selectedTime}
            packageName={selectedPackageData.name}
            packagePrice={selectedPackageData.price}
            customerName={customerData.name}
            phone={customerData.phone}
            email={customerData.email}
            location={customerData.location}
            specialRequest={customerData.specialRequest}
          />
        )}

        {submitError && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {submitError}
          </div>
        )}

        <div className="mt-10 flex items-center justify-between border-t border-[#ead9ca] pt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full border border-[#ead9ca] px-5 py-3 text-sm font-semibold text-[#3b2417] transition hover:border-[#7d4727] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ArrowLeft className="size-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {step === 1 && (
            <button
              type="button"
              disabled={!selectedDate || !selectedTime}
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-full bg-[#3b2417] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#52301f] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
              <ArrowRight className="size-4" />
            </button>
          )}

          {step === 2 && (
            <button
              type="button"
              disabled={!selectedPackage}
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-full bg-[#3b2417] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#52301f] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
              <ArrowRight className="size-4" />
            </button>
          )}

          {step === 3 && (
            <button
              type="submit"
              form="customer-details-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#3b2417] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#52301f]"
            >
              Review Booking
              <ArrowRight className="size-4" />
            </button>
          )}

          {step === 4 && (
            <div className="ml-auto flex flex-col items-end gap-3">
              <button
                type="button"
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-[#3b2417] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#52301f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Confirm Booking Request"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}