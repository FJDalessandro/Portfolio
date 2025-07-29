"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const AboutMe = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const scrollToProjects = () => {
        const element = document.getElementById("projects");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const skills = [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Nest.js",
        "MongoDB",
        "PostgreSQL",
        "Express",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Git",
        "GitHub",
        "Vercel",
        "Docker",
        "Stripe",
        "Auth0",
        "Socket.io",
    ];

    return (
        <section id="about" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Imagen */}
                    <div className="relative">
                        <div className="relative w-80 h-80 mx-auto">
                            {/* Borde animado */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse opacity-75"></div>

                            {/* Imagen */}
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-900">
                                <Image src="/Imagen de WhatsApp 2024-11-14 a las 09.27.01_d4eb0039.jpg" alt="Francisco D'Alessandro" fill className="object-cover" priority />
                                {/* Overlay sutil */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                            </div>
                        </div>

                        {/* Elementos decorativos */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-60 animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
                    </div>

                    {/* Contenido */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-4">{t.about.title}</h1>
                            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">{t.about.subtitle}</h2>
                            <p className="text-lg text-gray-300 leading-relaxed">{t.about.description}</p>
                        </div>

                        {/* Habilidades */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">{t.about.skills}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm font-medium rounded-full border border-gray-700 hover:border-cyan-400 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToProjects}
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
                            >
                                {t.about.viewProjects}
                            </button>
                            <a
                                href="/CV_Francisco_DAlessandr.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 text-center"
                            >
                                {t.about.downloadCV}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
