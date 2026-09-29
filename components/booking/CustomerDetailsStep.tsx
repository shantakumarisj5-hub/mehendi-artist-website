"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const customerSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),

  email: z
    .string()
    .email("Please enter a valid email address."),

  location: z
    .string()
    .min(3, "Please enter the event location.")
    .max(200, "Location is too long."),

  specialRequest: z
    .string()
    .max(500, "Please keep your request under 500 characters.")
    .optional(),
});

export type CustomerFormData = z.infer<typeof customerSchema>;

interface CustomerDetailsStepProps {
  initialData: CustomerFormData;
  onSubmit: (data: CustomerFormData) => void;
}

export function CustomerDetailsStep({
  initialData,
  onSubmit,
}: CustomerDetailsStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: initialData,
  });

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6040]">
          Step 03
        </p>

        <h2 className="mt-2 font-serif text-3xl text-[#3b2417]">
          Tell us about yourself
        </h2>

        <p className="mt-3 text-stone-600">
          Enter your details so we can contact you about your booking.
        </p>
      </div>

      <form
        id="customer-details-form"
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 md:grid-cols-2"
      >
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#3b2417]">
            Full Name
          </label>

          <input
            {...register("name")}
            placeholder="Enter your full name"
            className="w-full rounded-2xl border border-[#ead9ca] bg-white px-4 py-3.5 outline-none focus:border-[#7d4727] focus:ring-2 focus:ring-[#7d4727]/10"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#3b2417]">
            Phone Number
          </label>

          <input
            {...register("phone")}
            inputMode="numeric"
            placeholder="10-digit mobile number"
            className="w-full rounded-2xl border border-[#ead9ca] bg-white px-4 py-3.5 outline-none focus:border-[#7d4727] focus:ring-2 focus:ring-[#7d4727]/10"
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#3b2417]">
            Email Address
          </label>

          <input
            {...register("email")}
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-[#ead9ca] bg-white px-4 py-3.5 outline-none focus:border-[#7d4727] focus:ring-2 focus:ring-[#7d4727]/10"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#3b2417]">
            Event Location
          </label>

          <input
            {...register("location")}
            placeholder="Example: Mysuru"
            className="w-full rounded-2xl border border-[#ead9ca] bg-white px-4 py-3.5 outline-none focus:border-[#7d4727] focus:ring-2 focus:ring-[#7d4727]/10"
          />

          {errors.location && (
            <p className="mt-2 text-sm text-red-600">
              {errors.location.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-semibold text-[#3b2417]">
            Special Request{" "}
            <span className="font-normal text-stone-400">(Optional)</span>
          </label>

          <textarea
            {...register("specialRequest")}
            rows={5}
            placeholder="Tell us about your preferred design, event details, or anything else..."
            className="w-full resize-none rounded-2xl border border-[#ead9ca] bg-white px-4 py-3.5 outline-none focus:border-[#7d4727] focus:ring-2 focus:ring-[#7d4727]/10"
          />

          {errors.specialRequest && (
            <p className="mt-2 text-sm text-red-600">
              {errors.specialRequest.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}