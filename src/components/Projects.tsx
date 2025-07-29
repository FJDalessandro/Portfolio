"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const projects = [
        {
            id: 1,
            title: t.projects.smartQR.title,
            description: t.projects.smartQR.description,
            image: "/logo2.png",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Auth0", "Stripe", "Socket.io", "MapBox"],
            github: "https://github.com/FJDalessandro/SmartQrProject",
            demo: "https://www.smart-qr.tech/",
            responsibilities: t.projects.smartQR.responsibilities,
            methodology: t.projects.smartQR.methodology,
            techStack: t.projects.smartQR.technologies,
        },
        {
            id: 2,
            title: t.projects.techStore.title,
            description: t.projects.techStore.description,
            image: "/Captura de pantalla 2025-07-29 141238.png",
            technologies: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize", "Stripe", "JWT"],
            github: "https://github.com/FJDalessandro/E-commerce",
            demo: "https://e-commerce-ochre-two.vercel.app/",
        },
        {
            id: 3,
            title: t.projects.portfolio.title,
            description: t.projects.portfolio.description,
            image: "/Captura de pantalla 2025-07-29 172255.png",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Formik", "EmailJS"],
            github: "https://github.com/FJDalessandro/Portfolio",
            demo: "https://portfolio-ruby-one-57.vercel.app/",
        },
    ];

    return (
        <section id="projects" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">{t.projects.title}</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t.projects.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
                        >
                            {/* Imagen del proyecto */}
                            <div className="relative h-48 overflow-hidden">
                                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                                {/* Tecnologías */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs font-medium rounded border border-gray-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Enlaces */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition-colors text-center"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-cyan-600 text-white text-sm font-medium rounded-lg hover:bg-cyan-700 transition-colors text-center"
                                    >
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
