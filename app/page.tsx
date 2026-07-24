import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedIndustries from "@/components/sections/TrustedIndustries";
import SelectedWork from "@/components/sections/selected-work/SelectedWork";
import Capabilities from "@/components/sections/Capabilities";
import Process from "@/components/sections/Process";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedIndustries />
        <SelectedWork />
        <Capabilities />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
