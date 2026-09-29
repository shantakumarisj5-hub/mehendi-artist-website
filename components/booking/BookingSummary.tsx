"use client";

import { CalendarDays, Clock3, MapPin, Package } from "lucide-react";

interface BookingSummaryProps {
  date: string;
  time: string;
  packageName: string;
  packagePrice: string;
  customerName: string;
  phone: string;
  email: string;
  location: string;
  specialRequest?: string;
}

export function BookingSummary({
  date,
  time,
  packageName,
  packagePrice,
  customerName,
  phone,
  email,
  location,
  specialRequest,
}: BookingSummaryProps) {
  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6040]">
          Step 04
        </p>

        <h2 className="mt-2 font-serif text-3xl text-[#3b2417]">
          Review your booking
        </h2>

        <p className="mt-3 text-stone-600">
          Please check your details before sending the booking request.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-3xl border border-[#ead9ca] bg-white p-6">
          <h3 className="font-serif text-2xl text-[#3b2417]">
            Appointment Details
          </h3>

          <div className="mt-6 space-y-5">
            <div className="flex gap-4">
              <CalendarDays className="mt-1 size-5 text-[#7d4727]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400">
                  Date
                </p>
                <p className="mt-1 font-medium text-stone-700">
                  {formattedDate}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock3 className="mt-1 size-5 text-[#7d4727]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400">
                  Time
                </p>
                <p className="mt-1 font-medium text-stone-700">{time}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Package className="mt-1 size-5 text-[#7d4727]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400">
                  Package
                </p>
                <p className="mt-1 font-medium text-stone-700">
                  {packageName}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 size-5 text-[#7d4727]" />
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400">
                  Location
                </p>
                <p className="mt-1 font-medium text-stone-700">{location}</p>
              </div>
            </div>
          </div>

          {specialRequest && (
            <div className="mt-7 border-t border-[#ead9ca] pt-6">
              <p className="text-xs uppercase tracking-wider text-stone-400">
                Special Request
              </p>
              <p className="mt-2 leading-6 text-stone-600">
                {specialRequest}
              </p>
            </div>
          )}
        </div>

        <div className="h-fit rounded-3xl bg-[#3b2417] p-7 text-white">
          <p className="text-xs uppercase tracking-[0.18em] text-[#e7c8ad]">
            Selected Package
          </p>

          <h3 className="mt-3 font-serif text-2xl">{packageName}</h3>

          <p className="mt-5 text-3xl font-semibold">{packagePrice}</p>

          <div className="my-6 h-px bg-white/15" />

          <p className="text-sm text-[#e8d9ce]">Customer</p>
          <p className="mt-1 font-medium">{customerName}</p>

          <p className="mt-4 text-sm text-[#e8d9ce]">Phone</p>
          <p className="mt-1 font-medium">{phone}</p>

          <p className="mt-4 text-sm text-[#e8d9ce]">Email</p>
          <p className="mt-1 break-words font-medium">{email}</p>
        </div>
      </div>
    </div>
  );
}