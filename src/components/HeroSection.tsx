import WaveformVisualizer from "./WaveformVisualizer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden pt-20">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-hero-foreground/80 font-medium">
              Research-Driven AI Innovation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-hero-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Advancing
            <br />
            <span className="text-gradient">Voice & Speech AI</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-hero-foreground/60 max-w-2xl mb-8 font-body animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Pioneering research in speech synthesis, speaker recognition, and large language models to push the boundaries of human-machine interaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="group">
              Explore Research
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-hero-foreground hover:bg-primary/10 hover:text-hero-foreground">
              View Publications
            </Button>
          </div>

          {/* Waveform Visualization */}
          <div className="w-full max-w-xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <WaveformVisualizer />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
