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
    <section className="pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            {project.category}
          </p>

          <h1 className="mt-6 font-heading text-5xl font-semibold leading-tight text-zinc-950 md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
            {project.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white transition hover:bg-zinc-800"
              >
                Visit Website
                <ArrowUpRight size={18} />
              </Link>
            )}

            <Link
              href="/#work"
              className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 font-medium transition hover:border-black"
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
          className="mt-20 overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="p-6">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              width={1600}
              height={900}
              className="w-full rounded-2xl border border-zinc-200"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
