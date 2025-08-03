import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../../../i18n";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Francisco D'Alessandro - Full Stack Developer",
    description: "Portfolio personal de Francisco D'Alessandro, desarrollador Full Stack especializado en React, Node.js y Python.",
    keywords: ["desarrollador", "full stack", "react", "node.js", "python", "portfolio"],
    authors: [{ name: "Francisco D'Alessandro" }],
    creator: "Francisco D'Alessandro",
    openGraph: {
        title: "Francisco D'Alessandro - Full Stack Developer",
        description: "Portfolio personal de Francisco D'Alessandro, desarrollador Full Stack.",
        type: "website",
        locale: "es_ES",
        siteName: "Francisco D'Alessandro Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Francisco D'Alessandro - Full Stack Developer",
        description: "Portfolio personal de Francisco D'Alessandro, desarrollador Full Stack.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            "index": true,
            "follow": true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
    // Validar que el locale sea soportado
    if (!locales.includes(locale as any)) {
        notFound();
    }

    // Obtener los mensajes para el locale
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <div className="relative min-h-screen">
                        {/* Fondo global para toda la página */}
                        <div className="fixed inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
                            <div className="absolute inset-0 bg-[url('/desktop-bg.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
                        </div>

                        {/* Contenido */}
                        <div className="relative z-10">
                            <Navbar />
                            {children}
                        </div>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

// Generar rutas estáticas para todos los locales
export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
