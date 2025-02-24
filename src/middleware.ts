import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
};
