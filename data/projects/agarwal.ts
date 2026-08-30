import { Project } from "@/types/project";

export const agarwal: Project = {
  slug: "agarwal",
  title: "Agarwal Gift & Greetings",
  status: "completed",
  category: "Retail / E-Commerce / Wholesale",
  tagline:
    "A premium home & interior decor storefront that brings an in-store showroom experience online.",
  overview:
    "Agarwal Gift & Greetings needed a digital storefront that matched the craftsmanship and trust built over decades in-store. We designed and built a fast, catalog-driven e-commerce experience with rich product detail pages, wishlist, and a streamlined checkout.",
  client: "Agarwal Gift & Greetings",
  industry: "Retail & E-Commerce",
  duration: "8 weeks",
  role: "Full-Stack Developer & UI/UX Designer",
  featured: true,
  technologies: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Stripe" },
    { name: "Sanity CMS" },
  ],
  cover: {
    src: "/images/projects/agarwal/cover.svg",
    alt: "Agarwal Gift & Greetings storefront cover",
    label: "Cover",
  },
  gallery: [
    {
      src: "/images/projects/agarwal/gallery-1.svg",
      alt: "Storefront",
      label: "Storefront",
    },
    {
      src: "/images/projects/agarwal/gallery-2.svg",
      alt: "Product Detail",
      label: "Product Detail",
    },
    {
      src: "/images/projects/agarwal/gallery-3.svg",
      alt: "Checkout",
      label: "Checkout",
    },
  ],
  links: {
    live: "https://example.com",
    caseStudy: "/work/agarwal",
  },
  challenge:
    "There was no existing site, brochure page with no online catalog, forcing customers to visit in-store or message on WhatsApp to check product availability and pricing.",
  solution:
    "Built a full product catalog with categories, filters, and detailed product pages featuring high-resolution imagery, and integrated secure checkout with Stripe alongside a lightweight CMS so the team could manage inventory without developer help.",
  outcome:
    "The new storefront reduced manual WhatsApp inquiries significantly and opened a new direct online sales channel within the first month of launch.",
  features: [
    "Searchable product catalog with category and price filters",
    "Rich product detail pages with zoomable imagery",
    "Secure checkout with Razorpay payments",
    "CMS-managed inventory and pricing",
    "Wishlist and saved-items experience",
  ],
  metrics: [
    { label: "Faster Page Loads", value: "3.2x" },
    { label: "Online Inquiries", value: "-45%" },
    { label: "Conversion Rate", value: "+18%" },
  ],
};
