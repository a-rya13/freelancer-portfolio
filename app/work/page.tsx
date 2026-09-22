import type { Metadata } from "next";

import { projects } from "@/data/projects";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WorkFilterTabs from "@/components/sections/work/WorkFilterTabs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Ongoing and completed projects — websites, CRMs, and growth systems built for small businesses.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="bg-bg text-text">
        <section className="px-5 pt-[150px] pb-[70px] sm:px-6 md:px-[40px]">
          <div className="mx-auto max-w-[1560px]">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
              <span className="h-px w-[26px] bg-amber" />
              Work
            </div>

            <h1 className="font-heading mt-6 max-w-[760px] text-[clamp(32px,4.4vw,58px)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Every project, ongoing and completed.
            </h1>

            <p className="mt-6 max-w-[640px] text-[15px] leading-[1.6] text-dim">
              A full look at what I&apos;ve built and what I&apos;m building
              right now — across retail, hospitality, CRM, travel, and
              business platforms.
            </p>
          </div>
        </section>

        <section className="px-5 pb-[96px] sm:px-6 md:px-[40px]">
          <div className="mx-auto max-w-[1560px]">
            <WorkFilterTabs projects={projects} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
