"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-white via-white to-zinc-100 pt-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-zinc-200/30 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 lg:flex-row">
        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-zinc-300 bg-white px-5 py-2 text-sm font-medium text-zinc-600 shadow-sm">
            Development • Design • Growth
          </span>

          <h1 className="mt-8 text-6xl font-black leading-[0.95] tracking-tight text-black md:text-7xl lg:text-8xl">
            Turning
            <br />
            Business
            <br />
            Ideas Into
            <br />
            Digital Products.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-600">
            Helping startups, businesses and brands build premium websites,
            scalable web applications, CRM platforms and digital experiences
            designed for long-term growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group rounded-full bg-black px-8 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800">
              View Selected Work
            </button>

            <button className="group flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-8 py-4 font-medium transition-all duration-300 hover:border-black hover:shadow-lg">
              Let's Build
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          {/* Glow */}

          <div className="absolute inset-0 rounded-[40px] bg-zinc-300/20 blur-3xl" />

          {/* Floating Card */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -left-8 top-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl"
          >
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Projects
            </p>

            <h3 className="mt-1 text-3xl font-bold">10+</h3>
          </motion.div>

          {/* Floating Card */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -right-8 bottom-10 rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl"
          >
            <p className="text-xs uppercase tracking-wider text-zinc-400">
              Expertise
            </p>

            <h3 className="mt-1 text-sm font-semibold leading-6">
              CRM
              <br />
              E-Commerce
              <br />
              UI/UX
            </h3>
          </motion.div>

          {/* IMAGE */}

          <div className="overflow-hidden rounded-[36px] shadow-2xl">
            <Image
              src="/images/profile/profile.png"
              alt="Arya Agarwal"
              width={450}
              height={600}
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
