import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/language-provider";

const getNavLinks = (t: (key: string) => string) => [
  { href: "#about", label: t("nav.about") },
  { href: "#skills", label: t("nav.skills") },
  { href: "#experience", label: t("nav.experience") },
  { href: "#education", label: t("nav.education") },
  { href: "#projects", label: t("nav.projects") },
  { href: "#publications", label: t("nav.publications") },
  { href: "#testimonials", label: t("nav.testimonials") },
  { href: "#contact", label: t("nav.contact") },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  // Create navLinks with translation
  const navLinks = React.useMemo(() => getNavLinks(t), [t]);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 10);
      
      // Handle active section
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="text-primary dark:text-primary">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </a>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center">
            <div className="flex space-x-6">
              {navLinks.map((link, index) => (
                <motion.a 
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors px-2 py-1 ${
                    activeSection === link.href.substring(1) ? "text-primary dark:text-primary font-semibold" : ""
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </nav>
          
          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 transition-all duration-300 ${
        isMenuOpen ? "block" : "hidden"
      }`}>
        <div className="container mx-auto px-4 pt-2 pb-3 space-y-1">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800 transition-colors ${
                activeSection === link.href.substring(1) ? "text-primary dark:text-primary" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
