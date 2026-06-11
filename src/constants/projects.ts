import type { Project } from "../../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "ActiveLine – ISP Management System",
    slug: "activeline-isp",
    description: "A full featured ISP management system with admin panel and user app. Supports billing, invoicing, analytics, and real-time usage monitoring.",
    technologies: ["Let.js", "Next.js", "PostgreSQL", "Scss/ui", "Docker"],
    githubUrl: "",
    liveUrl: "",
    image: "/projectimge.png",
  },
  {
    id: 2,
    title: "JSTCliq – Service & Product Platform",
    slug: "jstcliq-platform",
    description: "Marketplace platform for services and products with authentication, order management, and admin dashboard. Built for 1000+ B2B2C.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Vercel"],
    githubUrl: "",
    liveUrl: "",
    image: "/Projectimg.png",
  },
];
