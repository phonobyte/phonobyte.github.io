import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-hero-foreground mt-3 mb-6">
            Let's Build the Future of Voice AI Together
          </h2>
          <p className="text-hero-foreground/60 text-lg mb-10">
            Whether you're interested in collaboration, consulting, or just want to discuss the future of voice technology, we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:phonobyte@gmail.com"
              className="flex items-center gap-3 text-hero-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>phonobyte@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-hero-foreground/80">
              <MapPin className="w-5 h-5 text-primary" />
              <span>India</span>
            </div>
          </div>

          <Button size="lg" className="group">
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
