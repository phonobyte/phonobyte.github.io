import { Target, Lightbulb, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About PhonoByte
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Research-First Approach to Voice AI
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              PhonoByte is a research-focused organization dedicated to advancing the science and application of voice and speech artificial intelligence. We believe that the future of human-computer interaction lies in natural, intuitive voice interfaces.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our work spans from fundamental research in speech synthesis and speaker recognition to the development of practical applications that bring these technologies to the real world.
            </p>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            <div className="flex gap-5 p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
                  Mission-Driven
                </h3>
                <p className="text-muted-foreground text-sm">
                  Committed to democratizing voice AI technology and making it accessible for all applications.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
                  Innovation-Led
                </h3>
                <p className="text-muted-foreground text-sm">
                  Pushing the boundaries of what's possible in speech synthesis, recognition, and understanding.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
                  Impact-Focused
                </h3>
                <p className="text-muted-foreground text-sm">
                  Creating technology that makes real differences in how humans interact with machines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
