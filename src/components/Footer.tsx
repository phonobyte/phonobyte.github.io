import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-hero border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-hero-foreground">
              Phono<span className="text-gradient">Byte</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-hero-foreground/50 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-hero-foreground/50 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-hero-foreground/50 hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-hero-foreground/40 text-sm">
            © {new Date().getFullYear()} PhonoByte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
