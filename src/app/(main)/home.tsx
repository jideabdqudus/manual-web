import { Footer } from "@/src/components/footer";
import { HeroSection } from "@/src/components/hero-section";
import { ServicesSection } from "@/src/components/services-section";

export function Home() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <ServicesSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
