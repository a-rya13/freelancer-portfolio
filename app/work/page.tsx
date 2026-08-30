import type { Metadata } from "next";

import { projects } from "@/data/projects";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/sections/ContactCTA";
import WorkFilterTabs from "@/components/sections/work/WorkFilterTabs";

export const metadata: Metadata = {
  title: "Work | Arya Agarwal",
  description:
    "Ongoing and completed projects — websites, CRMs, and growth systems built for small businesses.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-white pt-28 pb-20 sm:pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Work
          </p>

          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-zinc-950 sm:mt-6 sm:text-5xl md:text-6xl">
            Every project, ongoing and completed.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-8">
            A full look at what I&apos;ve built and what I&apos;m building
            right now — across retail, hospitality, CRM, travel, and business
            platforms.
          </p>

          <div className="mt-12 sm:mt-16">
            <WorkFilterTabs projects={projects} />
          </div>
        </div>

        <div className="mt-20 sm:mt-28">
          <ContactCTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
