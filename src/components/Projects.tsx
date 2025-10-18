import { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "PharmaLab – Fattouma Bourguiba Hospital",
      description: "Desktop application automating clinical decision-making with AI-driven predictive models. Recommends optimal drug dosages and provides healthcare professionals with an intuitive interface to manage patient treatments.",
      image: "/pharma.png",
      technologies: ["Python", "Electron.js","Machine Learning","AI"],
      category: "desktop",
      github: "https://github.com/NadaJoobeur/Pharmaco",
      live: "https://example.com",
    },
    {
      title: "EpilepTrack",
      description: "An AI-powered platform that assists non-specialists in interpreting EEG signals, developed in collaboration with doctors at Sahloul Hospital, and enabling remote validation by a neurophysiologist.",
      image: "/epilepTrack.png",
      technologies:  ["React.js", "Flask", "MySQL", "Machine Learning", "AI", "Healthcare"],
      category: "web",
      github: "https://github.com/NadaJoobeur/AI-Powered-EEG-Triage-System",
      live: "https://example.com",
    },
    {
      title: "MedVision",
      description: "Web-based platform for end-to-end medical data processing .Supports tabular data & medical images with experiment tracking",
      image: "/medical.png",
      technologies: ["React.js", "Flask", "MySQL", "AI", "Machine Learning"],
      category: "web",
      github: "https://github.com/NadaJoobeur/Medical-Research-Automation-Platform",
      live: "https://example.com",
    },
    {
      title: "Occupational Risk Analysis for Female Agricultural Workers",
      description: "Machine learning project predicting occupational accidents among female agricultural workers, comparing Random Forest and optimized XGBoost models.",
      image: "/agr.jpg",
      technologies: ["Python", "RandomForest", "XGBoost", "SMOTE"],
      category: "ai",
      github: "https://github.com/NadaJoobeur/agriculture-risques-analysis",
      live: "https://example.com",
    },
       {
      title: "Arabic quotes classification",
      description: "This project focuses on the automatic classification of Arabic quotes into predefined thematic categories using Natural Language Processing (NLP) techniques. Given the linguistic richness and complexity of the Arabic language, our work aims to address its specific challenges through a complete pipeline of data collection, preprocessing, and classification.",
      image: "/placeholder.svg",
      technologies: ["Python", "Scikit-learn", "Tashaphyne", "BeautifulSoup"],
      category: "ai",
      github: "https://github.com/NadaJoobeur/agriculture-risques-analysis",
      live: "https://example.com",
    },
    
       {
      title: "ISIMM Website",
      description: "The ISIMM website is an online platform dedicated to education, training, and professional development. It provides comprehensive information on training programs, educational resources, and events organized by the institute.",
      image: "/ISIMM.png",
      technologies: ["React.js", "Tailwind", "Node.js","MySQL"],
      category: "web",
      github: "https://github.com/RefkaMechri/isimm?tab=readme-ov-file",
      live: "https://example.com",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "desktop", label: "Desktop Apps" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and creativity
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              variant={filter === cat.id ? "default" : "outline"}
              className={filter === cat.id ? "bg-gradient-primary" : "glass-effect"}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg overflow-hidden glow-hover card-3d animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-muted overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center gap-4 pb-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/40 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/20 backdrop-blur-sm hover:bg-primary/40 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
