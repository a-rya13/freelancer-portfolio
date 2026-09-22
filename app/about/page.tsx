import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Feedback from "@/components/sections/Feedback";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Digital growth partner for small businesses — design, development, and growth strategy handled by one operator, end to end.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-bg">
        <About />
        <FAQ />
        <Feedback />
      </main>

      <Footer />
    </>
  );
}
