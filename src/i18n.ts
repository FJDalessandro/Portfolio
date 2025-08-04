import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["es", "en"] as const;
export const defaultLocale = "es" as const;

export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
    if (!locale || !locales.includes(locale as Locale)) {
        try {
            const messages = (await import(`./messages/${defaultLocale}.json`)).default;
            return {
                locale: defaultLocale,
                messages,
            };
        } catch (error) {
            notFound();
        }
    }

    try {
        const messages = (await import(`./messages/${locale}.json`)).default;
        return {
            locale,
            messages,
        };
    } catch (error) {
        try {
            const messages = (await import(`./messages/${defaultLocale}.json`)).default;
            return {
                locale: defaultLocale,
                messages,
            };
        } catch (fallbackError) {
            notFound();
        }
    }
});
