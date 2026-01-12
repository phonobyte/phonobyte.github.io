import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Model Development",
    description: "Custom AI model creation tailored to your specific voice and speech requirements.",
    features: [
      "Custom architecture design",
      "Dataset curation & training",
      "Performance optimization",
      "Scalable deployment",
    ],
  },
  {
    title: "Research Collaboration",
    description: "Partner with us on cutting-edge research projects advancing the field of speech AI.",
    features: [
      "Joint research initiatives",
      "Publication partnerships",
      "Technology licensing",
      "Knowledge transfer",
    ],
  },
  {
    title: "Consulting",
    description: "Expert guidance on implementing voice and speech AI solutions in your products.",
    features: [
      "Technical architecture review",
      "Best practices advisory",
      "Team training & workshops",
      "Roadmap planning",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From research to production, we help organizations harness the power of voice AI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <h3 className="font-display text-2xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-card-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
