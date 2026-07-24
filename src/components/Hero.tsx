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
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-semibold mb-3 tracking-tight">
            Hi, I'm <span className="gradient-text">Nada</span>
          </h1>

          <div className="text-lg md:text-2xl font-medium mb-6 min-h-[36px] text-muted-foreground">
            <span className="gradient-text">{displayedText}</span>
            <span className="animate-pulse text-primary/70">|</span>
          </div>

          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building amazing software experiences. Specialized in full-stack development with a focus on modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Button
              size="default"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
              onClick={openCV}
            >
              View My Resume
            </Button>
            <Button
              size="default"
              variant="outline"
              className="glass-effect hover:border-primary/50 transition-colors"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/NadaJoobeur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-effect glow-hover cursor-pointer"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nada-joobeur-704461241/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-effect glow-hover cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:nadajbr725@gmail.com"
              className="p-2.5 rounded-full glass-effect glow-hover cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-60"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
