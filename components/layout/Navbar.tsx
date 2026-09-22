"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-between gap-6 px-5 py-5 sm:px-6 sm:py-6 md:px-[40px] md:py-[26px]">
      <Link
        href="/"
        className="flex items-center gap-[10px]"
        onClick={() => setOpen(false)}
      >
        <span className="h-[7px] w-[7px] rounded-full bg-amber shadow-[0_0_12px_#F5A524]" />
        <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-text">
          Arya Agarwal
        </span>
      </Link>

      <div className="hidden items-center gap-[28px] md:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9B9790] transition-colors hover:text-amber"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-text transition-colors hover:border-dim md:hidden"
      >
        <Menu size={18} />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[100] bg-bg/98 backdrop-blur-sm md:hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-text transition-colors hover:border-dim sm:top-6 sm:right-6"
                >
                  <X size={18} />
                </button>

                <motion.div
                  initial={{ y: -12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex h-full flex-col items-center justify-center gap-8 px-6"
                >
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-heading text-[32px] font-medium text-text transition-colors hover:text-amber"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </nav>
  );
}
