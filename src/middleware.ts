// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value; // Ou verifique session, JWT, etc.

  const protectedRoutes = ['/home', '/dashboard', '/profile', '/moedas', '/schedule_trips']; // rotas protegidas

  const isProtectedRoute = protectedRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !token) {
    // Redireciona para /login
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Define quais rotas serão verificadas
export const config = {
  matcher: ['/home,/dashboard, /profile, /moedas, /schedule_trips'],

};
