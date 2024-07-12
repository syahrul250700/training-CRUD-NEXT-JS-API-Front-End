import { NextResponse } from "next/server";

export function middleware(req) {
  const access_token = req.cookies.get("access_token");
  const refresh_token = req.cookies.get("refresh_token");
  console.log(access_token);
  console.log(refresh_token);

  const authRoute = ["/login", "/register"];
  const protectedRoute = ["/", "/fetch"];

  //   protected routes
  if (protectedRoute.includes(req.nextUrl.pathname)) {
    if (access_token && refresh_token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else if (authRoute.includes(req.nextUrl.pathname)) {
    // auth routes
    if (access_token && refresh_token) {
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      return NextResponse.next();
    }
  } else {
    // public route
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/login", "/register", "/fetch", "/dashboard/:path*", "/"],
};
