import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-white">
        <CaseStudyHero project={project} />
      </main>

      <Footer />
    </>
  );
}
