import React from "react";
import Image from "next/image";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Smart-QR",
            description:
                "Aplicación web moderna y responsiva para optimizar la gestión de restaurantes: pedidos, menús digitales, mesas, personal y reportes. Incluye interfaz intuitiva con actualizaciones en tiempo real y chatbot con IA.",
            technologies: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Auth0", "Stripe", "Socket.io", "MapBox"],
            image: "/logo2.png",
            github: "https://github.com/FJDalessandro/SmartQrProject",
            live: "https://www.smart-qr.tech/",
        },
        {
            id: 2,
            title: "Tech Store",
            description:
                "Ecommerce completo inspirado en la tienda oficial de Apple. Permite registro, login, explorar productos iPhone, ver detalles y agregar al carrito. Proyecto integrador del bootcamp Full Stack Developer.",
            technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Formik", "HTML5"],
            image: "/Captura de pantalla 2025-07-29 141238.png",
            github: "https://github.com/FJDalessandro/E-commerce",
            live: "https://e-commerce-ochre-two.vercel.app/",
        },
        {
            id: 3,
            title: "Portfolio Personal",
            description:
                "Portfolio web moderno y responsive desarrollado con Next.js 15. Incluye secciones de presentación personal, proyectos, experiencia laboral y formulario de contacto con validación. Diseño modular y optimizado para SEO.",
            technologies: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Formik", "Yup", "Responsive Design"],
            image: "/Captura de pantalla 2025-07-29 172255.png",
            github: "https://github.com/FJDalessandro/portfolio",
            live: "#",
        },
    ];

    return (
        <section id="projects" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Mis Proyectos</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada uno representa diferentes habilidades y tecnologías.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-700"
                        >
                            {/* Imagen del proyecto */}
                            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center overflow-hidden">
                                {project.image === "/logo2.png" ||
                                project.image === "/Captura de pantalla 2025-07-29 141238.png" ||
                                project.image === "/Captura de pantalla 2025-07-29 172255.png" ? (
                                    <Image src={project.image} alt={`${project.title} - Captura de pantalla`} width={300} height={192} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-white text-center">
                                        <svg className="w-16 h-16 mx-auto mb-2 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <p className="text-sm">Imagen del Proyecto</p>
                                    </div>
                                )}
                            </div>

                            {/* Contenido del proyecto */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>

                                {/* Tecnologías */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="px-2 py-1 bg-gray-700 text-cyan-400 text-xs rounded-full font-medium border border-gray-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Botones */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        className="flex-1 px-4 py-2 bg-gray-700 text-white text-center rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm font-medium border border-gray-600"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={project.live}
                                        className="flex-1 px-4 py-2 bg-cyan-600 text-white text-center rounded-lg hover:bg-cyan-700 transition-colors duration-200 text-sm font-medium"
                                    >
                                        Ver Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón para ver más proyectos */}
                <div className="text-center mt-12">
                    <button className="px-8 py-3 bg-transparent text-white border border-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200">
                        Ver Todos los Proyectos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
