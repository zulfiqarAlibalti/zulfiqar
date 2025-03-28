import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSelector from "@/components/LanguageSelector";

const Home: React.FC = () => {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      e.preventDefault();
      
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute('href')?.substring(1);
      
      if (!targetId) return;
      
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };
    
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });
    
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen light-bg-pattern dark:dark-bg-pattern dark:dark-glow transition-colors duration-300">
      <Navbar />
      <div className="animated-gradient">
        <Hero />
      </div>
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Publications />
      <Testimonials />
      <Contact />
      <Footer />
      <LanguageSelector />
    </div>
  );
};

export default Home;
