"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const industries = [
  "Retail",
  "E-Commerce",
  "Real Estate",
  "Hospitality",
  "CRM Solutions",
  "Business Automation",
  "Recruitment",
  "Marketing",
  "Healthcare",
  "Education",
];

export default function TrustedIndustries() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="Industries"
          title="Industries I've Built For"
          description="From local businesses to scalable digital platforms, every project is designed with performance, usability, and business growth in mind."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-wrap gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry}
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-black hover:text-black hover:shadow-md"
            >
              {industry}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
