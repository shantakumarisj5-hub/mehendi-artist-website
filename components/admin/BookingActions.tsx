"use client";

import { useState } from "react";
import { Check, Loader2, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

type BookingActionsProps = {
  bookingId: string;
  status: string;
};

export default function BookingActions({
  bookingId,
  status,
}: BookingActionsProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  const updateStatus = async (newStatus: "confirmed" | "cancelled") => {
    setIsUpdating(true);

    try {
      // Update booking status
      const { error: updateError } = await supabase
        .from("bookings")
        .update({ status: newStatus })
        .eq("id", bookingId);

      if (updateError) {
        console.error("Booking status update error:", updateError);
        alert("Unable to update booking status.");
        return;
      }

      // Refresh admin dashboard
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