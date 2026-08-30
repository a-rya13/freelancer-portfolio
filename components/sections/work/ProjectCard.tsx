import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
        className="group block overflow-hidden rounded-[24px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-subtle">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium capitalize shadow-sm ${
              project.status === "ongoing"
                ? "bg-emerald-500 text-white"
                : "bg-card text-zinc-700"
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="p-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
            {project.category}
          </p>

          <h3 className="mt-3 text-xl font-semibold text-zinc-950">
            {project.title}
          </h3>

          <p className="mt-3 leading-6 text-zinc-600">{project.tagline}</p>

          <div className="mt-6 flex items-center gap-2 font-medium text-zinc-950 transition-all duration-300 group-hover:gap-3">
            View Case Study
            <ArrowUpRight size={16} strokeWidth={2} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
