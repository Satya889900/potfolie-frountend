import type { Project } from "../../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Activeline – ISP Management System",
    slug: "activeline-isp",
    description: "Architected a full-stack ISP management system with admin panel and user app supporting 200+ subscribers. Features billing, plan management, and data usage tracking.",
    technologies: ["MERN Stack", "Razorpay", "Firebase FCM", "Docker", "Render"],
    githubUrl: "",
    liveUrl: "",
    image: "/images/projects/activeline.jpg",
  },
  {
    id: 2,
    title: "JSTCliq – Service & Product Platform",
    slug: "jstcliq-platform",
    description: "Developed a full-stack marketplace for 500+ users with authentication, order management, and profile features. Built 20+ REST APIs with search, filtering, and pagination.",
    technologies: ["React.js", "Node.js", "MongoDB", "Vercel"],
    githubUrl: "",
    liveUrl: "https://live-link-placeholder.com", // Adjust if real live URL is provided
    image: "/images/projects/jstcliq.jpg",
  },
];
