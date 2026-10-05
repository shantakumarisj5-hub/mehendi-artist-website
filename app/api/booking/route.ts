import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      customer_name,
      phone,
      email,
      event_date,
      event_time,
      event_type,
      service,
      location,
      guests,
      message,
    } = body;

    // Check environment variables without exposing their values
    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;
    const bookingNotificationEmail =
      process.env.BOOKING_NOTIFICATION_EMAIL;

    console.log("EMAIL ENV CHECK:", {
      hasApiKey: Boolean(resendApiKey),
      hasFromEmail: Boolean(resendFromEmail),
      hasNotificationEmail: Boolean(
        bookingNotificationEmail,
      ),
    });

    // Basic validation
    if (
      !customer_name ||
      !phone ||
      !event_date ||
      !service ||
      !location
    ) {
      return NextResponse.json(
        {
          error: "Please provide all required booking details.",
        },
        { status: 400 },
      );
    }

    // Save booking to Supabase first
    const { data: booking, error: bookingError } =
      await supabaseAdmin
        .from("bookings")
        .insert({
          customer_name,
          phone,
          email: email || null,
          event_date,
          event_time: event_time || null,
          event_type: event_type || "Mehendi Booking",
          service,
          location,
          guests: guests ?? null,
          message: message || null,
          status: "pending",
        })
        .select()
        .single();

    if (bookingError) {
      console.error("Booking database error:", bookingError);

      return NextResponse.json(
        {
          error:
            "Unable to save your booking. Please try again.",
        },
        { status: 500 },
      );
    }

    // Send notification email
    if (
      resendApiKey &&
      resendFromEmail &&
      bookingNotificationEmail
    ) {
      try {
        const resend = new Resend(resendApiKey);

        const emailResult = await resend.emails.send({
          from: resendFromEmail,
          to: bookingNotificationEmail,
          subject: `New Mehendi Booking - ${customer_name}`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #3b2417;">
              <h2>New Mehendi Booking Request</h2>

              <p><strong>Customer Name:</strong> ${customer_name}</p>

              <p><strong>Phone:</strong> ${phone}</p>

              <p><strong>Email:</strong> ${
                email || "Not provided"
              }</p>

              <p><strong>Event Date:</strong> ${event_date}</p>

              <p><strong>Event Time:</strong> ${
                event_time || "Not provided"
              }</p>

              <p><strong>Service / Package:</strong> ${service}</p>

              <p><strong>Location:</strong> ${location}</p>

              <p><strong>Guests:</strong> ${
                guests ?? "Not specified"
              }</p>

              <p><strong>Special Request:</strong> ${
                message || "None"
              }</p>

              <p><strong>Status:</strong> Pending</p>

              <hr />

              <p>
                This booking was submitted through the
                ShantaKumari Mehendi Art website.
              </p>
            </div>
          `,
        });

        if (emailResult.error) {
          console.error(
            "Resend email error:",
            emailResult.error,
          );
        } else {
          console.log(
            "Booking notification email sent successfully:",
            emailResult.data?.id,
          );
        }
      } catch (emailError) {
        console.error(
          "Booking email error:",
          emailError,
        );
      }
    } else {
      console.warn(
        "Email notification skipped. Check RESEND_API_KEY, RESEND_FROM_EMAIL and BOOKING_NOTIFICATION_EMAIL.",
      );
    }

    return NextResponse.json(
      {
        success: true,
        booking,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong while creating the booking.",
      },
      { status: 500 },
    );
  }
}