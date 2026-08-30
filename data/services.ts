import { Code2, Palette, Bot, TrendingUp, ShoppingCart, Workflow, LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Web Design & Development",
    description:
      "Fast, modern websites built to convert visitors into customers — from marketing sites to full web applications.",
    highlights: [
      "Custom design, not templates",
      "Built on Next.js for speed and SEO",
      "Fully responsive across every device",
      "Ongoing support after launch",
    ],
    icon: Code2,
  },
  {
    title: "E-Commerce Development",
    description:
      "Online storefronts with secure checkout, inventory management, and a shopping experience that matches your brand.",
    highlights: [
      "Secure payments (Stripe and others)",
      "Product catalogs, filters, and search",
      "CMS-managed inventory and pricing",
      "Wishlist, cart, and checkout flows",
    ],
    icon: ShoppingCart,
  },
  {
    title: "CRM Solutions & Business Automation",
    description:
      "Custom CRM platforms and workflow automation that replace spreadsheets and manual follow-ups with one clear system.",
    highlights: [
      "Lead and pipeline tracking",
      "Automated follow-ups and reminders",
      "Team dashboards and reporting",
      "Integrations with the tools you already use",
    ],
    icon: Workflow,
  },
  {
    title: "UI / UX Design",
    description:
      "Clean, intuitive interfaces designed to simplify complex workflows and create a memorable digital experience.",
    highlights: [
      "User flows and wireframing",
      "Design systems for consistency",
      "Conversion-focused layouts",
      "Accessible, mobile-first design",
    ],
    icon: Palette,
  },
  {
    title: "AI & Automation",
    description:
      "Custom AI workflows and intelligent automations that eliminate repetitive work and improve operational efficiency.",
    highlights: [
      "AI-assisted customer support flows",
      "Process and workflow automation",
      "Custom internal tools",
      "Data entry and reporting automation",
    ],
    icon: Bot,
  },
  {
    title: "Growth Marketing",
    description:
      "SEO, paid ads, and conversion-focused strategy to help small businesses get found and turn traffic into leads.",
    highlights: [
      "SEO and on-page optimization",
      "Google Ads and Meta Ads campaigns",
      "Conversion rate optimization",
      "Analytics and reporting setup",
    ],
    icon: TrendingUp,
  },
];
