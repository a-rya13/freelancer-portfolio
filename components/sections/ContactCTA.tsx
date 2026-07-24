"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

export default function ContactCTA() {
  return (
    <section id="contact" className="py-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-zinc-200
            bg-zinc-950
            px-8
            py-20
            text-center
            text-white
            md:px-20
          "
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            Let's Build
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-heading text-5xl font-semibold leading-tight md:text-6xl">
            Have an idea worth building?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
            Whether you're launching a startup, improving an existing product,
            or building a completely new digital experience, I'd love to help
            turn your vision into something people enjoy using.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="mailto:hello@aryabuilds.dev"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-7
                py-4
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Start a Project
              <ArrowRight size={18} strokeWidth={2} />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-zinc-700
                px-7
                py-4
                font-medium
                text-white
                transition-all
                duration-300
                hover:border-white
              "
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
