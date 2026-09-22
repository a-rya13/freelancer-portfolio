"use client";

import { motion } from "framer-motion";

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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[24px]">
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
            className="border border-hairline bg-surface p-[30px] transition-colors hover:border-dim"
          >
            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-hairline text-amber">
              <Icon size={22} />
            </div>

            <h3 className="font-heading mt-6 text-[19px] font-medium text-text">
              {service.title}
            </h3>

            <p className="mt-3 text-[14px] leading-[1.55] text-dim">
              {service.description}
            </p>

            <div className="mt-6 flex flex-col gap-[10px] border-t border-hairline pt-6">
              {service.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-[10px] text-[13px] leading-[1.5] text-[#C9C5BE]"
                >
                  <span className="mt-[2px] text-[10px] text-amber">◆</span>
                  {highlight}
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
