import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Brain, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Connect your wearable",
    description: "Fitbit, Apple Health, Oura (Fitbit first).",
    number: "01"
  },
  {
    icon: Brain,
    title: "Get daily insights", 
    description: "Clear explanations of your heart, sleep, recovery, and activity data.",
    number: "02"
  },
  {
    icon: MessageCircle,
    title: "Ask anything",
    description: "Chat with your personal AI coach, anytime.",
    number: "03"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple setup, powerful insights. Get started in minutes.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden border-0 bg-gradient-card backdrop-blur-sm shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10">
                      {step.number}
                    </div>
                    <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;