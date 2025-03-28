import React from "react";
import { motion } from "framer-motion";
import { educationInfo } from "@/constants";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">My academic background</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationInfo.map((education, index) => (
              <EducationCard 
                key={index}
                school={education.schoolName}
                degree={education.subHeader}
                duration={education.duration}
                description={education.desc}
                grade={education.grade}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface EducationCardProps {
  school: string;
  degree: string;
  duration: string;
  description: string;
  grade: string;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ school, degree, duration, description, grade, index }) => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
            <i className="fas fa-university text-xl"></i>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{school}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
          </div>
        </div>
        <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">{degree}</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          {description}
        </p>
        <div className="inline-block px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
          {grade}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
