import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      customerName,
      customerEmail,
      status,
      eventDate,
      eventTime,
      service,
      location,
    } = body;

    if (!customerEmail) {
      return NextResponse.json(
        { error: "Customer email is required." },
        { status: 400 },
      );
    }

    const isConfirmed = status === "confirmed";

    const subject = isConfirmed
      ? "Your Mehendi Booking Has Been Confirmed"
      : "Update Regarding Your Mehendi Booking";

    const message = isConfirmed
      ? `
Hello ${customerName},

Your Mehendi booking with ShantaKumari Mehendi Art has been confirmed.

Booking Details:
Date: ${eventDate}
Time: ${eventTime || "Not specified"}
Package: ${service}
Location: ${location}

Thank you for booking with us!

ShantaKumari Mehendi Art
`
      : `
Hello ${customerName},

Unfortunately, we are unable to confirm your Mehendi booking for the following date due to availability.

Booking Details:
Date: ${eventDate}
Time: ${eventTime || "Not specified"}
Package: ${service}
Location: ${location}

Please contact us if you would like to choose another date.

ShantaKumari Mehendi Art
`;

    const { data, error } = await resend.emails.send({
      from: "ShantaKumari Mehendi Art <onboarding@resend.dev>",
      to: [customerEmail],
      subject,
      text: message,
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Unable to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Email API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}