export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Core';
  icon: string; // Lucide icon name
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend';
  liveUrl?: string;
  githubUrl?: string;
  imageColor: string; // Tailwind gradient/color class for the card placeholder
  details: string[];
}

export interface Experience {
  role: string;
  company: string;
  type: string; // 'Remote' | 'On-site' | 'Hybrid'
  duration: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
}

export interface Certification {
  name: string;
  issuer: string;
  duration: string;
}
