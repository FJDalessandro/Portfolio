import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Francisco D'Alessandro - Portfolio",
    description: "Desarrollador Web Full Stack. Portfolio personal con proyectos, experiencia y contacto.",
    keywords: ["desarrollador", "full stack", "react", "next.js", "typescript", "portfolio"],
    authors: [{ name: "Francisco D'Alessandro" }],
    creator: "Francisco D'Alessandro",
    openGraph: {
        title: "Francisco D'Alessandro - Portfolio",
        description: "Desarrollador Web Full Stack. Portfolio personal con proyectos, experiencia y contacto.",
        type: "website",
        locale: "es_ES",
    },
    twitter: {
        card: "summary_large_image",
        title: "Francisco D'Alessandro - Portfolio",
        description: "Desarrollador Web Full Stack. Portfolio personal con proyectos, experiencia y contacto.",
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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
