import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { publications } from "@/constants";

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-blue-50/50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Publications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My research contributions</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <PublicationCard 
                key={index}
                title={publication.title}
                authors={publication.authors}
                journal={publication.journal}
                year={publication.year}
                abstract={publication.abstract}
                link={publication.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface PublicationCardProps {
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
  link: string;
  index: number;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ title, authors, journal, year, abstract, link, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800/90 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg dark:shadow-gray-700/20 border border-gray-100 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          <span className="font-medium">{authors}</span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic">
          {journal} ({year})
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {abstract}
        </p>
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            size="sm"
            asChild
            className="text-primary hover:text-primary hover:bg-primary/10 dark:text-blue-400 dark:hover:text-blue-300 border-primary/20 dark:border-blue-800/50 dark:hover:border-blue-700"
          >
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
              View Publication
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="ml-2 h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Publications;