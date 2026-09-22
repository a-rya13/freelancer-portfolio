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
    <section id="process" className="bg-surface px-5 pt-[86px] pb-[96px] text-text sm:px-6 md:px-[40px]">
      <div className="mx-auto max-w-[1560px]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-[44px] max-w-[720px]"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
            <span className="h-px w-[26px] bg-amber" />
            Process
          </div>

          <h2 className="font-heading mt-6 text-[clamp(28px,3vw,40px)] font-semibold tracking-[-0.03em]">
            A process designed for clarity and results.
          </h2>

          <p className="mt-4 text-[15px] leading-[1.6] text-dim">
            Every project follows a structured workflow that keeps
            communication transparent, reduces uncertainty, and delivers
            products that are built to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[24px]">
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
              className="border border-hairline bg-bg p-[26px] transition-colors hover:border-dim"
            >
              <span className="font-mono text-[11px] text-amber">
                {step.number}
              </span>

              <h3 className="font-heading mt-4 text-[18px] font-medium text-text">
                {step.title}
              </h3>

              <p className="mt-3 text-[14px] leading-[1.5] text-dim">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
