import type { Project } from "../../types/Project";

// Images are stored in Cloudinary under folder: portfolio-frontend/
// The cloudinaryLoader in lib/cloudinary.ts handles the full URL construction.
// Just use the filename (with leading slash) as the src.
export const projects: Project[] = [
  {
    id: 1,
    title: "Student Management System",
    slug: "student-management-system",
    description: "Full CRUD application for managing students.",
    detailedDescription:
      "A comprehensive student management system that allows administrators to perform full CRUD operations on student records, view detailed reports, and manage academic data efficiently.",
    technologies: ["React", "Spring Boot", "MySQL"],
    features: [
      "Full CRUD operations for student records",
      "Secure authentication and role-based access",
      "Interactive data reporting and dashboards",
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "/Projectimg.png",
  },
  {
    id: 2,
    title: "Employee Management System",
    slug: "employee-management-system",
    description: "Role based management system for enterprise.",
    detailedDescription:
      "An enterprise-grade employee management system with role-based access control. Enables HR and administrators to manage employee details, track attendance, and process payroll.",
    technologies: ["Next.js", "Spring Boot"],
    features: [
      "Role-based access control (RBAC)",
      "Employee directory and detailed profiles",
      "Attendance and leave management",
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "/projectimge.png",
  },
  {
    id: 3,
    title: "Activeline – ISP Management System",
    slug: "activeline-isp-management",
    description:
      "Full-stack ISP management system with admin panel and user app supporting 200+ subscribers.",
    detailedDescription:
      "Architected a full-stack ISP management system with admin panel and user app supporting 200+ subscribers, covering billing, plan management, and data usage tracking. Integrated Razorpay for processing monthly payments and Firebase FCM for real-time notifications. Implemented secure JWT authentication and optimized pagination to reduce data load time by 45%.",
    technologies: ["MERN Stack", "Razorpay", "Firebase FCM", "Docker", "Render"],
    features: [
      "Admin panel and user app supporting 200+ subscribers",
      "Billing, plan management, and data usage tracking",
      "Razorpay integration for 300+ monthly payments",
      "Real-time push notifications via Firebase FCM",
      "JWT authentication and optimized pagination (45% faster load times)",
      "Containerized deployment via Docker on Render",
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "/Projectimg.png",
  },
  {
    id: 4,
    title: "JSTcliq – Service & Product Platform",
    slug: "jstcliq-service-product",
    description:
      "Full-stack marketplace for 500+ users with authentication and order management.",
    detailedDescription:
      "Developed a full-stack marketplace for 500+ users with authentication, order management, and profile features, significantly increasing session time. Designed a fully responsive UI across 10+ product and service category pages, achieving a consistent cross-device experience. Built 20+ robust REST APIs with search, filtering, and pagination.",
    technologies: ["React.js", "Node.js", "MongoDB", "Vercel", "CI/CD"],
    features: [
      "Marketplace for 500+ users with order management and profiles",
      "Fully responsive UI across 10+ product and service category pages",
      "20+ REST APIs with search, filtering, and pagination",
      "Deployed with CI/CD pipeline on Vercel and Render",
      "Increased average session time by 30%",
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "/projectimge.png",
  },
];