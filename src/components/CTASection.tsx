import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              🔥 Be one of the first 100 users to try it.
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join the exclusive beta and get lifetime access to premium features.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-hero text-lg px-12 py-6 h-auto"
            >
              👉 Join the Waitlist
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
              <span>Free during beta</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary animate-pulse"></div>
              <span>Early access perks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;