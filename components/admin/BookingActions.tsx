"use client";

import { useState } from "react";
import { Check, Loader2, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

type BookingActionsProps = {
  bookingId: string;
  status: string;
};

type BookingData = {
  customer_name: string;
  email: string | null;
  event_date: string;
  event_time: string | null;
  service: string;
  location: string;
};

export default function BookingActions({
  bookingId,
  status,
}: BookingActionsProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateStatus = async (newStatus: "confirmed" | "cancelled") => {
    setIsUpdating(true);

    try {
      // 1. Get booking details
      const { data: booking, error: fetchError } = await supabase
        .from("bookings")
        .select(
          "customer_name, email, event_date, event_time, service, location",
        )
        .eq("id", bookingId)
        .single();

      if (fetchError || !booking) {
        console.error("Booking fetch error:", fetchError);
        alert("Unable to find booking.");
        return;
      }

      const bookingData = booking as BookingData;

      // 2. Update booking status
      const { error: updateError } = await supabase
        .from("bookings")
        .update({ status: newStatus })
        .eq("id", bookingId);

      if (updateError) {
        console.error("Booking status update error:", updateError);
        alert("Unable to update booking status.");
        return;
      }

      // 3. Send email if customer provided an email
      if (bookingData.email) {
        const emailResponse = await fetch("/api/send-booking-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerName: bookingData.customer_name,
            customerEmail: bookingData.email,
            status: newStatus,
            eventDate: bookingData.event_date,
            eventTime: bookingData.event_time,
            service: bookingData.service,
            location: bookingData.location,
          }),
        });

        const emailResult = await emailResponse.json();

        if (!emailResponse.ok) {
          console.error("Email sending failed:", emailResult);

          alert(
            "Booking status updated, but the email could not be sent.",
          );

          return;
        }

        console.log("Email sent successfully:", emailResult);
      } else {
        console.log("Customer did not provide an email address.");
      }

      // 4. Refresh admin dashboard
      window.location.reload();
    } catch (error) {
      console.error("Booking action error:", error);
      alert("Something went wrong.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (status !== "pending") {
    return (
      <span className="text-sm text-stone-500">
        No actions
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => updateStatus("confirmed")}
        disabled={isUpdating}
        className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isUpdating ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <Check className="h-3.5 w-3.5" />
        )}
        Confirm
      </button>

      <button
        type="button"
        onClick={() => updateStatus("cancelled")}
        disabled={isUpdating}
        className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isUpdating ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <X className="h-3.5 w-3.5" />
        )}
        Cancel
      </button>
    </div>
  );
}