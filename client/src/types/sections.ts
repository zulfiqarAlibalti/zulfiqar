export type GreetingsType = {
  name: string;
  title: string;
  description: string;
  resumeLink: string;
};

export type SocialLinksType = {
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
  facebook: string;
  instagram: string;
  youtube: string;
  [key: string]: string;
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  data: Array<{
    title: string;
    lottieAnimationFile: string;
    skills: React.ReactNode[];
    softwareSkills: Array<{
      skillName: string;
      iconifyTag: string;
    }>;
  }>;
};

export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
};

export type EducationType = {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  grade: string;
  descBullets?: string[];
};

export type ExperienceType = {
  role: string;
  company: string;
  companyLogo: string;
  date: string;
  desc: string;
  descBullets?: string[];
};

export type ProjectType = {
  name: string;
  desc: string;
  link: string;
  github?: string;
};

export type FeedbackType = {
  name: string;
  role: string;
  feedback: string;
};

export type PublicationType = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
  link: string;
};
