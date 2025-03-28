import React from "react";
import { IconBaseProps } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as LuIcons from "react-icons/lu";
import { cn } from "@/lib/utils";

interface IconProps extends IconBaseProps {
  name: string;
  prefix?: "fa" | "si" | "lu";
  className?: string;
}

// Map common social media names to their correct icon names
const socialIconMap: Record<string, string> = {
  // Social media icons
  "Email": "Envelope",
  "Linkedin": "Linkedin",
  "Github": "Github",
  "Twitter": "Twitter",
  "Facebook": "Facebook",
  "Instagram": "Instagram",
  "Youtube": "Youtube",
  
  // General icons
  "ExternalLinkAlt": "ExternalLinkAlt",
  "Envelope": "Envelope",
  "Phone": "Phone",
  "MapMarkerAlt": "MapMarkerAlt",
};

const Icon = ({ name, prefix = "fa", className, ...props }: IconProps) => {
  let IconComponent;
  
  // Check if we have a mapping for this icon name
  const mappedName = socialIconMap[name] || name;

  if (prefix === "fa") {
    IconComponent = FaIcons[`Fa${mappedName}` as keyof typeof FaIcons];
  } else if (prefix === "si") {
    IconComponent = SiIcons[`Si${mappedName}` as keyof typeof SiIcons];
  } else if (prefix === "lu") {
    IconComponent = LuIcons[`Lu${mappedName}` as keyof typeof LuIcons];
  }

  if (!IconComponent) {
    console.warn(`Icon not found: ${name} (mapped to ${mappedName})`);
    return <span className="text-red-500">Icon not found: {name}</span>;
  }

  return <IconComponent className={cn("", className)} {...props} />;
};

export default Icon;
