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
    <section id="about" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto w-full max-w-xs lg:mx-0"
          >
            <div className="absolute inset-0 rounded-[32px] bg-zinc-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-border bg-card shadow-xl">
              <Image
                src="/images/profile/profile.png"
                alt="Arya Agarwal"
                width={450}
                height={560}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center lg:text-left"
          >
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
              About
            </p>

            <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl md:text-5xl">
              Hi, I&apos;m Arya Agarwal.
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-8">
              I started this practice because too many small businesses were
              stuck with slow, generic websites that didn&apos;t reflect how
              good their business actually was. I work closely with a small
              number of clients at a time — handling design, development, and
              growth strategy myself — so you get fast turnarounds, direct
              communication, and a digital presence built specifically around
              how your business actually gets customers.
            </p>

            <ul className="mx-auto mt-8 flex max-w-md flex-col gap-3 lg:mx-0">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-center gap-3 text-sm font-medium text-zinc-700 lg:justify-start"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
