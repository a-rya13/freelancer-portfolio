import { Project } from "@/types/project";

export const templateWebsite: Project = {
  slug: "template-website",
  title: "Template Website",
  status: "completed",
  category: "Configurable Website / Admin Platform",
  tagline:
    "One website the client can reshape into a news portal, a job portal, or anything else — entirely from the admin side.",
  overview:
    "A client wanted a website they could keep repurposing without hiring a developer every time their needs changed. I built a single site with an admin panel powerful enough to reconfigure the whole thing — into a news portal, a job portal, or whatever they need next — which is why I call it the Template Website.",
  client: "Template Website",
  industry: "Configurable / Multi-Purpose",
  duration: "1 month",
  role: "Full-Stack Developer",
  featured: true,
  technologies: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "PostgreSQL" },
    { name: "Prisma" },
  ],
  cover: {
    src: "/images/projects/template-website/logo.svg",
    alt: "Template Website mark",
    label: "Logo",
  },
  gallery: [],
  links: {
    caseStudy: "/work/template-website",
  },
  challenge:
    "The client needed one website that could become a completely different kind of platform over time — a news portal today, a job portal tomorrow — without paying for a rebuild every time the direction changed.",
  solution:
    "I built a single, admin-configurable website where the site's structure, content types, and layout can all be changed from the admin panel — letting the client turn it into whatever kind of portal they need without touching code.",
  outcome:
    "Delivered on time within a month of development and updates. The client can now reshape the site into a different type of portal whenever the need arises, without waiting on a developer for every change.",
  features: [
    "Admin-configurable site structure & content types",
    "Reusable page and section templates",
    "No-code content management from the admin panel",
  ],
  metrics: [],
};
