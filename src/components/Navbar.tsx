"use client";

import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: "Inicio", href: "#home" },
        { name: "Proyectos", href: "#projects" },
        { name: "Experiencia", href: "#experience" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left side - Logo/Name */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("home")?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                        >
                            Francisco D&apos;Alessandro
                        </a>
                    </div>

                    {/* Center - Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.querySelector(item.href);
                                        if (element) {
                                            element.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start",
                                            });
                                        }
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Placeholder for balance */}
                    <div className="hidden md:block flex-shrink-0">
                        <div className="w-32"></div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 transition-colors"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-700">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMenuOpen(false);
                                const element = document.querySelector(item.href);
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
