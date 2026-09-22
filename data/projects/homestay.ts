import { Project } from "@/types/project";

export const homestay: Project = {
  slug: "homestay",
  title: "HomeStay",
  status: "completed",
  category: "Travel & Hospitality",
  tagline: "A booking-ready website built to turn browsing into enquiries.",
  overview:
    "I designed and delivered a complete website for HomeStay, built to showcase the property and make enquiries and bookings easy for travellers.",
  client: "HomeStay",
  industry: "Travel & Hospitality",
  duration: "TODO",
  role: "Web Designer & Developer",
  featured: true,
  technologies: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
  ],
  cover: {
    src: "/images/projects/homestay/logo.jpeg",
    alt: "HomeStay logo",
    label: "Logo",
  },
  gallery: [],
  links: {
    caseStudy: "/work/homestay",
  },
  challenge:
    "HomeStay needed a website that did justice to the property and made it simple for travellers to enquire and book, rather than relying on listings elsewhere.",
  solution:
    "I designed and built a complete site focused on showcasing the property clearly and getting travellers from browsing to enquiry with as little friction as possible.",
  outcome:
    "HomeStay now has a dedicated website that presents the property properly and gives travellers a direct way to enquire and book.",
  features: [
    "Property showcase & gallery",
    "Enquiry & booking-ready contact flow",
    "Responsive design",
  ],
  metrics: [],
};
