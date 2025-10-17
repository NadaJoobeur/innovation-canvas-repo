import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse-glow"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 border-2 border-primary/30 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-secondary/30 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-accent/10 rounded-lg animate-wiggle"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium mb-4">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          
          <div className="text-3xl md:text-5xl font-bold mb-8 min-h-[60px]">
            <span className="gradient-text">{displayedText}</span>
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building amazing software experiences.
            Specialized in full-stack development with a focus on modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-500 hover:scale-105 animate-pulse-glow group"
              onClick={() => scrollToSection("projects")}
            >
              <span className="group-hover:animate-wiggle inline-block">View My Work</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-effect hover:bg-primary/20 hover:border-primary transition-all duration-500 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect glow-hover cursor-pointer hover:shadow-neon group"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect glow-hover cursor-pointer hover:shadow-neon-secondary group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="p-3 rounded-full glass-effect glow-hover cursor-pointer hover:shadow-neon group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
