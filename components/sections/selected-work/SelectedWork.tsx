"use client";

import { motion } from "framer-motion";

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
    <section id="work" className="py-36">
      <div className="mx-auto max-w-7xl px-6">
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
              text-5xl
              font-semibold
              leading-tight
              text-zinc-950

              md:text-6xl
            "
          >
            Products built with
            <br />
            business impact in mind.
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-zinc-600
            "
          >
            A curated collection of products I've designed and engineered across
            retail, hospitality, CRM, travel, and business platforms—focused on
            usability, performance, and long-term scalability.
          </p>
        </motion.div>

        <div className="mt-24">
          {featuredProjects.map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
