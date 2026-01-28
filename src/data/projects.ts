export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "个人作品集网站",
    description: "使用React + TypeScript + Tailwind CSS开发的个人作品集网站，展示个人技能和项目经验。",
    image: "/project1.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.example.com"
  },
  {
    id: 2,
    title: "任务管理应用",
    description: "一个功能完整的任务管理应用，支持任务创建、编辑、删除和状态跟踪。",
    image: "/project2.jpg",
    technologies: ["React", "TypeScript", "Redux", "Firebase"],
    githubUrl: "https://github.com/username/task-manager"
  },
  {
    id: 3,
    title: "电商平台",
    description: "全栈电商平台，包含用户认证、商品展示、购物车和支付功能。",
    image: "/project3.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce.example.com"
  }
];