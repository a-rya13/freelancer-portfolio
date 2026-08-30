import { Project } from "@/types/project";

export const cms: Project = {
  slug: "cms",
  title: "Nimbus CMS",
  status: "completed",
  category: "Business Platform",
  tagline:
    "A headless content platform that lets non-technical teams ship content changes safely.",
  overview:
    "Nimbus needed an internal content management system that marketing and ops teams could use independently, without needing a developer for every page edit, while keeping the storefront fast and version-controlled.",
  client: "Nimbus",
  industry: "Business Automation",
  duration: "12 weeks",
  role: "Full-Stack Developer & Product Engineer",
  featured: true,
  technologies: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "PostgreSQL" },
    { name: "Prisma" },
    { name: "Tailwind CSS" },
  ],
  cover: {
    src: "/images/projects/cms/cover.svg",
    alt: "Nimbus CMS dashboard cover",
    label: "Cover",
  },
  gallery: [
    {
      src: "/images/projects/cms/gallery-1.svg",
      alt: "Dashboard",
      label: "Dashboard",
    },
    {
      src: "/images/projects/cms/gallery-2.svg",
      alt: "Content Editor",
      label: "Content Editor",
    },
    {
      src: "/images/projects/cms/gallery-3.svg",
      alt: "Media Library",
      label: "Media Library",
    },
  ],
  links: {
    caseStudy: "/work/cms",
  },
  challenge:
    "Every content update, from landing page copy to blog posts, required a developer to push code changes, creating a bottleneck that slowed down marketing campaigns and product launches.",
  solution:
    "Built a custom headless CMS with a block-based content editor, role-based permissions, draft/publish workflows, and a media library, all connected to the storefront through a typed API layer.",
  outcome:
    "Content updates that used to take days now ship in minutes, and the engineering team no longer fields routine content-change requests.",
  features: [
    "Block-based visual content editor",
    "Draft, review, and publish workflow",
    "Role-based access control",
    "Searchable media library",
    "Typed content API for the storefront",
  ],
  metrics: [
    { label: "Content Turnaround", value: "-90%" },
    { label: "Dev Tickets Removed", value: "120+/mo" },
    { label: "Editor Adoption", value: "100%" },
  ],
};
