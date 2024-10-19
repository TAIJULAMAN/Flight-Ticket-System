import { NextRequest, NextResponse } from "next/server";

const getCookie = (req: NextRequest, name: string) => {
  const cookieHeader = req.headers.get("Cookie");
  if (cookieHeader) {
    const cookies = cookieHeader.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
  }
  return null;
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  return NextResponse.next();

  // TODO : AFTER LOGIN
  console.log("Requested path:", pathname);

  // Retrieve userInfo cookie
  const userInfoCookie: any = getCookie(req, "userInfo");
  console.log("userInfo cookie:", userInfoCookie);
  if (!userInfoCookie) {
    NextResponse.redirect(new URL("/login", req.url));
  }

  // Check if it's an admin or user route
  const isAdmin = isAdminRoute(pathname);
  const isUser = isUserRoute(pathname);

  const userInfo: any = JSON.parse(userInfoCookie);
  if (isAdmin) {
    console.log("Admin route:", pathname);
    // Perform admin-specific middleware logic here
    if (userInfo?.role === "ADMIN") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else if (isUser) {
    console.log("User route:", pathname);
    // Perform user-specific middleware logic here
    if (userInfo?.role === "USER") {
      // Redirect to login if user is not authenticated
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/main/:path*", "/contact"],
};

const isAdminRoute = (pathname: string) => {
  return pathname.startsWith("/dashboard");
};

const isUserRoute = (pathname: string) => {
  return pathname.startsWith("/main");
};
