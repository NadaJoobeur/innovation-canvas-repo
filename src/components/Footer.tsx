import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-card/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-xs">
              © {currentYear} NadaJoobeur. Made with{" "}
              <Heart className="inline w-3 h-3 text-primary" /> by a
              passionate developer
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href="https://github.com/NadaJoobeur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect glow-hover"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/nada-joobeur-704461241/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect glow-hover"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:nadajbr725@gmail.com"
              className="p-2 rounded-full glass-effect glow-hover"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
