import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const session = request.cookies.get("session");

    if (!session) {
        if(request.nextUrl.pathname.includes("auth")) {
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    const existSession = session.value === "true";

    if (existSession) {
        if (request.nextUrl.pathname.includes("login")) {
            return NextResponse.redirect(new URL("/app/home", request.url));
        }
    }

    if(existSession) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/auth/login", request.url));
}

export const config = {
    matcher: ["/app/:path*", "/auth/:path*"],
};