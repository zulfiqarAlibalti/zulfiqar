import React from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { socialLinks } from "@/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Zulfiqar Ali
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Data Scientist | Machine Learning Engineer | Full Stack Developer
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href={socialLinks.email} 
              className="text-gray-400 hover:text-white transition-colors" 
              aria-label="Email"
            >
              <Icon name="Envelope" />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors" 
              aria-label="LinkedIn"
            >
              <Icon name="Linkedin" />
            </a>
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors" 
              aria-label="GitHub"
            >
              <Icon name="Github" />
            </a>
          </motion.div>
          
          <motion.div 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>&copy; {new Date().getFullYear()} Zulfiqar Ali. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
