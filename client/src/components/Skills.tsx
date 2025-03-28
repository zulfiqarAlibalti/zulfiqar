import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { motion, useInView } from "framer-motion";
import { skillsSection, SkillBars } from "@/constants";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{skillsSection.title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">{skillsSection.subTitle}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsSection.data.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
        
        {/* Skill Bars */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-10">Core Competencies</h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {SkillBars.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: typeof skillsSection.data[0];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg dark:shadow-gray-900/30 p-8 h-full">
        <CardContent className="p-0">
          <div className="flex items-center justify-center h-20 w-20 rounded-lg bg-primary/10 dark:bg-primary/30 text-primary mb-6 mx-auto">
            {skill.title.includes("Data Science") ? (
              <Icon name="Brain" className="text-3xl" />
            ) : skill.title.includes("Full Stack") ? (
              <Icon name="Code" className="text-3xl" />
            ) : (
              <Icon name="Cloud" className="text-3xl" />
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">{skill.title}</h3>
          <ul className="space-y-3 mb-6">
            {skill.skills.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-primary mr-2">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {skill.softwareSkills.map((software, i) => (
              <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                {software.skillName}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface SkillBarProps {
  skill: (typeof SkillBars)[0];
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  const [progress, setProgress] = React.useState(0);
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(parseInt(skill.progressPercentage));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.progressPercentage]);

  return (
    <motion.div 
      ref={skillRef}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-base font-medium text-gray-800 dark:text-gray-200">{skill.Stack}</h4>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.progressPercentage}%</span>
      </div>
      <Progress value={progress} className="h-2.5 bg-gray-200 dark:bg-gray-700" indicatorClassName="bg-primary dark:bg-primary" />
    </motion.div>
  );
};

export default Skills;
