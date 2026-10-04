import Hero from "@/components/sections/Hero";
import ServiceMarquee from "@/components/sections/ServiceMarquee";
import SelectedWork from "@/components/sections/selected-work/SelectedWork";
import Capabilities from "@/components/sections/Capabilities";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import { CONTACT } from "@/constants/contact";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/og-image.png`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressCountry: "IN",
  },
  areaServed: "Worldwide",
  founder: { "@type": "Person", name: SITE_NAME },
};

export default function Home() {
  return (
    <div id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <main>
        <Hero />
        <ServiceMarquee />
        <SelectedWork />
        <Capabilities />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
