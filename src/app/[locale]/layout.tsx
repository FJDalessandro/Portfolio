import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, defaultLocale, type Locale } from "../../i18n";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://francisco-dalessandro.vercel.app"),
    title: "Francisco D'Alessandro - Portfolio",
    description: "Desarrollador Full Stack especializado en React, Node.js y tecnologías modernas",
    keywords: ["desarrollador", "full stack", "react", "node.js", "typescript", "portfolio"],
    authors: [{ name: "Francisco D'Alessandro" }],
    creator: "Francisco D'Alessandro",
    publisher: "Francisco D'Alessandro",
    robots: "index, follow",
    alternates: {
        languages: {
            es: "/es",
            en: "/en",
        },
    },
    openGraph: {
        type: "website",
        locale: "es_ES",
        url: "https://francisco-dalessandro.vercel.app",
        title: "Francisco D'Alessandro - Portfolio",
        description: "Desarrollador Full Stack especializado en React, Node.js y tecnologías modernas",
        siteName: "Francisco D'Alessandro Portfolio",
        images: [
            {
                url: "/logo2.png",
                width: 1200,
                height: 630,
                alt: "Francisco D'Alessandro Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Francisco D'Alessandro - Portfolio",
        description: "Desarrollador Full Stack especializado en React, Node.js y tecnologías modernas",
        images: ["/logo2.png"],
    },
    manifest: "/manifest.json",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0ea5e9",
};

interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const { locale } = await params;

    // Validar que el locale sea soportado
    if (!locale || !locales.includes(locale as Locale)) {
        notFound();
    }

    // Obtener los mensajes para el locale
    let messages;
    try {
        messages = await getMessages({ locale });
    } catch {
        // Intentar cargar mensajes por defecto
        try {
            messages = await getMessages({ locale: defaultLocale });
        } catch {
            notFound();
        }
    }

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
                        <Navbar />
                        <main>{children}</main>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

// Generar rutas estáticas para todos los locales
export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}
