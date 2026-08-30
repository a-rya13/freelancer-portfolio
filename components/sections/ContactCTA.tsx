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
    <section id="contact" className="py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-border
            bg-zinc-950
            px-6
            py-14
            text-center
            text-white
            sm:rounded-[40px]
            sm:px-10
            sm:py-16
            md:px-20
            md:py-20
          "
        >
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            Let&apos;s Build
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl font-heading text-3xl font-semibold leading-tight sm:mt-6 sm:text-4xl md:text-6xl">
            Ready to grow your small business online?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-8">
            Whether you&apos;re launching, improving an existing product, or
            building a completely new digital experience, I&apos;d love to help
            you respond faster, look more credible, and turn your vision into
            steady growth.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">
            <Link
              href="mailto:hello@aryabuilds.dev"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-card
                px-7
                py-4
                font-medium
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
                sm:w-auto
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
                w-full
                items-center
                justify-center
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
                sm:w-auto
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
