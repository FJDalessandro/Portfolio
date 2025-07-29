import React from "react";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            company: "SIPMA",
            position: "FullStack Developer",
            period: "Julio 2025 - Presente",
            description:
                "Desarrollo full stack en una empresa innovadora. Me uní a un equipo talentoso para enfrentar nuevos desafíos y contribuir con lo mejor de mí a cada proyecto.",
            technologies: ["HTML5", "CSS", "JavaScript", "React", "Node.js", "TypeScript"],
            achievements: ["Integración exitosa al equipo de desarrollo", "Contribución activa en proyectos empresariales", "Desarrollo de soluciones full stack"],
        },
        {
            id: 2,
            company: "Henry",
            position: "Teaching Assistant",
            period: "Abril 2025 - Mayo 2025",
            description: "Coordiné un grupo de estudiantes para integrarlos al equipo de estudio, asistí en la resolución de ejercicios y promoví la colaboración grupal.",
            technologies: ["React.js", "JavaScript", "Node.js", "Soft Skills", "Mentoring"],
            achievements: ["Coordinación exitosa de grupos de estudiantes", "Asistencia en resolución de ejercicios", "Propuesta de ideas para mejorar procesos del Bootcamp"],
        },
        {
            id: 3,
            company: "Formación Intensiva",
            position: "Estudiante Full Stack Developer",
            period: "Enero 2025 - Mayo 2025",
            description: "Dedicación de tiempo completo al estudio de la carrera Full-Stack Developer en Henry, adquiriendo conocimientos sólidos en tecnologías modernas.",
            technologies: ["JavaScript", "Next.js", "TailwindCSS", "Node.js", "MongoDB", "Git", "GitHub", "React", "TypeScript", "TypeORM", "PostgreSQL"],
            achievements: [
                "Completé exitosamente el bootcamp de 14 semanas",
                "Desarrollé proyectos integradores completos",
                "Adquirí experiencia práctica en tecnologías modernas",
            ],
        },
    ];

    return (
        <section id="experience" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Experiencia Laboral</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">Mi trayectoria profesional y las empresas donde he contribuido con mis habilidades y conocimientos.</p>
                </div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div key={experience.id} className="relative">
                            {/* Línea de tiempo */}
                            {index < experiences.length - 1 && <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-cyan-400"></div>}

                            <div className="flex items-start space-x-6">
                                {/* Círculo de la línea de tiempo */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                                clipRule="evenodd"
                                            />
                                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Contenido de la experiencia */}
                                <div className="flex-1 bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
                                            <p className="text-lg font-medium text-cyan-400">{experience.company}</p>
                                        </div>
                                        <span className="text-sm font-medium text-gray-300 bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0">{experience.period}</span>
                                    </div>

                                    <p className="text-gray-300 mb-4">{experience.description}</p>

                                    {/* Tecnologías */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {experience.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs rounded-full font-medium border border-gray-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Logros */}
                                    <div>
                                        <h4 className="font-semibold text-white mb-2">Logros principales:</h4>
                                        <ul className="space-y-1">
                                            {experience.achievements.map((achievement, achievementIndex) => (
                                                <li key={achievementIndex} className="flex items-start">
                                                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span className="text-sm text-gray-300">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón para descargar CV */}
                <div className="text-center mt-12">
                    <a
                        href="/CV_Francisco_DAlessandr.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 inline-block"
                    >
                        Descargar CV Completo
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
