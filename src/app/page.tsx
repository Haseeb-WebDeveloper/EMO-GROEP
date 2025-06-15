import { HeroSection } from "@/components/layout/hero-section";
import { AboutSection } from "@/components/layout/about-section";
import { ContactSection } from "@/components/layout/contact-section";
import WhyChooseSection from "@/components/layout/why-choose-section";
import { ServicesSection } from "@/components/layout/services-section";
import FAQ from "@/components/layout/faq";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <AboutSection /> */}
      <WhyChooseSection />
      <FAQ />
      {/* <HowWeWorkSection /> */}
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
