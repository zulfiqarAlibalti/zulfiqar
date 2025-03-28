import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { socialLinks, greetings } from "@/constants";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/language-provider";

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              <span className="block">{t('hero.title')}</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                asChild
                size="lg"
                className="font-medium"
              >
                <a 
                  href={greetings.resumeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('hero.download')}
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="font-medium"
              >
                <a href="#contact">
                  {t('hero.contact')}
                </a>
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="flex flex-wrap gap-4">
                {Object.entries(socialLinks).map(([key, link]) => (
                  <a 
                    key={key}
                    href={link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    aria-label={key}
                  >
                    <Icon name={key.charAt(0).toUpperCase() + key.slice(1)} className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://avatars.githubusercontent.com/u/52883632?v=4" 
                alt="Zulfiqar Ali" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
