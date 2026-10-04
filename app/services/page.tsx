import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import Process from "@/components/sections/Process";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import { SERVICES_FAQ_IDS, pickFaqs } from "@/data/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Meta Ads, SEO & Websites in Lucknow and India",
  description:
    "Meta ads expert in Lucknow and across India. SEO and AEO, Google and Meta ads, content, and the websites that turn attention into customers — run by one person for small businesses.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-bg text-text">
        <section className="px-5 pt-[150px] pb-[70px] sm:px-6 md:px-[40px]">
          <div className="mx-auto max-w-[1560px]">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
              <span className="h-px w-[26px] bg-amber" />
              Services
            </div>

            <h1 className="font-heading mt-6 max-w-[820px] text-[clamp(32px,4.4vw,58px)] font-semibold leading-[1.05] tracking-[-0.035em]">
              Everything your business needs to grow online.
            </h1>

            <p className="mt-6 max-w-[640px] text-[15px] leading-[1.6] text-dim">
              Search, paid ads and content that bring customers in — plus the
              website that turns them into enquiries. Meta ads expert based in
              Lucknow, working with small businesses across India.
            </p>
          </div>
        </section>

        <section className="px-5 pb-[10px] sm:px-6 md:px-[40px]">
          <div className="mx-auto max-w-[1560px]">
            <ServicesGrid />
          </div>
        </section>

        <Process />
        <FAQ items={pickFaqs(SERVICES_FAQ_IDS)} />
      </main>

      <Footer />
    </>
  );
}
