import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n";

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "always",
    // Configuración adicional para mejor manejo de locales
    localeDetection: true,
});

export default function middleware(request: NextRequest) {
    // Crear la respuesta del middleware de internacionalización
    const response = intlMiddleware(request);

    // Agregar headers de seguridad
    const securityHeaders = {
        // Protección contra XSS
        "X-XSS-Protection": "1; mode=block",
        // Prevenir MIME type sniffing
        "X-Content-Type-Options": "nosniff",
        // Protección contra clickjacking
        "X-Frame-Options": "DENY",
        // Referrer Policy
        "Referrer-Policy": "strict-origin-when-cross-origin",
        // Content Security Policy
        "Content-Security-Policy": [
            "default-src 'self'",
            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.emailjs.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https:",
            "font-src 'self'",
            "connect-src 'self' https://api.emailjs.com",
            "frame-src 'none'",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "frame-ancestors 'none'",
            "upgrade-insecure-requests",
        ].join("; "),
        // Permissions Policy
        "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
        // Cache Control para APIs
        "Cache-Control": request.nextUrl.pathname.startsWith("/api/") ? "no-store, no-cache, must-revalidate, proxy-revalidate" : "public, max-age=31536000, immutable",
    };

    // Aplicar headers de seguridad a la respuesta
    Object.entries(securityHeaders).forEach(([key, value]) => {
        response.headers.set(key, value);
    });

    return response;
}

export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
};
