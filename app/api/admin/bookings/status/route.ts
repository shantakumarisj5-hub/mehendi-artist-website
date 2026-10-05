import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { supabaseAdmin } from "@/lib/supabase-admin";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string | null | undefined) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/*
 * CREATE BOOKING
 */
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

    if (!customer_name || !phone || !event_date || !service) {
      return NextResponse.json(
        {
          error:
            "Name, phone, event date and service are required.",
        },
        { status: 400 },
      );
    }

    /*
     * 1. Save booking to Supabase
     */
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
          location: location || null,
          guests: guests ?? null,
          message: message || null,
          status: "pending",
        })
        .select()
        .single();

    if (bookingError) {
      console.error("Supabase booking error:", bookingError);

      return NextResponse.json(
        {
          error: "Unable to save booking.",
        },
        { status: 500 },
      );
    }

    /*
     * 2. Send email notification
     */
    const notificationEmail =
      process.env.BOOKING_NOTIFICATION_EMAIL;

    if (
      process.env.RESEND_API_KEY &&
      notificationEmail
    ) {
      try {
        const emailResult = await resend.emails.send({
          from:
            process.env.RESEND_FROM_EMAIL ||
            "onboarding@resend.dev",

          to: notificationEmail,

          subject: `New Mehendi Booking - ${customer_name}`,

          html: `
            <div style="
              font-family: Arial, sans-serif;
              line-height: 1.6;
              max-width: 650px;
              margin: 0 auto;
              padding: 24px;
              color: #3b2417;
            ">

              <h2 style="margin-bottom: 8px;">
                New Mehendi Booking
              </h2>

              <p>
                You have received a new booking request.
              </p>

              <hr style="border: 0; border-top: 1px solid #ead9ca; margin: 24px 0;" />

              <p>
                <strong>Customer Name:</strong>
                ${escapeHtml(customer_name)}
              </p>

              <p>
                <strong>Phone:</strong>
                ${escapeHtml(phone)}
              </p>

              <p>
                <strong>Email:</strong>
                ${escapeHtml(email || "Not provided")}
              </p>

              <p>
                <strong>Event Date:</strong>
                ${escapeHtml(event_date)}
              </p>

              <p>
                <strong>Event Time:</strong>
                ${escapeHtml(event_time || "Not provided")}
              </p>

              <p>
                <strong>Event Type:</strong>
                ${escapeHtml(
                  event_type || "Mehendi Booking",
                )}
              </p>

              <p>
                <strong>Package / Service:</strong>
                ${escapeHtml(service)}
              </p>

              <p>
                <strong>Location:</strong>
                ${escapeHtml(location || "Not provided")}
              </p>

              <p>
                <strong>Guests:</strong>
                ${escapeHtml(
                  guests !== null &&
                    guests !== undefined
                    ? String(guests)
                    : "Not provided",
                )}
              </p>

              <p>
                <strong>Special Request:</strong>
                ${escapeHtml(
                  message || "No special request",
                )}
              </p>

              <hr style="border: 0; border-top: 1px solid #ead9ca; margin: 24px 0;" />

              <p>
                <strong>Booking ID:</strong>
                ${escapeHtml(String(booking.id))}
              </p>

              <p>
                <strong>Status:</strong>
                Pending
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
            "Booking notification email sent:",
            emailResult.data?.id,
          );
        }
      } catch (emailError) {
        /*
         * The booking has already been saved.
         * Therefore, don't delete/fail the booking
         * just because email sending failed.
         */
        console.error(
          "Booking email error:",
          emailError,
        );
      }
    } else {
      console.warn(
        "Email was not sent. Check RESEND_API_KEY and BOOKING_NOTIFICATION_EMAIL.",
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


/*
 * ADMIN: Confirm / Cancel booking
 */
export async function PATCH(request: NextRequest) {
  try {
    const adminSession =
      request.cookies.get("admin_session")?.value;

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
      console.error(
        "Admin booking update error:",
        error,
      );

      return NextResponse.json(
        { error: "Unable to update booking." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Admin status API error:",
      error,
    );

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}