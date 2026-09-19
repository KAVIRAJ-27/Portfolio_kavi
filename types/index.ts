export type ProjectCategory = 
  | 'All'
  | 'AI'
  | 'Machine Learning'
  | 'Web'
  | 'Android'
  | 'IoT'
  | 'Education'
  | 'Data Science';

export type ProjectStatus = 'Completed' | 'In Development' | 'Prototype';

export interface Project {
  id: string;
  name: string;
  category: string;
  tags: ProjectCategory[];
  description: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  learnings: string;
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  isMajor?: boolean;
  accuracy?: string;
  hasInteractiveSimulator?: 'hydro' | 'location' | null;
}

export interface SkillItem {
  name: string;
  level: string; // e.g., 'Proficient', 'Familiar', 'Exploring'
  context: string;
  highlight?: boolean;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: SkillItem[];
}

export interface JourneyPhase {
  phase: number;
  title: string;
  period: string;
  summary: string;
  skillsUnlocked: string[];
  highlightProject?: string;
}

export interface IoTSensor {
  id: string;
  name: string;
  icon: string;
  type: string;
  purpose: string;
  telemetryMetrics: string;
  aiApplication: string;
  color: string;
}

export interface Achievement {
  title: string;
  category: string;
  description: string;
  date: string;
  featured?: boolean;
}
