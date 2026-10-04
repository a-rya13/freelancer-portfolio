"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
  "Direct communication, no account managers",
  "No agency overhead or markup",
  "Fast turnarounds on every project",
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
      duration: 0.7,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="bg-bg px-5 pt-[150px] pb-[96px] text-text sm:px-6 md:px-[40px]">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid items-center gap-[48px] lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-[80px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:mx-0 lg:max-w-none"
          >
            <div className="absolute -inset-3 -z-10 rounded-[2px] border border-hairline sm:-inset-4" />
            <div className="relative overflow-hidden border border-hairline bg-surface">
              <Image
                src="/images/profile/profile.png"
                alt="Arya Agarwal"
                width={604}
                height={651}
                sizes="(min-width: 1024px) 520px, (min-width: 640px) 480px, 90vw"
                className="aspect-[604/651] h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
              <span className="h-px w-[26px] bg-amber" />
              About
            </div>

            <h1 className="font-heading mt-6 text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Hi, I&apos;m Arya Agarwal.
            </h1>

            <p className="mt-6 max-w-[620px] text-[15px] leading-[1.6] text-dim">
              I started this practice because too many small businesses were
              stuck with slow, generic websites that didn&apos;t reflect how
              good their business actually was. I work closely with a small
              number of clients at a time — handling design, development, and
              growth strategy myself — so you get fast turnarounds, direct
              communication, and a digital presence built specifically around
              how your business actually gets customers.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-[10px] text-[14px] text-[#C9C5BE]"
                >
                  <span className="text-[11px] text-amber">◆</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-[30px] border-t border-hairline pt-8">
              <div>
                <p className="text-[22px] font-semibold text-text">
                  15+ projects
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                  Delivered end to end
                </p>
              </div>

              <div>
                <p className="text-[22px] font-semibold text-text">
                  100+ businesses
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                  Studied and pitched
                </p>
              </div>

              <div>
                <p className="text-[22px] font-semibold text-text">
                  Based in India
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-dim">
                  Working worldwide
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
