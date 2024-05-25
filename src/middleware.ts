import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log("asdasdasdasd", request);
  const authToken = request.cookies.get("auth");

  const isAuthPage = ["/sign-in", "/sign-up"].includes(
    request.nextUrl.pathname
  );
  const isHomePage = request.nextUrl.pathname === "/";

  if (!authToken && !isAuthPage) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (authToken && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/sign-in", "/sign-up"],
};
