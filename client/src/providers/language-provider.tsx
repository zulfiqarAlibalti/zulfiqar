import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

type LanguageContextType = {
  currentLanguage: LanguageOption;
  setLanguage: (language: LanguageOption) => void;
  t: (key: string) => string;
  languages: LanguageOption[];
};

const defaultLanguage = languages[0];

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
  languages,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

// Simple translation dictionary
const translations: Record<string, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.projects": "Projects",
    "nav.publications": "Publications",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "hero.title": "Hi, I'm Zulfiqar",
    "hero.description": "I am a passionate Data Scientist with expertise in multimodal processing, deep learning, and statistical modeling. My work focuses on transformative applications in Healthcare, Autonomous Vehicles, and the Media Industry. I thrive on innovation, curiosity, and solving real-world problems with cutting-edge technology.",
    "hero.download": "Download Resume",
    "hero.contact": "Contact Me",
    // Add more translations as needed
  },
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.projects": "Proyectos",
    "nav.publications": "Publicaciones",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "hero.title": "Hola, soy Zulfiqar",
    "hero.description": "Soy un científico de datos apasionado con experiencia en procesamiento multimodal, aprendizaje profundo y modelado estadístico. Mi trabajo se centra en aplicaciones transformadoras en Salud, Vehículos Autónomos y la Industria de Medios. Prospero en la innovación, la curiosidad y la resolución de problemas del mundo real con tecnología de vanguardia.",
    "hero.download": "Descargar CV",
    "hero.contact": "Contáctame",
    // Add more translations as needed
  },
  // Add basic translations for other languages
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.education": "Éducation",
    "nav.projects": "Projets",
    "nav.publications": "Publications",
    "nav.testimonials": "Témoignages",
    "nav.contact": "Contact",
    "hero.title": "Bonjour, je suis Zulfiqar",
    "hero.description": "Je suis un Data Scientist passionné avec une expertise en traitement multimodal, apprentissage profond et modélisation statistique.",
    "hero.download": "Télécharger CV",
    "hero.contact": "Me Contacter",
  },
};

// Fallback to English if the translation doesn't exist
const getTranslation = (key: string, langCode: string): string => {
  if (translations[langCode] && translations[langCode][key]) {
    return translations[langCode][key];
  }
  return translations.en[key] || key;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption>(() => {
    // Try to get saved language from localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      const lang = languages.find(l => l.code === savedLang);
      return lang || defaultLanguage;
    }
    
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    const detectedLang = languages.find(l => l.code === browserLang);
    return detectedLang || defaultLanguage;
  });

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', currentLanguage.code);
    
    // Set HTML lang attribute for accessibility
    document.documentElement.lang = currentLanguage.code;
    
    // Add RTL support for Arabic
    if (currentLanguage.code === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLanguage]);

  const t = (key: string): string => {
    return getTranslation(key, currentLanguage.code);
  };

  const setLanguage = (language: LanguageOption) => {
    setCurrentLanguage(language);
  };

  const value = {
    currentLanguage,
    setLanguage,
    t,
    languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}