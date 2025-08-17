// src/middleware.ts
import { NextResponse,NextRequest } from 'next/server';
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const protectedRoutes = ['/home', '/dashboard', '/profile', '/moedas', '/scheduled_trips']; // rotas protegidas

  const isProtectedRoute = protectedRoutes.some(route =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    // Redireciona para /login
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Define quais rotas serão verificadas
export const config = {
  matcher: ['/home','/dashboard', '/profile', '/moedas', '/scheduled_trips'],

};
