"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding your business, users, and goals before writing a single line of code.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Planning the product architecture, user journeys, and technical approach to ensure long-term scalability.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Crafting clean, intuitive interfaces that balance aesthetics with usability and conversion.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Building fast, responsive, and scalable applications using modern technologies and best practices.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deploying, testing, optimizing, and ensuring everything performs reliably in production.",
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Iterating based on feedback, analytics, and evolving business requirements to keep the product growing.",
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

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Process
          </p>

          <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight text-zinc-950 sm:text-5xl md:text-6xl">
            A process designed
            <br />
            for clarity and results.
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-8">
            Every project follows a structured workflow that keeps communication
            transparent, reduces uncertainty, and delivers products that are
            built to scale.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:mt-24 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="group rounded-[24px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-xl sm:rounded-[32px] sm:p-8 md:p-10"
            >
              <span className="text-sm font-semibold tracking-[0.2em] text-zinc-400">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-zinc-950 sm:mt-5 sm:text-2xl">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600 sm:mt-5 sm:leading-8">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
