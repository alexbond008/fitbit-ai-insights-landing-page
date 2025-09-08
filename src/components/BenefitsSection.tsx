import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Zap, Watch } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "No more confusing graphs",
    description: "Get clear, simple explanations instead of complex charts"
  },
  {
    icon: Target,
    title: "Personalized to your age, lifestyle, and goals",
    description: "Insights tailored specifically for you, not generic advice"
  },
  {
    icon: Zap,
    title: "Actionable daily tips, not generic advice",
    description: "Real recommendations you can act on immediately"
  },
  {
    icon: Watch,
    title: "Works across devices",
    description: "Fitbit, Apple Watch, Oura, Garmin coming soon"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why People Love It
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your health data from confusing numbers into actionable insights.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="border-0 bg-gradient-card backdrop-blur-sm shadow-card hover:shadow-hero transition-all duration-300"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <span className="text-secondary">✅</span>
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
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

export default BenefitsSection;