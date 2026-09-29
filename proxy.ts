import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the login page itself
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect every other /admin route
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const adminSession = request.cookies.get("admin_session")?.value;

    // No valid session → send to login
    if (adminSession !== "authenticated") {
      const loginUrl = new URL("/admin/login", request.url);

      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};