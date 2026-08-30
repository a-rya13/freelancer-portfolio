"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

import TechBadge from "./TechBadge";
import ProjectGallery from "./ProjectGallery";

interface ProjectShowcaseProps {
  project: Project;
  reverse?: boolean;
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ProjectShowcase({
  project,
  reverse = false,
}: ProjectShowcaseProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="py-16 sm:py-20 lg:py-28"
    >
      <div
        className={`
          grid
          items-center
          gap-10
          lg:grid-cols-2
          lg:gap-20
          ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
        `}
      >
        {/* LEFT CONTENT */}

        <motion.div variants={stagger} className="max-w-xl">
          <motion.p
            variants={fadeUp}
            className="
              mb-5
              text-sm
              font-medium
              uppercase
              tracking-[0.22em]
              text-zinc-500
            "
          >
            {project.category}
          </motion.p>

          <motion.h3
            variants={fadeUp}
            className="
              font-heading
              text-3xl
              font-semibold
              leading-tight
              text-zinc-950
              sm:text-4xl
              md:text-5xl
            "
          >
            {project.title}
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="
              mt-6
              text-xl
              leading-relaxed
              text-zinc-700
            "
          >
            {project.tagline}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="
              mt-8
              leading-8
              text-zinc-500
            "
          >
            {project.overview}
          </motion.p>

          {/* Technologies */}

          <motion.div
            variants={fadeUp}
            className="
              mt-10
              flex
              flex-wrap
              gap-3
            "
          >
            {project.technologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} />
            ))}
          </motion.div>

          {/* CTA */}

          <motion.div
            variants={fadeUp}
            className="
              mt-12
              flex
              flex-wrap
              gap-5
            "
          >
            <Link
              href={project.links.caseStudy ?? "#"}
              className="
                inline-flex
                items-center
                gap-2
                font-medium
                text-zinc-900
                transition-all
                duration-300
                hover:gap-3
              "
            >
              Explore Project
              <ArrowUpRight size={18} strokeWidth={2} />
            </Link>

            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-zinc-300
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:border-zinc-900
                  hover:bg-zinc-900
                  hover:text-white
                "
              >
                View Live
                <ArrowUpRight size={16} />
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}

        <motion.div variants={fadeUp} className="relative">
          <div
            className="
              overflow-hidden
              rounded-[28px]
              border
              border-border
              bg-card
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
          >
            {/* Browser Top Bar */}

            <div
              className="
                flex
                items-center
                gap-2
                border-b
                border-border
                bg-subtle
                px-5
                py-4
              "
            >
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            {/* Gallery */}

            <div className="p-5">
              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                <ProjectGallery
                  images={
                    project.gallery.length ? project.gallery : [project.cover]
                  }
                />
              </motion.div>
            </div>
          </div>

          {/* Decorative Background */}

          <div
            className="
              absolute
              -right-6
              -top-6
              -z-10
              h-full
              w-full
              rounded-[32px]
              border
              border-border
              bg-subtle/60
            "
          />
        </motion.div>
      </div>
    </motion.article>
  );
}
