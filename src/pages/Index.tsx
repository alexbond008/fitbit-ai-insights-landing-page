import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExampleUseCasesSection from "@/components/ExampleUseCasesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ExampleUseCasesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;