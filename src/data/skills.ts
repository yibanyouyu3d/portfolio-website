export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: number; // 1-5
}

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "React", category: "frontend", level: 5 },
  { id: 2, name: "TypeScript", category: "frontend", level: 5 },
  { id: 3, name: "JavaScript", category: "frontend", level: 5 },
  { id: 4, name: "HTML/CSS", category: "frontend", level: 5 },
  { id: 5, name: "Tailwind CSS", category: "frontend", level: 4 },
  { id: 6, name: "Next.js", category: "frontend", level: 4 },
  { id: 7, name: "Vue.js", category: "frontend", level: 3 },
  
  // Backend
  { id: 8, name: "Node.js", category: "backend", level: 4 },
  { id: 9, name: "Express.js", category: "backend", level: 4 },
  { id: 10, name: "MongoDB", category: "backend", level: 3 },
  { id: 11, name: "PostgreSQL", category: "backend", level: 3 },
  { id: 12, name: "RESTful API", category: "backend", level: 4 },
  
  // Tools
  { id: 13, name: "Git", category: "tools", level: 5 },
  { id: 14, name: "Docker", category: "tools", level: 3 },
  { id: 15, name: "VS Code", category: "tools", level: 5 },
  { id: 16, name: "Figma", category: "tools", level: 4 },
  
  // Other
  { id: 17, name: "Agile/Scrum", category: "other", level: 4 },
  { id: 18, name: "UI/UX Design", category: "other", level: 3 }
];

export const skillCategories = {
  frontend: "前端技术",
  backend: "后端技术", 
  tools: "开发工具",
  other: "其他技能"
};