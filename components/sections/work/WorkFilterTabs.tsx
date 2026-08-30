"use client";

import { useState } from "react";

import { Project, ProjectStatus } from "@/types/project";

import ProjectCard from "./ProjectCard";

interface WorkFilterTabsProps {
  projects: Project[];
}

type Filter = "all" | ProjectStatus;

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Ongoing", value: "ongoing" },
  { label: "Completed", value: "completed" },
];

export default function WorkFilterTabs({ projects }: WorkFilterTabsProps) {
  const [active, setActive] = useState<Filter>("all");

  const filteredProjects = projects.filter(
    (project) => active === "all" || project.status === active
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              active === filter.value
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-border bg-card text-zinc-600 hover:border-zinc-400"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-zinc-500">
          Nothing here yet — check back soon.
        </p>
      )}
    </div>
  );
}
