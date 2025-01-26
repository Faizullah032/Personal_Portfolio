
"use client";
import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const projects = [
    { title: "Project 1", description: "A brief description of the project.", link: "#" },
    { title: "Project 2", description: "Another project description.", link: "#" },
    { title: "Project 3", description: "Yet another project description.", link: "#" },
  ];

  return (
    <div className={`${darkMode ? "bg-primary text-white" : "bg-white text-black"} min-h-screen`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
