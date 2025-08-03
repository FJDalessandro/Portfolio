import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Configuración de idiomas soportados
export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

// Configuración por defecto
export const defaultLocale: Locale = "es";

export default getRequestConfig(async ({ locale }) => {
    // Validar que el locale sea soportado
    if (!locale || !locales.includes(locale as Locale)) notFound();

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
