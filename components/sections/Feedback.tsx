"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";

import { FeedbackEntry } from "@/types/feedback";

// Stored in this browser's localStorage only — there's no backend yet,
// so entries stay local to whoever submitted them until one is wired up.
const STORAGE_KEY = "client-feedback";

function StarRating({
  value,
  size = 20,
  onSelect,
}: {
  value: number;
  size?: number;
  onSelect?: (rating: number) => void;
}) {
  return (
    <div className="flex gap-[6px] text-amber">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={!onSelect}
          onClick={() => onSelect?.(star)}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          className={onSelect ? "cursor-pointer" : "cursor-default"}
        >
          <Star
            size={size}
            fill={star <= value ? "currentColor" : "none"}
            strokeWidth={1.5}
          />
        </button>
      ))}
    </div>
  );
}

export default function Feedback() {
  const [entries, setEntries] = useState<FeedbackEntry[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [justSubmitted, setJustSubmitted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) setEntries(JSON.parse(stored));
      } catch {
        // localStorage unavailable (private browsing, etc.) — start empty.
      }
    });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const entry: FeedbackEntry = {
      name: name.trim(),
      role: role.trim(),
      rating,
      message: message.trim(),
      date: new Date().toISOString(),
    };

    const next = [entry, ...entries];
    setEntries(next);

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // localStorage unavailable — feedback still shows for this session.
    }

    setName("");
    setRole("");
    setRating(5);
    setMessage("");
    setJustSubmitted(true);
    setTimeout(() => setJustSubmitted(false), 3000);
  };

  return (
    <section id="feedback" className="bg-bg px-5 pt-[86px] pb-[96px] text-text sm:px-6 md:px-[40px]">
      <div className="mx-auto max-w-[1560px]">
        <div className="mb-[44px] flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-semibold tracking-[-0.03em]">
            Tell me how it went
          </h2>

          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dimmest">
            Client feedback / unfiltered
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] items-start gap-x-[64px] gap-y-[40px]">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="border border-hairline bg-surface p-[30px]"
          >
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[16px]">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="mt-2 w-full border-b border-hairline bg-transparent pb-2 text-[15px] text-text outline-none focus:border-amber"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                  Company / role
                </label>
                <input
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="mt-2 w-full border-b border-hairline bg-transparent pb-2 text-[15px] text-text outline-none focus:border-amber"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="mt-[22px]">
              <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                Rating
              </label>
              <div className="mt-2">
                <StarRating value={rating} onSelect={setRating} />
              </div>
            </div>

            <div className="mt-[22px]">
              <label className="font-mono text-[10px] uppercase tracking-[0.16em] text-dimmest">
                Feedback
              </label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                rows={4}
                className="mt-2 w-full resize-none border-b border-hairline bg-transparent pb-2 text-[15px] leading-[1.5] text-text outline-none focus:border-amber"
                placeholder="How was working together?"
              />
            </div>

            <button
              type="submit"
              className="mt-[26px] rounded-full bg-amber px-[26px] py-[14px] font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-[#100C04] transition-colors hover:bg-amber-hover"
            >
              Submit feedback
            </button>

            <AnimatePresence>
              {justSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-[16px] font-mono text-[11px] uppercase tracking-[0.14em] text-amber"
                >
                  Thanks — your feedback has been added below.
                </motion.p>
              )}
            </AnimatePresence>
          </form>

          {/* LIST */}
          <div className="flex flex-col gap-[18px]">
            {entries.length === 0 ? (
              <div className="border border-hairline bg-surface p-[30px] text-[14px] leading-[1.6] text-dim">
                No feedback yet — be the first to share yours.
              </div>
            ) : (
              entries.map((entry, index) => (
                <div
                  key={`${entry.date}-${index}`}
                  className="border border-hairline bg-surface p-[26px]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[15px] font-medium text-text">
                        {entry.name}
                      </p>
                      {entry.role && (
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-dimmest">
                          {entry.role}
                        </p>
                      )}
                    </div>

                    <StarRating value={entry.rating} size={14} />
                  </div>

                  <p className="mt-[14px] text-[14px] leading-[1.6] text-dim">
                    {entry.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
