"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Process",
    href: "#process",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        scrolled
          ? "border-b border-zinc-200 bg-white/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Arya<span className="text-zinc-400">.</span>
        </Link>

        <nav className="hidden gap-10 lg:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button className="group flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105">
          Let's Build
          <ArrowRight
            size={17}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.header>
  );
}
