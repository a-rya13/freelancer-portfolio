import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TrustedIndustries from "@/components/sections/TrustedIndustries";
import SelectedWork from "@/components/sections/selected-work/SelectedWork";
import Capabilities from "@/components/sections/Capabilities";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TrustedIndustries />
        <SelectedWork />
        <Capabilities />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
