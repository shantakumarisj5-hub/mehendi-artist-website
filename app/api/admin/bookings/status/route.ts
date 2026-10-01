import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function PATCH(request: NextRequest) {
  try {
    const adminSession = request.cookies.get("admin_session")?.value;

    if (adminSession !== "authenticated") {
      return NextResponse.json(
        { error: "Unauthorized." },
        { status: 401 },
      );
    }

    const body = await request.json();

    const bookingId = body.bookingId;
    const status = body.status;

    if (
      typeof bookingId !== "string" ||
      !["confirmed", "cancelled"].includes(status)
    ) {
      return NextResponse.json(
        { error: "Invalid booking update." },
        { status: 400 },
      );
    }

    const { error } = await supabaseAdmin
      .from("bookings")
      .update({ status })
      .eq("id", bookingId);

    if (error) {
      console.error("Admin booking update error:", error);

      return NextResponse.json(
        { error: "Unable to update booking." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Admin status API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}