"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { locales, type Locale } from "../i18n";

const LanguageToggle = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("common");

    // Determinar el locale actual basándose en el pathname
    const getCurrentLocaleFromPath = (): Locale => {
        const pathLocale = pathname.split("/")[1];
        return locales.includes(pathLocale as Locale) ? (pathLocale as Locale) : "es";
    };

    const currentLocale = getCurrentLocaleFromPath();

    const handleLanguageChange = (newLocale: string) => {
        // Validar que el nuevo locale sea válido
        if (!newLocale || !locales.includes(newLocale as Locale)) {
            return;
        }

        // Si ya estamos en el mismo locale, no hacer nada
        if (newLocale === currentLocale) {
            return;
        }

        // Lógica simplificada: siempre ir a la ruta raíz del nuevo locale
        const newPath = `/${newLocale}`;

        // Usar router.push para navegación del lado del cliente
        try {
            router.push(newPath);
        } catch (error) {
            // Fallback a window.location si router falla
            window.location.href = newPath;
        }
    };

    return (
        <div className="flex items-center space-x-2">
            {/* Selector de idioma */}
            <div className="relative inline-block text-left">
                <select
                    value={currentLocale}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2 pr-8 appearance-none cursor-pointer transition-colors hover:bg-gray-700/80"
                    aria-label={t("language")}
                >
                    {locales.map((loc) => (
                        <option key={loc} value={loc} className="bg-gray-800 text-white">
                            {loc.toUpperCase()}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default LanguageToggle;
