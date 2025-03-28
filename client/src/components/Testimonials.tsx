import React from "react";
import { motion } from "framer-motion";
import { feedbacks } from "@/constants";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Testimonials</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">What people say about my work</p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {feedbacks.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                feedback={testimonial.feedback}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  feedback: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, feedback, index }) => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-center mb-4">
        <div className="text-primary/70 dark:text-primary/50">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 opacity-30" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M4 10.3c.7-.6 1.7-.9 2.7-.9 1.1 0 2 .4 2.7 1.1.7.7 1.1 1.6 1.1 2.7 0 1.1-.4 2-1.1 2.7-.7.7-1.6 1.1-2.7 1.1-1.5 0-2.7-.6-3.7-1.6s-1.5-2.5-1.5-4.2.6-3.3 1.7-4.7C4.4 5 6.1 3.9 8 3.4l.5 1.1C7 5 5.9 5.7 5.1 6.8s-1.1 2.2-1.1 3.5zm11 0c.7-.6 1.7-.9 2.7-.9 1.1 0 2 .4 2.7 1.1.7.7 1.1 1.6 1.1 2.7 0 1.1-.4 2-1.1 2.7-.7.7-1.6 1.1-2.7 1.1-1.5 0-2.7-.6-3.7-1.6s-1.5-2.5-1.5-4.2.6-3.3 1.7-4.7c1.1-1.4 2.9-2.5 4.8-3l.5 1.1c-1.6.5-2.7 1.2-3.5 2.3s-1 2.2-1 3.5z" />
          </svg>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-6 italic">
        "{feedback}"
      </p>
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
          {getIconForRole(role)}
        </div>
        <h4 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </motion.div>
  );
};

function getIconForRole(role: string) {
  if (role.includes("Professor")) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19.5 14.5v-2.5a2 2 0 00-2-2h-4l-3-3v-5.5M6 18L3 21l-3-3m6-6v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2c0 2.2-1.8 4-4 4s-4-1.8-4-4z" 
        />
      </svg>
    );
  } else if (role.includes("CTO") || role.includes("CEO")) {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
        />
      </svg>
    );
  } else {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
        />
      </svg>
    );
  }
}

export default Testimonials;
