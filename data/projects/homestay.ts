import { Project } from "@/types/project";

export const homestay: Project = {
  slug: "homestay",
  title: "Homestay Trails",
  status: "completed",
  category: "Travel",
  tagline:
    "A discovery-first booking platform for independent homestays and local hosts.",
  overview:
    "Homestay Trails connects travelers with independent homestays that don't have the marketing reach of big listing platforms. The product needed strong search and discovery, trustworthy host profiles, and a simple trip-planning experience.",
  client: "Homestay Trails",
  industry: "Travel & Hospitality",
  duration: "11 weeks",
  role: "Full-Stack Developer & UI/UX Designer",
  featured: true,
  technologies: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "PostgreSQL" },
    { name: "Mapbox" },
  ],
  cover: {
    src: "/images/projects/homestay/cover.svg",
    alt: "Homestay Trails search and discover cover",
    label: "Cover",
  },
  gallery: [
    {
      src: "/images/projects/homestay/gallery-1.svg",
      alt: "Search & Discover",
      label: "Search & Discover",
    },
    {
      src: "/images/projects/homestay/gallery-2.svg",
      alt: "Listing Page",
      label: "Listing Page",
    },
    {
      src: "/images/projects/homestay/gallery-3.svg",
      alt: "Trip Planner",
      label: "Trip Planner",
    },
  ],
  links: {
    live: "https://example.com",
    caseStudy: "/work/homestay",
  },
  challenge:
    "Travelers struggled to find and trust independent homestays compared to established platforms, and hosts had no easy way to showcase what made their listing unique.",
  solution:
    "Built a map-based search and discovery experience with rich host profiles, verified reviews, and a trip planner that lets travelers save and organize listings across a multi-stop itinerary.",
  outcome:
    "Hosts on the platform saw a meaningful increase in direct bookings, and traveler engagement with listings improved thanks to the map-first discovery experience.",
  features: [
    "Map-based search and discovery",
    "Verified host profiles and reviews",
    "Multi-stop trip planner and saved listings",
    "Responsive listing pages with rich media",
    "Host dashboard for managing availability",
  ],
  metrics: [
    { label: "Host Bookings", value: "+40%" },
    { label: "Search-to-View Rate", value: "+22%" },
    { label: "Return Visitors", value: "+35%" },
  ],
};
