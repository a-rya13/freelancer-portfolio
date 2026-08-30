import { Project } from "@/types/project";

export const crm: Project = {
  slug: "crm",
  title: "Pulse CRM",
  status: "ongoing",
  category: "CRM Solutions",
  tagline:
    "A lightweight CRM built around how the sales team actually works.",
  overview:
    "The sales team was tracking leads across spreadsheets, email threads, and sticky notes. Pulse CRM replaces that with a single pipeline view, automated follow-ups, and reporting the founders actually check.",
  client: "Pulse",
  industry: "CRM & Business Automation",
  duration: "9 weeks",
  role: "Full-Stack Developer & Product Engineer",
  featured: true,
  technologies: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "PostgreSQL" },
    { name: "tRPC" },
    { name: "Tailwind CSS" },
  ],
  cover: {
    src: "/images/projects/crm/cover.svg",
    alt: "Pulse CRM pipeline board cover",
    label: "Cover",
  },
  gallery: [
    {
      src: "/images/projects/crm/gallery-1.svg",
      alt: "Pipeline Board",
      label: "Pipeline Board",
    },
    {
      src: "/images/projects/crm/gallery-2.svg",
      alt: "Contact Profile",
      label: "Contact Profile",
    },
    {
      src: "/images/projects/crm/gallery-3.svg",
      alt: "Analytics",
      label: "Analytics",
    },
  ],
  links: {
    caseStudy: "/work/crm",
  },
  challenge:
    "Leads were falling through the cracks because there was no single source of truth for where a deal stood, and follow-ups depended entirely on someone remembering to send them.",
  solution:
    "Designed a drag-and-drop pipeline board with automated follow-up reminders, activity timelines per contact, and a reporting dashboard that surfaces conversion rates by stage and rep.",
  outcome:
    "The team now closes deals faster with a clear view of every stage in the pipeline, and missed follow-ups have effectively been eliminated.",
  features: [
    "Drag-and-drop sales pipeline board",
    "Automated follow-up reminders",
    "Per-contact activity timeline",
    "Team performance analytics",
    "Role-based access for reps and managers",
  ],
  metrics: [
    { label: "Missed Follow-ups", value: "-95%" },
    { label: "Sales Cycle Length", value: "-21%" },
    { label: "Rep Adoption", value: "100%" },
  ],
};
