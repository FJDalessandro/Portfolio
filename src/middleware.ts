import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Obtener la respuesta
    const response = NextResponse.next();

    // Headers de seguridad
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

    // CSP (Content Security Policy) básico
    const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.emailjs.com",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "font-src 'self'",
        "connect-src 'self' https://api.emailjs.com",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
    ].join("; ");

    response.headers.set("Content-Security-Policy", csp);

    // Protección contra ataques de fuerza bruta en la API de contacto
    if (request.nextUrl.pathname === "/api/contact") {
        // Verificar User-Agent
        const userAgent = request.headers.get("user-agent");
        if (!userAgent || userAgent.includes("bot") || userAgent.includes("crawler")) {
            return new NextResponse(JSON.stringify({ error: "Acceso no permitido" }), { status: 403, headers: { "Content-Type": "application/json" } });
        }

        // Verificar que la petición venga del mismo dominio (CSRF protection)
        const origin = request.headers.get("origin");
        const referer = request.headers.get("referer");

        if (request.method === "POST") {
            // En desarrollo, permitir localhost
            const allowedOrigins = ["http://localhost:3000", "https://localhost:3000"];
            const isLocalhost = allowedOrigins.some((allowed) => origin?.startsWith(allowed));

            if (!isLocalhost && (!origin || !referer)) {
                return new NextResponse(JSON.stringify({ error: "Acceso no permitido" }), { status: 403, headers: { "Content-Type": "application/json" } });
            }
        }
    }

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        "/((?!_next/static|_next/image|favicon.ico|public/).*)",
    ],
};
