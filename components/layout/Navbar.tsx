"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

interface NavbarProps {
  theme?: "hero" | "light";
}

export default function Navbar({ theme = "hero" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const light = theme === "light" || scrolled || menuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        light
          ? "border-b border-border bg-card/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className={`text-lg font-bold tracking-tight transition-colors duration-300 sm:text-2xl ${
            light ? "text-zinc-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          Arya Agarwal
          <span className={light ? "text-zinc-400" : "text-zinc-500"}></span>
        </Link>

        <nav className="hidden gap-10 lg:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                light
                  ? "text-zinc-600 hover:text-black"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className={`group hidden items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 sm:flex ${
              light ? "bg-black text-white" : "bg-card text-black"
            }`}
          >
            Let&apos;s Build
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${
              light
                ? "border-zinc-300 text-zinc-900 hover:border-black"
                : "border-zinc-600 text-white hover:border-white"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-card/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-zinc-700 transition hover:bg-subtle hover:text-black"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
              >
                Let&apos;s Build
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
