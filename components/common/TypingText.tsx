"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  words: string[];
  className?: string;
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}

export default function TypingText({
  words,
  className = "",
  typingSpeedMs = 55,
  deletingSpeedMs = 30,
  pauseMs = 1600,
}: TypingTextProps) {
  const [text, setText] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(query.matches);

    queueMicrotask(handleChange);
    query.addEventListener("change", handleChange);

    return () => query.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || words.length === 0) return;

    let cancelled = false;
    let current = "";
    let wordIndex = 0;
    let deleting = false;

    const schedule = (fn: () => void, delay: number) =>
      setTimeout(() => {
        if (!cancelled) fn();
      }, delay);

    const tick = () => {
      const word = words[wordIndex % words.length];

      if (!deleting) {
        current = word.slice(0, current.length + 1);
        setText(current);

        if (current === word) {
          timeoutId = schedule(() => {
            deleting = true;
            tick();
          }, pauseMs);
          return;
        }

        timeoutId = schedule(tick, typingSpeedMs);
        return;
      }

      current = word.slice(0, current.length - 1);
      setText(current);

      if (current === "") {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutId = schedule(tick, typingSpeedMs);
        return;
      }

      timeoutId = schedule(tick, deletingSpeedMs);
    };

    let timeoutId = schedule(tick, typingSpeedMs);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [reducedMotion, words, typingSpeedMs, deletingSpeedMs, pauseMs]);

  const display = reducedMotion ? words[0] ?? "" : text;

  return (
    <span className={className}>
      {display}
      {!reducedMotion && <span className="typing-caret" aria-hidden="true" />}
    </span>
  );
}
