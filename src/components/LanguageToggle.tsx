"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors border border-gray-600 rounded-lg hover:border-cyan-400 bg-gray-800/50 backdrop-blur-sm"
            title={language === "es" ? "Switch to English" : "Cambiar a Español"}
        >
            {language === "es" ? "EN" : "ES"}
        </button>
    );
};

export default LanguageToggle;
