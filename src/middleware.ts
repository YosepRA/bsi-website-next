import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import locales from 'data/locales.ts';

// Get the preferred locale, similar to above or using a library
// function getLocale(request) { ... }

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = locales.every((locale) => {
    return !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`;
  });

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(new URL(`/en/${pathname}`, request.url));
  }

  return undefined;
}

export const config = {
  matcher: [
    // Run middleware on every route except these ones.
    '/((?!_next|img|file|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
