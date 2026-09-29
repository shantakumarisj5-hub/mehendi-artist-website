"use client";

import { CalendarDays, Clock3 } from "lucide-react";

interface DateTimeStepProps {
  selectedDate: string;
  selectedTime: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

const timeSlots = [
  "9:00 AM",
  "11:00 AM",
  "1:00 PM",
  "3:00 PM",
  "5:00 PM",
  "7:00 PM",
];

export function DateTimeStep({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}: DateTimeStepProps) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6040]">
          Step 01
        </p>

        <h2 className="mt-2 font-serif text-3xl text-[#3b2417]">
          Choose your date & time
        </h2>

        <p className="mt-3 text-stone-600">
          Select a convenient date and preferred time for your Mehendi
          appointment.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#3b2417]">
            <CalendarDays className="size-4" />
            Event Date
          </label>

          <input
            type="date"
            min={today}
            value={selectedDate}
            onChange={(event) => onDateChange(event.target.value)}
            className="w-full rounded-2xl border border-[#ead9ca] bg-white px-4 py-4 text-stone-700 outline-none transition focus:border-[#7d4727] focus:ring-2 focus:ring-[#7d4727]/10"
          />

          <p className="mt-3 text-xs leading-5 text-stone-500">
            We recommend booking bridal Mehendi at least 2–4 weeks before the
            wedding.
          </p>
        </div>

        <div>
          <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#3b2417]">
            <Clock3 className="size-4" />
            Preferred Time
          </label>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time;

              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => onTimeChange(time)}
                  className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                    isSelected
                      ? "border-[#3b2417] bg-[#3b2417] text-white"
                      : "border-[#ead9ca] bg-white text-stone-600 hover:border-[#7d4727] hover:text-[#3b2417]"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}