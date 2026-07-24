import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import cv from "@/assets/cv.pdf";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Software Engineer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
   const openCV = () => {
    window.open(cv, "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/[0.07] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/[0.07] rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full glass-effect text-[11px] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            Available for opportunities
          </div>

          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-tight leading-[1.05]">
            Hi, I'm <span className="gradient-text font-medium">Nada</span>
          </h1>

          <div className="text-sm md:text-base font-mono tracking-wide mb-6 min-h-[24px] text-muted-foreground">
            <span className="text-primary/60">&gt;</span> {displayedText}
            <span className="animate-pulse text-primary/70">_</span>
          </div>

          <div className="w-10 h-px bg-border mx-auto mb-6"></div>

          <p className="text-sm md:text-[15px] text-muted-foreground/90 mb-10 max-w-lg mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building amazing software experiences. Specialized in full-stack development with a focus on modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button
              size="sm"
              className="bg-gradient-primary hover:opacity-90 transition-opacity px-5 h-9 text-xs font-medium tracking-wide"
              onClick={openCV}
            >
              View My Resume
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="glass-effect hover:border-primary/50 transition-colors px-5 h-9 text-xs font-medium tracking-wide"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-3 justify-center">
            <a
              href="https://github.com/NadaJoobeur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect glow-hover cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nada-joobeur-704461241/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect glow-hover cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:nadajbr725@gmail.com"
              className="p-2 rounded-full glass-effect glow-hover cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-40 hover:opacity-80 transition-opacity"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-4 h-4 text-primary" />
      </button>
    </section>
  );
};


export default Hero;
