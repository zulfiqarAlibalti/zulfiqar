import React from "react";
import { motion } from "framer-motion";
import { experience } from "@/constants";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">My professional journey</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative space-y-8">
            {/* Timeline Connector */}
            <div className="absolute top-6 bottom-0 left-4 sm:left-5 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            {experience.map((job, index) => (
              <TimelineItem 
                key={index}
                role={job.role}
                company={job.company}
                date={job.date}
                desc={job.desc}
                index={index}
                icon={getIconForRole(job.role)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  role: string;
  company: string;
  date: string;
  desc: string;
  icon: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ role, company, date, desc, icon, index }) => {
  return (
    <motion.div 
      className="relative pl-10 sm:pl-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute left-0 top-1 sm:top-0 w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary z-10">
        {icon === "chart-line" && (
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18"></path>
            <path d="M18 3l-8 14-4-4"></path>
          </svg>
        )}
        {icon === "microscope" && (
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18h8"></path>
            <path d="M3 22h18"></path>
            <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
            <path d="M9 14h.01"></path>
          </svg>
        )}
        {icon === "robot" && (
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="12" rx="2"></rect>
            <path d="M9 8V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v3"></path>
            <path d="M8 12h0"></path>
            <path d="M16 12h0"></path>
            <path d="M8 16h8"></path>
          </svg>
        )}
        {icon === "graduation-cap" && (
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
          </svg>
        )}
        {icon === "briefcase" && (
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
        )}
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{role}</h3>
          <span className="mt-2 sm:mt-0 px-3 py-1 text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary rounded-full">
            {date}
          </span>
        </div>
        <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">{company}</h4>
        <p className="text-gray-600 dark:text-gray-400">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

function getIconForRole(role: string): string {
  if (role.includes("Data Scientist")) return "chart-line";
  if (role.includes("Research")) return "microscope";
  if (role.includes("Engineer")) return "robot";
  if (role.includes("Intern")) return "graduation-cap";
  return "briefcase";
}

export default Experience;
