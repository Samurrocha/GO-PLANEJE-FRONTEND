import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth/auth"; // caminho para seu `auth` da next-auth

export async function middleware(request: NextRequest) {
  const session = await auth(); // <- Usa o auth do next-auth
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/home", "/dashboard", "/settings", "/moedas"];
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

  const isAuthenticated = !!session?.user;

  console.log("🧪 MIDDLEWARE", { pathname, isAuthenticated });

  if (!isAuthenticated && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuthenticated && pathname === "/login") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // ignora API e assets
};
