import type { Project } from "../../types/Project";

// Images are stored in Cloudinary under folder: portfolio-frontend/
// The cloudinaryLoader in lib/cloudinary.ts handles the full URL construction.
// Just use the filename (with leading slash) as the src.
export const projects: Project[] = [
  {
    id: 1,
    title: "JSTcliq – Service & Product Platform",
    slug: "jstcliq-service-product",
    description: "Full-stack marketplace and service platform supporting 500+ users with product management, custom order statuses, and an AI chat assistant.",
    detailedDescription: "Developed a full-stack marketplace for 500+ users with product/service management, allowing both admin and users to add, sell, and buy products or services. Built an in-app AI chat assistant (ChatGPT-style conversational interface) using the Gemini API, allowing customers to ask product questions and track orders through natural conversation. Added AI-powered image generation to the admin panel and vendor apps for in-line product visual generation. Built automated conversational touchpoints using Twilio OTP and WhatsApp Meta API for notifications and customer support.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "WhatsApp Cloud API", "Twilio", "Vercel", "Render", "CI/CD"],
    features: [
      "Marketplace for 500+ users with product/service listings and profiles",
      "In-app ChatGPT-style conversational assistant via Gemini API",
      "Inline AI-powered image generation for admin and vendor apps",
      "AI-assisted product search results based on user queries",
      "Automated WhatsApp Meta API order-status & Twilio OTP notifications",
      "Fully responsive UI across 10+ product and service category pages",
      "CI/CD deployment pipeline on Vercel and Render increasing session time by 30%"
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "/projectimge.png",
    category: "company"
  },
  {
    id: 2,
    title: "Activeline – ISP Management System",
    slug: "activeline-isp-management",
    description: "Full-stack ISP management system with admin panel and user app supporting 200+ subscribers, automated billing, and FCM alerts.",
    detailedDescription: "Architected a full-stack ISP management system with an admin panel and user app supporting 200+ subscribers, covering billing, plan management, and data usage tracking. Integrated Razorpay for processing monthly payments and Firebase FCM for real-time notifications. Added Brevo email/SMS automation for billing alerts and plan renewals. Implemented secure JWT authentication and optimized database queries/pagination, reducing data load times by 45%.",
    technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "Razorpay", "Firebase FCM", "Brevo", "Docker", "Render"],
    features: [
      "Billing, subscription plan management, and data usage tracking",
      "Admin panel & client application supporting 200+ active subscribers",
      "Razorpay integration processing 300+ monthly payments with zero failures",
      "Firebase FCM delivering real-time push notifications to 200+ users",
      "Brevo email/SMS automation for billing alerts and plan renewals",
      "JWT-based secure authentication and optimized pagination (45% data load time cut)",
      "Containerized dev & prod architecture using Docker deployed on Render"
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "/Projectimg.png",
    category: "company",
    images: [
      { src: "https://i.imgur.com/xucofKF.png", caption: "Light Mode - Login Page" },
      { src: "https://i.imgur.com/JPAuHWg.png", caption: "Light Mode - Admin Dashboard" },
      { src: "https://i.imgur.com/1apxcgH.png", caption: "Light Mode - Support Tickets Inbox" },
      { src: "https://i.imgur.com/71aQEsn.png", caption: "Light Mode - Customers Directory" },
      { src: "https://i.imgur.com/fpnuIDM.png", caption: "Light Mode - Payment Transactions" },
      { src: "https://i.imgur.com/tYWOSbk.png", caption: "Dark Mode - Login Page" },
      { src: "https://i.imgur.com/mvLsqcN.png", caption: "Dark Mode - Admin Dashboard" },
      { src: "https://i.imgur.com/PgVfmz7.png", caption: "Dark Mode - Support Tickets Inbox" },
      { src: "https://i.imgur.com/ptAMJAn.png", caption: "Dark Mode - Customers Directory" },
      { src: "https://i.imgur.com/dsq8uu0.png", caption: "Dark Mode - Payment Transactions" }
    ]
  },
  {
    id: 3,
    title: "Synkor – Lead Capture & CRM Automation",
    slug: "synkor-crm-automation",
    description: "Marketing automation workflow system integrating WordPress, FluentCRM, Facebook Lead Forms, and custom WhatsApp message routes.",
    detailedDescription: "Integrated WordPress with FluentCRM and configured Facebook Lead Forms for automated lead capture and management. Built custom WhatsApp/Meta API and marketing automation workflows to support real-time customer engagement and automated follow-ups.",
    technologies: ["WordPress", "FluentCRM", "Meta WhatsApp API", "Facebook Lead Forms", "Make.com", "Webhooks"],
    features: [
      "WordPress integration with FluentCRM for automated user sync and tracking",
      "Facebook Lead Forms integration capturing prospects directly in real-time",
      "Custom WhatsApp / Meta API messaging workflows for instant user touchpoints",
      "Lead scoring and marketing automation workflows to support sales engagement"
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "/Projectimg.png",
    category: "company"
  },
  {
    id: 4,
    title: "Wyred – CRM & WhatsApp API Integration",
    slug: "wyred-whatsapp-crm",
    description: "Meta WhatsApp Business API integration with Zoho CRM for automated customer communication, lead tracking, and workflows.",
    detailedDescription: "Delivered Meta WhatsApp Business API integration with Zoho CRM for customer communication, lead tracking, and automation. Handled REST API integration, webhook event handlers, testing, and troubleshooting for WhatsApp workflows.",
    technologies: ["Meta WhatsApp API", "Zoho CRM", "Node.js", "Express.js", "REST APIs", "Webhooks"],
    features: [
      "Meta WhatsApp Business API connection with Zoho CRM workflow rules",
      "Automated custom message triggers for lead updates and communication",
      "Robust webhook handler with security verification for WhatsApp updates",
      "End-to-end API testing and error handling for messaging quotas and limits"
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "/projectimge.png",
    category: "company"
  },
  {
    id: 5,
    title: "NovaMind AI – Full-Stack ChatGPT-Style SaaS Platform",
    slug: "novamind-ai-saas",
    description: "Scalable MERN AI platform featuring RAG document processing, SSE streaming, multi-agent workflows, Redis/BullMQ background queue, and multi-LLM routing.",
    detailedDescription: "NovaMind AI is a full-stack, ChatGPT-style AI SaaS platform. Built using Next.js, React, TypeScript, Node.js, Express, MongoDB, and Socket.IO, it features real-time conversations with streaming responses (SSE). It integrates the Google Gemini API along with a multi-LLM provider routing system (supporting Gemini, Groq, Cloudflare Workers AI, Cerebras, OpenRouter). A complete RAG pipeline is built using ChromaDB vector database and document chunking/embeddings, allowing users to upload documents (PDFs, text) and perform semantic context-aware Q&A. Includes voice support (Speech-to-Text and Text-to-Speech), AI image-generation with Cloudinary storage, Redis & BullMQ task queues for heavy background processing, and AWS EC2 deployment.",
    technologies: [
      "Next.js", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "ChromaDB",
      "Socket.IO", "Redis", "BullMQ", "Gemini API", "Groq", "Cloudflare AI", "OpenRouter",
      "Vector Embeddings", "RAG Pipeline", "Voice AI", "Docker", "Cloudinary", "AWS EC2"
    ],
    features: [
      "Real-time chat with streaming responses (SSE) and persistent conversation history",
      "Multi-LLM routing system supporting Gemini, Groq, Cerebras, OpenRouter, and more",
      "Full RAG pipeline (PDF parsing, text chunking, embeddings) utilizing ChromaDB vector search",
      "Voice AI features incorporating Speech-to-Text (STT) and Text-to-Speech (TTS)",
      "Extensible AI Agent architecture supporting Coding, Research, Resume, and Document Agents",
      "Redis and BullMQ background workers for async processing (media uploads, PDF text extraction)",
      "Secure JWT authentication, rate limiting, Sentry error monitoring, and Zod validation",
      "Production-ready deployment using Docker, AWS EC2, PM2, and GitHub Actions CI/CD"
    ],
    githubUrl: "#",
    liveUrl: "#",
    image: "/Projectimg.png",
    category: "personal"
  }
];