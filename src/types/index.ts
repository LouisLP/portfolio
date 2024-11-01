export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level: 1 | 2 | 3 | 4 | 5; // 1 = beginner, 5 = expert
  icon?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
}
