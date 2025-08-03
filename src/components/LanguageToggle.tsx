"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { locales } from "../../src/i18n/request";

const LanguageToggle = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("common");

    const handleLanguageChange = (newLocale: string) => {
        // Obtener la ruta actual sin el locale
        const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

        // Navegar a la nueva ruta con el locale seleccionado
        router.push(`/${newLocale}${pathWithoutLocale}`);
    };

    return (
        <div className="relative inline-block text-left">
            <select
                value={locale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-3 py-2 appearance-none cursor-pointer transition-colors hover:bg-gray-700/80"
                aria-label={t("language")}
            >
                {locales.map((loc) => (
                    <option key={loc} value={loc} className="bg-gray-800 text-white">
                        {loc === "es" ? "🇪🇸 Español" : "🇺🇸 English"}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

export default LanguageToggle;
