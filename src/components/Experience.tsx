"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Experience = () => {
    const t = useTranslations("experience");

    const experiences = [
        {
            id: 1,
            title: t("sipma.title"),
            period: t("sipma.period"),
            description: t("sipma.description"),
            technologies: t("sipma.technologies"),
            achievements: t("sipma.achievements"),
        },
        {
            id: 2,
            title: t("henry.title"),
            period: t("henry.period"),
            description: t("henry.description"),
            technologies: t("henry.technologies"),
            achievements: t("henry.achievements"),
        },
        {
            id: 3,
            title: t("bootcamp.title"),
            period: t("bootcamp.period"),
            description: t("bootcamp.description"),
            technologies: t("bootcamp.technologies"),
            achievements: t("bootcamp.achievements"),
        },
    ];

    return (
        <section id="experience" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">{t("title")}</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t("subtitle")}</p>
                </div>

                <div className="relative">
                    {/* Línea de tiempo */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cyan-400"></div>

                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <div key={experience.id} className="relative flex items-start">
                                {/* Círculo de la línea de tiempo */}
                                <div className="absolute left-6 w-4 h-4 bg-cyan-600 rounded-full border-4 border-gray-900 z-10"></div>

                                {/* Contenido */}
                                <div className="ml-16 flex-1">
                                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                            <h3 className="text-xl font-semibold text-cyan-400 mb-2 lg:mb-0">{experience.title}</h3>
                                            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">{experience.period}</span>
                                        </div>

                                        <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

                                        {/* Tecnologías */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-white mb-2">Tecnologías:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {experience.technologies.split(", ").map((tech, techIndex) => (
                                                    <span key={techIndex} className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs font-medium rounded border border-gray-600">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Logros */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-2">Logros:</h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">{experience.achievements}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Botón para descargar CV completo */}
                <div className="text-center mt-12">
                    <a
                        href="/CV_Francisco_DAlessandr.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
                    >
                        {t("downloadFullCV")}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
