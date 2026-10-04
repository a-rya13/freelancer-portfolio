"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import Navbar from "@/components/layout/Navbar";

interface HeroProps {
  staticHero?: boolean;
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

const ease = (t: number) => t * t * (3 - 2 * t);

const seg = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

const scrub = (p: number, a: number, b: number, from: number, to: number) =>
  from + (to - from) * ease(seg(p, a, b));

export default function Hero({ staticHero = false }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isStatic = staticHero || Boolean(prefersReducedMotion);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const staticProgress = useMotionValue(1);
  const progress = isStatic ? staticProgress : scrollYProgress;

  const cam = useTransform(progress, (p) => scrub(p, 0.02, 0.9, 1.1, 1));
  const bright = useTransform(progress, (p) => scrub(p, 0.06, 0.78, 0.3, 1));
  const glow = useTransform(progress, (p) => scrub(p, 0.34, 0.9, 0, 1));
  const ghostOp = useTransform(progress, (p) => scrub(p, 0.74, 0.98, 0, 1));
  const teaserOp = useTransform(progress, (p) => scrub(p, 0.03, 0.4, 1, 0));
  const teaserY = useTransform(
    progress,
    (p) => `${scrub(p, 0.03, 0.4, 0, -26)}px`
  );
  const payoffOp = useTransform(progress, (p) => scrub(p, 0.2, 0.62, 0, 1));
  const payoffY = useTransform(
    progress,
    (p) => `${scrub(p, 0.2, 0.62, 26, 0)}px`
  );
  const cueOp = useTransform(progress, (p) => scrub(p, 0, 0.12, 1, 0));

  const cssVars = {
    "--cam": cam,
    "--bright": bright,
    "--glow": glow,
    "--ghostOp": ghostOp,
    "--teaserOp": teaserOp,
    "--teaserY": teaserY,
    "--payoffOp": payoffOp,
    "--payoffY": payoffY,
    "--cueOp": cueOp,
  };

  return (
    <section ref={sectionRef} className="relative h-[340vh]">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden bg-[#08080A]"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={cssVars as any}
      >
        <div className="grid h-full w-full place-items-center">
          <div
            className="relative aspect-video will-change-transform"
            style={{
              width: "max(100%, 177.8vh)",
              transform: "scale(var(--cam))",
              transformOrigin: "44% 28%",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                filter:
                  "brightness(var(--bright)) contrast(1.14) saturate(.92)",
                willChange: "filter",
              }}
            >
              <Image
                src="/images/hero/desk-a.png"
                alt="Two monitors and a laptop on a desk in a dim room"
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <Image
                src="/images/hero/desk-b.png"
                alt="Dual-monitor workstation lit by warm accent lighting"
                fill
                sizes="100vw"
                style={{ objectFit: "cover", filter: "brightness(1.9)" }}
                className="hero-photo-b"
              />
            </div>

            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 42% 24%, rgba(255,214,150,.34), transparent 60%), radial-gradient(circle at 72% 34%, rgba(255,214,150,.2), transparent 60%)",
                mixBlendMode: "screen",
                opacity: "var(--glow)",
              }}
            />

            <div
              className="font-heading pointer-events-none absolute font-bold leading-none"
              style={{
                right: "4%",
                top: "8%",
                fontSize: "clamp(120px, 20vw, 340px)",
                color: "rgba(255,255,255,.07)",
                opacity: "var(--ghostOp)",
              }}
            >
              05
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 38%, transparent 32%, rgba(0,0,0,.82))",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,8,10,.85) 0%, transparent 22%, transparent 48%, rgba(8,8,10,.92) 100%)",
          }}
        />

        <Navbar />

        <div className="pointer-events-none absolute right-5 bottom-14 left-5 z-[5] sm:right-6 sm:left-6 md:right-[40px] md:bottom-[72px] md:left-[40px]">
          <div className="relative min-h-[260px] sm:min-h-[230px]">
            {/* TEASER */}
            <div
              className="absolute bottom-0 left-0 max-w-[620px]"
              style={{
                opacity: "var(--teaserOp)",
                transform: "translateY(var(--teaserY))",
              }}
            >
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
                <span className="h-px w-[26px] bg-amber" />
                Digital Growth Partner
              </div>

              <h1 className="font-heading mt-5 text-[clamp(40px,5.6vw,76px)] font-semibold leading-[0.98] tracking-[-0.035em] text-text">
                Most growth
                <br />
                is guesswork.
              </h1>
            </div>

            {/* PAYOFF */}
            <div
              className="absolute bottom-0 left-0 max-w-[760px]"
              style={{
                opacity: "var(--payoffOp)",
                transform: "translateY(var(--payoffY))",
              }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
                The growth stack, uncovered
              </p>

              <h2 className="font-heading mt-5 text-[clamp(40px,5.6vw,76px)] font-semibold leading-[0.98] tracking-[-0.035em] text-text">
                Research. Rank. <span className="text-amber">Results.</span>
              </h2>

              <div className="pointer-events-auto mt-[30px] flex flex-wrap items-center gap-[30px]">
                <a
                  href="#contact"
                  className="rounded-full bg-amber px-[26px] py-[15px] font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#100C04] transition-colors hover:bg-amber-hover"
                >
                  Start a project
                </a>

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
            </div>

            {/* SCROLL CUE */}
            <div
              className="absolute right-0 bottom-0 flex flex-col items-end gap-2"
              style={{ opacity: "var(--cueOp)" }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
                Scroll to wake it
              </p>
              <motion.span
                className="text-amber"
                animate={isStatic ? undefined : { y: [0, 6, 0] }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                ↓
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
