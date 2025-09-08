import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const useCases = [
  "Am I recovered enough for a hard workout today?",
  "How does my sleep compare to others my age?",
  "What's the best way to improve my resting heart rate?"
];

const ExampleUseCasesSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ask Your AI Coach Anything
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant, personalized answers to your health questions.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="border-0 bg-gradient-card backdrop-blur-sm shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                
                <blockquote className="text-lg font-medium italic">
                  "{useCase}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleUseCasesSection;