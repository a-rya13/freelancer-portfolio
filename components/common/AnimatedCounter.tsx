"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  to: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  keepGrowing?: boolean;
  className?: string;
}

export default function AnimatedCounter({
  to,
  prefix = "",
  suffix = "",
  durationMs = 1600,
  keepGrowing = false,
  className = "",
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(query.matches);

    queueMicrotask(handleChange);
    query.addEventListener("change", handleChange);

    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!inView) return;

    if (reducedMotion) {
      queueMicrotask(() => setValue(to));
      return;
    }

    let cancelled = false;
    let frame: number;
    const start = performance.now();

    const step = (now: number) => {
      if (cancelled) return;

      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
        return;
      }

      if (keepGrowing) {
        intervalRef.current = setInterval(() => {
          setValue((current) => current + 1);
        }, 2800);
      }
    };

    frame = requestAnimationFrame(step);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearInterval(intervalRef.current);
    };
  }, [inView, reducedMotion, to, durationMs, keepGrowing]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
