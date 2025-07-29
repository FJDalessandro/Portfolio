"use client";

import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const Body = () => {
    return (
        <div className="min-h-screen">
            <AboutMe />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
};

export default Body;
