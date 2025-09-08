import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExampleUseCasesSection from "@/components/ExampleUseCasesSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ExampleUseCasesSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;