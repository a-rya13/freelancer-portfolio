import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import CaseStudyHero from "@/components/case-study/CaseStudyHero";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <CaseStudyHero project={project} />
    </main>
  );
}
