import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Process from "@/components/sections/Process";
import ContactCTA from "@/components/sections/ContactCTA";
import ServicesGrid from "@/components/sections/services/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | Arya Agarwal",
  description:
    "Every service I offer small businesses — web design and development, e-commerce, CRM solutions, UI/UX design, AI and automation, and growth marketing.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar theme="light" />

      <main className="min-h-screen bg-white pt-28 pb-20 sm:pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Services
          </p>

          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-zinc-950 sm:mt-6 sm:text-5xl md:text-6xl">
            Everything your business needs to grow online.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-8">
            From strategy and design to development, automation, and growth
            marketing — here&apos;s everything I do for small businesses,
            end to end.
          </p>

          <div className="mt-12 sm:mt-16">
            <ServicesGrid />
          </div>
        </div>

        <Process />

        <div className="mt-4 sm:mt-8">
          <ContactCTA />
        </div>
      </main>

      <Footer />
    </>
  );
}
