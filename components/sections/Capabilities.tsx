"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Palette, Bot, TrendingUp, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    title: "Full-Stack Engineering",
    description:
      "Scalable web applications built using modern technologies with performance, maintainability, and user experience at the core.",
    icon: Code2,
  },
  {
    title: "UI / UX Design",
    description:
      "Clean, intuitive interfaces designed to simplify complex workflows and create memorable digital experiences.",
    icon: Palette,
  },
  {
    title: "AI & Automation",
    description:
      "Custom AI workflows and intelligent automations that eliminate repetitive work and improve operational efficiency.",
    icon: Bot,
  },
  {
    title: "Growth Systems",
    description:
      "Landing pages, conversion-focused experiences, and digital systems designed to help businesses attract and retain customers.",
    icon: TrendingUp,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Capabilities() {
  return (
    <section className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Capabilities
          </p>

          <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-zinc-950 sm:text-5xl md:text-6xl">
            Everything a small business
            <br />
            needs to grow online.
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-8">
            From strategy and interface design to development, AI automation,
            and growth systems, I help small businesses respond faster, look
            more credible, and turn ideas into products that actually grow
            revenue.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:mt-20 md:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  group
                  rounded-[24px]
                  border
                  border-border
                  bg-card
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-zinc-900
                  hover:shadow-xl
                  sm:rounded-[32px]
                  sm:p-8
                  md:p-10
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white sm:h-14 sm:w-14">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-zinc-950 sm:mt-8 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600 sm:mt-5 sm:leading-8">
                  {item.description}
                </p>

                <Link
                  href="/services"
                  className="mt-10 flex items-center gap-2 font-medium text-zinc-950 transition-all duration-300 group-hover:gap-3"
                >
                  Learn More
                  <ArrowUpRight size={18} strokeWidth={2} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center sm:mt-16 lg:justify-start">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 px-7 py-3.5 font-medium text-zinc-900 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white"
          >
            View All Services
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
