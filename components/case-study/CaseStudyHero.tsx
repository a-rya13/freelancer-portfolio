"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
    <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            {project.category}
          </p>

          <h1 className="mt-5 font-heading text-4xl font-semibold leading-tight text-zinc-950 sm:mt-6 sm:text-5xl md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 sm:mt-8 sm:text-xl sm:leading-9">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white transition hover:bg-zinc-800"
              >
                Visit Website
                <ArrowUpRight size={18} />
              </Link>
            )}

            <Link
              href="/#work"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 font-medium transition hover:border-black"
            >
              Back to Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.2,
          }}
          className="mt-12 overflow-hidden rounded-[24px] border border-border bg-card shadow-[0_30px_90px_rgba(0,0,0,0.08)] sm:mt-16 sm:rounded-[36px] md:mt-20"
        >
          <div className="flex items-center gap-2 border-b border-border bg-subtle px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="p-3 sm:p-6">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={1600}
              height={900}
              className="w-full rounded-2xl border border-border"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
