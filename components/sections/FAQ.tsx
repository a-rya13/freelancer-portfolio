"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface px-5 pt-[86px] pb-[96px] text-text sm:px-6 md:px-[40px]">
      <div className="mx-auto max-w-[1560px]">
        <div className="mb-[44px] flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-semibold tracking-[-0.03em]">
            Frequently asked
          </h2>

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dimmest">
            {faqs.length} questions / answered plainly
          </p>
        </div>

        <div className="mx-auto max-w-[900px]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqs.length - 1;

            return (
              <div
                key={item.question}
                className={`border-t border-hairline ${isLast ? "border-b" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-[22px] text-left"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-[11px] text-amber">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[17px] font-medium text-text">
                      {item.question}
                    </span>
                  </span>

                  <Plus
                    size={16}
                    className={`shrink-0 text-dim transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-amber" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[62ch] pb-[24px] pl-[38px] text-[14px] leading-[1.6] text-dim">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
