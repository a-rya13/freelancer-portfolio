"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block overflow-hidden border border-hairline bg-surface transition-colors hover:border-dim"
      >
        <div className="p-[26px]">
          <div className="flex items-start gap-5">
            <div className="relative h-[84px] w-[84px] shrink-0 overflow-hidden border border-hairline bg-bg">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="84px"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="min-w-0">
              <span className="inline-flex items-center gap-[8px] rounded-full border border-hairline px-[10px] py-[4px] font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
                {project.status === "ongoing" && (
                  <span className="h-[5px] w-[5px] rounded-full bg-amber" />
                )}
                {project.status}
              </span>

              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                {project.category}
              </p>

              <h3 className="font-heading mt-2 text-[19px] font-medium text-text">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-[14px] leading-[1.5] text-dim">
            {project.tagline}
          </p>

          <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-amber transition-all group-hover:gap-3">
            View case study
            <ArrowUpRight size={14} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
