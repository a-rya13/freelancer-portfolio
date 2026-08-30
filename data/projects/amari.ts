import { Project } from "@/types/project";

export const amari: Project = {
  slug: "amari",
  title: "Amari Resorts",
  status: "completed",
  category: "Hospitality",
  tagline:
    "A resort booking experience designed to convert browsing into bookings.",
  overview:
    "Amari Resorts wanted a website that reflected the calm, premium feel of the property itself while making it effortless for guests to check availability and book a stay directly, without relying solely on third-party travel platforms.",
  client: "Amari Resorts",
  industry: "Hospitality & Travel",
  duration: "10 weeks",
  role: "Full-Stack Developer & UI/UX Designer",
  featured: true,
  technologies: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "PostgreSQL" },
  ],
  cover: {
    src: "/images/projects/amari/cover.svg",
    alt: "Amari Resorts landing page cover",
    label: "Cover",
  },
  gallery: [
    {
      src: "/images/projects/amari/gallery-1.svg",
      alt: "Landing Page",
      label: "Landing Page",
    },
    {
      src: "/images/projects/amari/gallery-2.svg",
      alt: "Booking Flow",
      label: "Booking Flow",
    },
    {
      src: "/images/projects/amari/gallery-3.svg",
      alt: "Room Gallery",
      label: "Room Gallery",
    },
  ],
  links: {
    live: "https://example.com",
    caseStudy: "/work/amari",
  },
  challenge:
    "Direct bookings were low because the previous site redirected guests to a clunky third-party reservation widget that felt disconnected from the brand and lost users mid-flow.",
  solution:
    "Designed and built a fully custom booking flow embedded natively in the site, with real-time room availability, transparent pricing, and a guided multi-step checkout that kept guests within the branded experience end-to-end.",
  outcome:
    "Direct bookings increased meaningfully after launch, reducing dependency on commission-based travel platforms and improving margins per booking.",
  features: [
    "Real-time room availability and pricing",
    "Guided multi-step booking flow",
    "Immersive room and property galleries",
    "Mobile-first responsive design",
    "Automated booking confirmation emails",
  ],
  metrics: [
    { label: "Direct Bookings", value: "+32%" },
    { label: "Booking Drop-off", value: "-27%" },
    { label: "Avg. Session Time", value: "+2.1min" },
  ],
};
