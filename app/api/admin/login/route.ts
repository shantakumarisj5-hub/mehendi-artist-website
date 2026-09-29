import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = body.password;

    if (typeof password !== "string") {
      return NextResponse.json(
        { error: "Invalid password." },
        { status: 400 },
      );
    }

    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD is not configured.");
      return NextResponse.json(
        { error: "Admin login is not configured." },
        { status: 500 },
      );
    }

    if (password !== adminPassword) {
      return NextResponse.json(
        { error: "Incorrect admin password." },
        { status: 401 },
      );
    }

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.error("Admin login API error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}