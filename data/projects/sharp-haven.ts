import { Project } from "@/types/project";

export const sharpHaven: Project = {
  slug: "sharp-haven",
  title: "Sharp Haven",
  status: "ongoing",
  category: "Paid Social",
  tagline: "Meta ad campaigns run and optimized against CPA and ROAS.",
  overview:
    "I run Sharp Haven's Meta ads, covering campaign structure, audience targeting, creative testing and budget scaling. Every decision is measured against cost per acquisition and return on ad spend.",
  client: "Sharp Haven",
  // TODO: industry not specified yet — this is a single-service (Meta ads) engagement.
  industry: "TODO",
  duration: "Ongoing retainer",
  role: "Meta Ads Manager",
  featured: true,
  technologies: [{ name: "Meta Ads Manager" }],
  cover: {
    src: "/images/projects/sharp-haven/logo.png",
    alt: "Sharp Haven logo",
    label: "Logo",
  },
  gallery: [],
  links: {
    caseStudy: "/work/sharp-haven",
  },
  challenge:
    "Sharp Haven needed Meta ad campaigns that were actually accountable to numbers — not just running ads, but managing them against a real cost-per-acquisition and ROAS target.",
  solution:
    "I run the full campaign lifecycle — structure, audience targeting, creative testing, and budget scaling — measuring every decision against CPA and ROAS.",
  // TODO: swap for a real CPA/ROAS figure once available.
  outcome:
    "Campaigns are live and continuously optimized against CPA and ROAS.",
  features: [
    "Campaign structure & setup",
    "Audience targeting",
    "Creative testing",
    "Budget scaling",
  ],
  metrics: [],
};
