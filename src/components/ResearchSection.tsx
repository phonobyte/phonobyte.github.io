import { Brain, Mic, MessageSquare, AudioWaveform } from "lucide-react";

const researchAreas = [
  {
    icon: Mic,
    title: "Speech Synthesis",
    description: "Natural and expressive text-to-speech systems that capture the nuances of human vocalization with unprecedented fidelity.",
  },
  {
    icon: AudioWaveform,
    title: "Voice Cloning",
    description: "Advanced voice replication technology enabling personalized voice experiences while maintaining ethical boundaries.",
  },
  {
    icon: Brain,
    title: "Large Language Models",
    description: "Developing specialized LLMs optimized for voice-first applications and multimodal understanding.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Building intelligent dialogue systems that understand context, emotion, and intent in real-time conversations.",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Focus
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Research Areas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exploring the frontiers of voice and speech AI to create technology that truly understands and speaks like humans.
          </p>
        </div>

        {/* Research Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <area.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
