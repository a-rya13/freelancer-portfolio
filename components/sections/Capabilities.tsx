"use client";

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
    <section id="services" className="py-36">
      <div className="mx-auto max-w-7xl px-6">
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

          <h2 className="mt-5 font-heading text-5xl font-semibold leading-tight text-zinc-950 md:text-6xl">
            Everything needed to
            <br />
            build exceptional products.
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-600">
            From strategy and interface design to development, AI automation,
            and growth, I help businesses transform ideas into polished digital
            products.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
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
                  rounded-[32px]
                  border
                  border-zinc-200
                  bg-white
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-zinc-900
                  hover:shadow-xl
                "
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                  <Icon size={26} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-zinc-600">
                  {item.description}
                </p>

                <div className="mt-10 flex items-center gap-2 font-medium text-zinc-950 transition-all duration-300 group-hover:gap-3">
                  Learn More
                  <ArrowUpRight size={18} strokeWidth={2} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
