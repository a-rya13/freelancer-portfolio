"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Project } from "@/types/project";

interface Props {
  project: Project;
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function CaseStudyHero({ project }: Props) {
  return (
    <section className="bg-bg px-5 pt-[150px] pb-[70px] text-text sm:px-6 md:px-[40px]">
      <div className="mx-auto max-w-[1560px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-[900px]"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
            <span className="h-px w-[26px] bg-amber" />
            {project.category}
          </div>

          <h1 className="font-heading mt-6 text-[clamp(32px,5vw,68px)] font-semibold leading-[1.05] tracking-[-0.035em]">
            {project.title}
          </h1>

          <p className="mt-6 max-w-[640px] text-[16px] leading-[1.6] text-dim">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-[16px]">
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-amber px-[26px] py-[14px] font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#100C04] transition-colors hover:bg-amber-hover"
              >
                Visit website
              </Link>
            )}

            <Link
              href="/work"
              className="rounded-full border border-[#26262B] px-[26px] py-[14px] font-mono text-[12px] uppercase tracking-[0.14em] text-[#B9B5AD] transition-colors hover:border-dim hover:text-text"
            >
              Back to work
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="mt-[56px] overflow-hidden border border-hairline bg-surface"
        >
          <div className="flex items-center gap-2 border-b border-hairline bg-surface px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-dimmest" />
            <span className="h-3 w-3 rounded-full bg-dimmest" />
            <span className="h-3 w-3 rounded-full bg-dimmest" />
          </div>

          <div className="p-3 sm:p-6">
            <div className="relative h-[220px] w-full sm:h-[300px] md:h-[360px]">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1560px"
                className="border border-hairline object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
