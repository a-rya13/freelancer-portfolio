"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

import TypingText from "@/components/common/TypingText";
import AnimatedCounter from "@/components/common/AnimatedCounter";

const growthBars = [35, 55, 45, 70, 60, 90, 100];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [8, -8]),
    { stiffness: 200, damping: 20 }
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-8, 8]),
    { stiffness: 200, damping: 20 }
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-background pt-28 pb-16 lg:pt-24 lg:pb-0">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[130px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 px-5 sm:gap-16 sm:px-6 lg:flex-row">
        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center lg:text-left"
        >
          <span className="inline-flex rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur sm:px-5 sm:text-sm">
            Digital Growth Partner • Web • CRM • Growth
          </span>

          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:mt-8 sm:text-5xl sm:leading-[1] md:text-6xl md:leading-[0.95] lg:text-7xl xl:text-8xl">
            <span className="block">We Build.</span>
            <span className="block font-mono text-emerald-400">
              <TypingText
                words={["<You Grow.>", "<You Scale.>", "<You Convert.>", "<You Win.>"]}
              />
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-8 lg:mx-0">
            I partner with small businesses to build fast, conversion-focused
            websites, CRMs, and growth systems — so you respond to leads
            quicker, look more credible online, and grow without the overhead
            of a full agency.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
              href="#work"
              className="group rounded-full bg-card px-8 py-4 text-center font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
            >
              View Selected Work
            </a>

            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-transparent px-8 py-4 font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/5"
            >
              Let&apos;s Build
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-zinc-700">
              <Image
                src="/images/profile/profile.png"
                alt="Arya Agarwal"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm text-zinc-400">
              <span className="font-medium text-zinc-200">Arya Agarwal</span> —
              Digital Growth Partner
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT — growth dashboard reveal */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto w-full max-w-[260px] sm:max-w-sm md:max-w-md lg:mx-0"
          style={{ perspective: 1200 }}
        >
          {/* Back-most glow */}
          <div className="absolute inset-0 rounded-[40px] bg-emerald-500/10 blur-2xl sm:blur-3xl" />

          {/* Unveil flash — glow pulse timed to the cover fully lifting away */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.85, 1.15, 1] }}
            transition={{ duration: 0.7, delay: 1.9, ease: "easeOut" }}
            className="pointer-events-none absolute inset-0 rounded-[40px] bg-emerald-400/30 blur-3xl"
          />

          {/* Neon cross accent — cinematic beat behind the reveal, homage to the reference */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 1] }}
            transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent shadow-[0_0_16px_2px_rgba(52,211,153,0.6)]"
          />
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 1, 0], scaleY: [0, 1, 1] }}
            transition={{ duration: 0.8, delay: 1.9, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-emerald-300/80 to-transparent shadow-[0_0_16px_2px_rgba(52,211,153,0.6)]"
          />

          <motion.div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* Diagonal light streak — the closing sweep of the reveal beam */}
            <motion.div
              initial={{ opacity: 0, x: "-70%" }}
              animate={{ opacity: [0, 1, 0], x: ["-70%", "70%"] }}
              transition={{ duration: 0.9, delay: 1.9, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-y-10 left-1/2 z-30 w-1/3 -translate-x-1/2 rotate-12 bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent blur-md"
            />

            {/* Device frame */}
            <div className="relative overflow-hidden rounded-[28px] border border-zinc-800 bg-zinc-900 shadow-2xl shadow-emerald-500/10 sm:rounded-[32px]">
              {/* Reveal curtain — the cover pulling back, cinematic pace */}
              <motion.div
                initial={{ y: "0%" }}
                animate={{ y: "-105%" }}
                transition={{ duration: 1.1, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 z-20 bg-zinc-950"
              >
                {/* Rim light riding the trailing edge as it lifts */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_20px_4px_rgba(52,211,153,0.8)]" />
              </motion.div>

              {/* Top bar */}
              <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/80 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
              </div>

              {/* Dashboard content */}
              <div className="p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
                  Client Growth Dashboard
                </p>

                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-zinc-500">Businesses Growing</p>
                    <AnimatedCounter
                      to={120}
                      suffix="+"
                      keepGrowing
                      className="text-3xl font-bold text-white sm:text-4xl"
                    />
                  </div>

                  <TrendingUp className="text-emerald-400" size={26} />
                </div>

                <div className="mt-6 flex h-20 items-end gap-1.5 sm:h-24 sm:gap-2">
                  {growthBars.map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ scaleY: 0.2 }}
                      animate={{ scaleY: [0.25, 1, 0.7, 1] }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: index * 0.15,
                        ease: "easeInOut",
                      }}
                      style={{ height: `${height}%`, transformOrigin: "bottom" }}
                      className="w-full rounded-t-sm bg-gradient-to-t from-emerald-500/30 to-emerald-400"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating glass stat card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ translateZ: 60 }}
              className="absolute -bottom-6 -left-4 rounded-2xl border border-zinc-700 bg-zinc-900/80 p-3 shadow-xl backdrop-blur sm:-bottom-8 sm:-left-8 sm:p-5"
            >
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                Response Time
              </p>
              <h3 className="mt-1 text-xl font-bold text-white sm:text-3xl">
                &lt; 24 hrs
              </h3>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
