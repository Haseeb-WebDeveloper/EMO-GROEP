import { HeroSection } from "@/components/layout/hero-section";
import { ContactSection } from "@/components/layout/contact-section";
import WhyChooseSection from "@/components/layout/why-choose-section";
import { ServicesSection } from "@/components/layout/services-section";
import FAQ from "@/components/layout/faq";
import { HowWeWork } from "@/components/layout/method";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <FAQ />
      <HowWeWork />
      <ContactSection />
    </main>
  );
}
