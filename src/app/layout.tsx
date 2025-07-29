import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
    title: "Francisco D'Alessandro - Portfolio",
    description: "Portfolio personal de Francisco D'Alessandro, Desarrollador Full Stack especializado en React, Next.js, TypeScript y Node.js. Proyectos, experiencia y contacto.",
    keywords: "Francisco D'Alessandro, Full Stack Developer, React, Next.js, TypeScript, Node.js, Portfolio, Web Development",
    authors: [{ name: "Francisco D'Alessandro" }],
    openGraph: {
        title: "Francisco D'Alessandro - Portfolio",
        description: "Portfolio personal de Francisco D'Alessandro, Desarrollador Full Stack",
        type: "website",
        locale: "es_ES",
    },
    twitter: {
        card: "summary_large_image",
        title: "Francisco D'Alessandro - Portfolio",
        description: "Portfolio personal de Francisco D'Alessandro, Desarrollador Full Stack",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>
                <LanguageProvider>{children}</LanguageProvider>
            </body>
        </html>
    );
}
