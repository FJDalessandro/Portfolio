"use client";

import React from "react";
import Image from "next/image";

const AboutMe = () => {
    return (
        <section id="home" className="pt-20 pb-16 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Columna de la foto */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            {/* Marco decorativo exterior */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full p-1 animate-pulse"></div>

                            {/* Foto de perfil */}
                            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gray-900 bg-gray-900">
                                <Image
                                    src="/Imagen de WhatsApp 2024-11-14 a las 09.27.01_d4eb0039.jpg"
                                    alt="Francisco José D'Alessandro - Desarrollador Full Stack"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Overlay sutil */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                            </div>

                            {/* Elementos decorativos más sutiles */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>

                            {/* Líneas decorativas */}
                            <div className="absolute -top-8 -right-8 w-16 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
                            <div className="absolute -bottom-8 -left-8 w-16 h-0.5 bg-gradient-to-l from-transparent to-purple-400"></div>
                        </div>
                    </div>

                    {/* Columna de la descripción */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                            <span className="font-normal text-gray-200">FRANCISCO</span> <span className="font-bold text-cyan-400">D&apos;ALESSANDRO</span>
                        </h1>

                        <h2 className="text-2xl lg:text-3xl font-light text-cyan-300 mb-8">Desarrollador Web Full Stack</h2>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Soy un desarrollador web full stack con formación intensiva y enfoque en la resolución práctica de problemas. Me destaco por mi capacidad de aprendizaje
                            ágil, pensamiento lógico y autonomía para desarrollar tanto en Frontend como en Backend, utilizando tecnologías modernas como React, Next.js,
                            TypeScript, Node.js, Nest.js y MongoDB.
                        </p>

                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Complemento mis habilidades técnicas con una actitud proactiva, buena comunicación y compromiso en el trabajo en equipo, reforzada por mi experiencia
                            como Teacher Assistant guiando a nuevos estudiantes. Mi diferencial es la experiencia real en desarrollo de proyectos completos, testing automatizado,
                            arquitectura de software y despliegue en producción, con una mentalidad enfocada en la mejora continua.
                        </p>

                        {/* Habilidades destacadas */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                            <span className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700">React</span>
                            <span className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700">Next.js</span>
                            <span className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700">TypeScript</span>
                            <span className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700">Node.js</span>
                            <span className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700">Nest.js</span>
                            <span className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700">MongoDB</span>
                            <span className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700">Testing</span>
                            <span className="px-4 py-2 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700">Docker</span>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 inline-block"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("projects")?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                            >
                                Ver Proyectos
                            </a>
                            <a
                                href="/CV_Francisco_DAlessandr.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 inline-block"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
