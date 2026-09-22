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
      <div className="flex flex-wrap gap-[10px]">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            className={`rounded-full border px-[22px] py-[11px] font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
              active === filter.value
                ? "border-amber bg-amber text-[#100C04]"
                : "border-[#26262B] text-[#B9B5AD] hover:border-dim hover:text-text"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-[40px] grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-[28px]">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-[40px] text-dim">
          Nothing here yet — check back soon.
        </p>
      )}
    </div>
  );
}
