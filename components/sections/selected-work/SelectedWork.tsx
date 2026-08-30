"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

import ProjectShowcase from "./ProjectShowcase";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="max-w-3xl"
        >
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          >
            Selected Work
          </p>

          <h2
            className="
              mt-5
              font-heading
              text-4xl
              font-semibold
              leading-tight
              text-zinc-950

              sm:text-5xl
              md:text-6xl
            "
          >
            Products built with
            <br />
            business impact in mind.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-zinc-600

              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            A curated collection of products I&apos;ve designed and engineered across
            retail, hospitality, CRM, travel, and business platforms—focused on
            usability, performance, and long-term scalability.
          </p>
        </motion.div>

        <div className="mt-14 sm:mt-20 lg:mt-24">
          {featuredProjects.map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center sm:mt-20 lg:justify-start">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-7 py-3.5 font-medium text-zinc-900 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
          >
            View All Work
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
