import healthCoachLogo from "@/assets/healthcoach-ai-logo.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex justify-center mb-8">
              <img 
                src={healthCoachLogo} 
                alt="HealthCoach AI" 
                className="h-16 sm:h-20 lg:h-24 w-auto"
              />
            </div>
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Understand
                </span>{" "}
                your health data.{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Instantly.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground lg:text-2xl max-w-3xl mx-auto">
                Your Fitbit collects the numbers. Our AI coach explains what they mean — and how to improve them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;