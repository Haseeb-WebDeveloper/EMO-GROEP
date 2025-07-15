import { HeroSection } from "@/components/layout/hero-section";
import { ServicesSection } from "@/components/layout/services-section";
import WhyChooseSection from "@/components/layout/why-choose-section";
import { HowWeWork } from "@/components/layout/method";
import FAQ from "@/components/layout/faq";
import { ContactSection } from "@/components/layout/contact-section";
import { SustainabilitySection } from "@/components/layout/sustainability-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SustainabilitySection />
      <ServicesSection />
      <WhyChooseSection />
      <HowWeWork />
      <FAQ />
      <ContactSection />
    </main>
  );
}
