import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxyccQ7byDbOmUwPX-v5R3FKYvxM0H8VbI0SXM0En5wnt9SUR_CmRyQriGAT2sXqMynCA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        toast({
          title: "Success! 🎉",
          description: "You've been added to the waitlist. We'll be in touch soon!",
        });
        setEmail("");
      } else {
        throw new Error("Failed to join waitlist");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact support",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              🔥 Be one of the first 100 users to try it.
            </h2>
            <p className="text-xl text-muted-foreground">
              Join the exclusive beta and get lifetime access to premium features.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-center text-lg"
                required
              />
            </div>
            <Button 
              type="submit"
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-hero text-lg py-6 h-auto"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "👉 Join the Waitlist"}
            </Button>
          </form>
          
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
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

export default WaitlistSection;