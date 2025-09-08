import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-chat-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Understand
                </span>{" "}
                your health data.{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Instantly.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground lg:text-2xl">
                Your Fitbit collects the numbers. Our AI coach explains what they mean — and how to improve them.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="lg" className="animate-pulse-glow">
                🔵 Join Early Access
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
                <span>Free during beta</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
                <span>Works with Fitbit</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-primary opacity-20 blur-xl"></div>
              <img
                src={heroImage}
                alt="AI Health Coach Chat Interface"
                className="relative rounded-2xl shadow-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;