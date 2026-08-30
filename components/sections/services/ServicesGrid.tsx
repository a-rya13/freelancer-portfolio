"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { services } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: (index % 2) * 0.1 }}
            className="rounded-[24px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-xl sm:rounded-[32px] sm:p-8"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white sm:h-14 sm:w-14">
              <Icon size={24} />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-zinc-950 sm:mt-8 sm:text-2xl">
              {service.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-600 sm:mt-5 sm:leading-8">
              {service.description}
            </p>

            <ul className="mt-6 flex flex-col gap-2.5 sm:mt-8">
              {service.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-sm text-zinc-600"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-zinc-900"
                    strokeWidth={2.5}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
