import { Code2, Megaphone, PenTool, Search, LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
}

// Growth services lead; every build service is grouped into the last card.
export const services: Service[] = [
  {
    title: "Search & AEO",
    description:
      "SEO and answer engine optimisation that get your business found on Google and named by AI tools like ChatGPT.",
    highlights: [
      "SEO and on-page optimisation",
      "AEO so AI answers recommend your business",
      "Local search visibility",
      "Monthly ranking and lead reports",
    ],
    icon: Search,
  },
  {
    title: "Paid Acquisition",
    description:
      "Google and Meta ads for businesses in Lucknow and across India, built to bring in enquiries, with ad spend going straight to the platform and every rupee reported.",
    highlights: [
      "Meta Ads and Google Ads campaigns, Lucknow and India-wide",
      "Testing and optimisation",
      "Cost-per-lead tracking",
      "Analytics and reporting setup",
    ],
    icon: Megaphone,
  },
  {
    title: "Content & Creative",
    description:
      "Content and reels that keep your brand visible and support your ads and search work under one strategy.",
    highlights: [
      "Reels and short-form content",
      "Social and ad creatives",
      "Content aligned with your campaigns",
    ],
    icon: PenTool,
  },
  {
    title: "Websites & Builds",
    description:
      "The website that turns attention into customers, plus the tools behind it, built and maintained after launch.",
    highlights: [
      "Fast, conversion-focused websites, built on Next.js",
      "E-commerce with secure payments (Razorpay, UPI, Stripe)",
      "CRM solutions, AI and business automation",
      "UI / UX design and ongoing maintenance",
    ],
    icon: Code2,
  },
];
