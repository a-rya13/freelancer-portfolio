import Hero from "@/components/sections/Hero";
import ServiceMarquee from "@/components/sections/ServiceMarquee";
import SelectedWork from "@/components/sections/selected-work/SelectedWork";
import Capabilities from "@/components/sections/Capabilities";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div id="top">
      <main>
        <Hero />
        <ServiceMarquee />
        <SelectedWork />
        <Capabilities />
      </main>
      <Footer />
    </div>
  );
}
