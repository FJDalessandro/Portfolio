"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer">Francisco D&apos;Alessandro</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button
                                onClick={() => scrollToSection("about")}
                                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {t.nav.about}
                            </button>
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {t.nav.projects}
                            </button>
                            <button
                                onClick={() => scrollToSection("experience")}
                                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {t.nav.experience}
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {t.nav.contact}
                            </button>
                        </div>
                    </div>

                    {/* Language Toggle */}
                    <div className="hidden md:block">
                        <LanguageToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <LanguageToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700">
                        <button
                            onClick={() => scrollToSection("about")}
                            className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                            {t.nav.about}
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                            {t.nav.projects}
                        </button>
                        <button
                            onClick={() => scrollToSection("experience")}
                            className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                            {t.nav.experience}
                        </button>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                            {t.nav.contact}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
