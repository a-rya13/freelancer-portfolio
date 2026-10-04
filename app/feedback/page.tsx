import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Feedback from "@/components/sections/Feedback";

// Unlinked page for sending to clients: hidden from search and the sitemap.
export const metadata: Metadata = {
  title: "Share feedback",
  robots: { index: false, follow: false },
};

export default function FeedbackPage() {
  return (
    <>
      <Navbar />

      <main className="bg-bg pt-[70px]">
        <Feedback />
      </main>

      <Footer />
    </>
  );
}
