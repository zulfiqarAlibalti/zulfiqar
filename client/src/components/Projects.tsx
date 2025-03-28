import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Showcasing my portfolio of work</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              name={project.name}
              description={project.desc}
              link={project.link}
              tags={getTagsForProject(project.name)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
  tags: string[];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link, tags, index }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 dark:shadow-gray-900/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[4rem]">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span key={i} className={`px-3 py-1 text-xs font-medium ${getTagColor(tag)} rounded-full`}>
                {tag}
              </span>
            ))}
          </div>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 dark:text-primary-light dark:hover:text-primary-light/80 flex items-center transition-colors"
          >
            <span className="mr-1">View Project</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
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
        </div>
      </div>
    </motion.div>
  );
};

function getTagsForProject(name: string): string[] {
  if (name.includes("Depression")) return ["Deep Learning", "Healthcare"];
  if (name.includes("Form Builder")) return ["Next.js", "Generative AI"];
  if (name.includes("Generative AI SaaS")) return ["SaaS", "Diffusion Models"];
  if (name.includes("Violence Analytics")) return ["NLP", "Data Analytics"];
  return ["Technology"];
}

function getTagColor(tag: string): string {
  switch (tag) {
    case "Deep Learning":
      return "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light";
    case "Healthcare":
      return "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300";
    case "Next.js":
      return "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300";
    case "Generative AI":
      return "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300";
    case "SaaS":
      return "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300";
    case "Diffusion Models":
      return "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300";
    case "NLP":
      return "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300";
    case "Data Analytics":
      return "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300";
    default:
      return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
  }
}

export default Projects;
