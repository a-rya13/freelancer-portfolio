import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import { ABOUT_FAQ_IDS, pickFaqs } from "@/data/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Digital growth partner for small businesses — search, paid ads, content and websites handled by one operator, end to end.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-bg">
        <About />
        <FAQ items={pickFaqs(ABOUT_FAQ_IDS)} />
      </main>

      <Footer />
    </>
  );
}
