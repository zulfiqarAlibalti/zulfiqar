import React, { useEffect, useState } from "react";
import { useTheme } from "@/providers/theme-provider";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-6 bg-gray-200 rounded-full"></div>;
  }

  const isDark = theme === "dark";

  return (
    <div 
      className="flex items-center justify-between w-14 h-7 rounded-full p-1 cursor-pointer relative bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      role="button"
      tabIndex={0}
      aria-label="Toggle theme"
    >
      {/* Sun Icon */}
      <div className={`text-yellow-500 transition-opacity ${isDark ? 'opacity-40' : 'opacity-100'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </div>
      
      {/* Moon Icon */}
      <div className={`text-indigo-300 transition-opacity ${isDark ? 'opacity-100' : 'opacity-40'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
      
      {/* Toggle Circle */}
      <motion.div 
        className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-md"
        initial={false}
        animate={{ 
          x: isDark ? 'calc(100% - 4px)' : '0%',
          backgroundColor: isDark ? '#fff' : '#fff'
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </div>
  );
};

export default ThemeToggle;
