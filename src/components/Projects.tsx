import { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Interactive3DCard from "./Interactive3DCard";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "PharmaLink",
      description: "Patient-pharmacy platform: medication search, reservations, and automated prescription reading through a dedicated OCR/LLM microservice. Deployed on AWS via Terraform (Auto Scaling Group, Application Load Balancer, RDS).",
      image: "/pharmalink.png",
      technologies: ["Angular", "Spring Boot", "FastAPI", "PostgreSQL", "Terraform", "AWS"],
      category: "web",
      github: "https://github.com/NadaJoobeur/PharmaLink",
    },
    {
      title: "CoreAssurance",
      description: "Insurance management platform covering the full contract lifecycle: policyholders, quotes, contracts, coverage, agencies, payments, and claims.",
      image: "/CoreAssurance.png",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      category: "web",
      github: "https://github.com/NadaJoobeur/CoreAssurance",
    },
    {
      title: "docker-k8s-cicd-pipeline",
      description: "End-to-end DevOps pipeline demo: a containerized web app deployed to Kubernetes through a full CI/CD pipeline with GitHub Actions, from build to automated deployment.",
      image: "/docker-k8s-cicd-pipeline.png",
      technologies: ["Docker", "Kubernetes", "GitHub Actions", "NGINX"],
      category: "devops",
      github: "https://github.com/NadaJoobeur/docker-k8s-cicd-pipeline",
    },
    {
      title: "System Monitoring Dashboard",
      description: "Real-time system monitoring dashboard tracking CPU, RAM, disk usage and uptime, built with Flask and Chart.js, containerized with Docker and automated with a GitHub Actions CI/CD pipeline.",
      image: "/devops-project.png",
      technologies: ["Flask", "Docker", "GitHub Actions", "Chart.js"],
      category: "devops",
      github: "https://github.com/NadaJoobeur/devops-project",
    },
    {
      title: "PharmaLab – Fattouma Bourguiba Hospital",
      description: "Desktop application automating clinical decision-making with AI-driven predictive models. Recommends optimal drug dosages and provides healthcare professionals with an intuitive interface to manage patient treatments.",
      image: "/PharmaLab.png",
      technologies: ["Python", "Electron.js", "Machine Learning"],
      category: "desktop",
      github: "https://github.com/NadaJoobeur/PharmaLab",
    },
    {
      title: "MedVision",
      description: "Web-based platform for end-to-end medical data processing. Supports tabular data & medical images with experiment tracking.",
      image: "/Medical-Research-Automation-Platform.png",
      technologies: ["React.js", "Flask", "MySQL", "Machine Learning"],
      category: "ai",
      github: "https://github.com/NadaJoobeur/Medical-Research-Automation-Platform",
    },
    {
      title: "EpilepTrack",
      description: "An AI-powered platform that assists non-specialists in interpreting EEG signals, developed in collaboration with doctors at Sahloul Hospital, enabling remote validation by a neurophysiologist.",
      image: "/AI-Powered-EEG-Triage-System.png",
      technologies: ["React.js", "Flask", "MySQL", "Machine Learning", "Healthcare"],
      category: "ai",
      github: "https://github.com/NadaJoobeur/AI-Powered-EEG-Triage-System",
    },
    {
      title: "EEG Seizure Prediction",
      description: "Machine learning pipeline for early epileptic seizure detection from EEG signals (CHB-MIT dataset): signal preprocessing, feature extraction, and SVM-based classification.",
      image: "/eeg-seizure-prediction.png",
      technologies: ["Python", "Signal Processing", "SVM", "Machine Learning"],
      category: "ai",
      github: "https://github.com/NadaJoobeur/eeg-seizure-prediction",
    },
    {
      title: "Occupational Risk Analysis for Female Agricultural Workers",
      description: "Machine learning project predicting occupational accidents among female agricultural workers, comparing Random Forest and optimized XGBoost models.",
      image: "/agriculture-risques-analysis.jpg",
      technologies: ["Python", "Random Forest", "XGBoost", "SHAP"],
      category: "ai",
      github: "https://github.com/NadaJoobeur/agriculture-risques-analysis",
    },
    {
      title: "Arabic Quotes Classification",
      description: "Automatic classification of Arabic quotes into thematic categories using NLP, covering data collection, preprocessing, and model training on 23,000+ labeled samples.",
      image: "/arabic-quotes-classification.jpg",
      technologies: ["Python", "Scikit-learn", "NLP"],
      category: "ai",
      github: "https://github.com/NadaJoobeur/arabic-quotes-classification",
    },
    {
      title: "simulateur-trafic",
      description: "Traffic simulation engine modeling roads, vehicles, and traffic lights, with statistical analysis and congestion detection. Published on PyPI, tested with pytest, and integrated with CI via GitHub Actions.",
      image: "/simulateur-trafic.png",
      technologies: ["Python", "Cython", "pytest", "GitHub Actions"],
      category: "tools",
      github: "https://github.com/NadaJoobeur/simulateur-trafic",
    },
    {
      title: "ISIMM Website",
      description: "Static showcase website for the ISIMM institute: departments, academic programs, events, and resources.",
      image: "/ISIMM_Website.png",
      technologies: ["React.js", "Tailwind", "Node.js", "MySQL"],
      category: "web",
      github: "https://github.com/NadaJoobeur/ISIMM_Website",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "devops", label: "DevOps" },
    { id: "ai", label: "AI/ML" },
    { id: "desktop", label: "Desktop Apps" },
    { id: "tools", label: "Tools" },
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
            <Interactive3DCard
              key={index}
              className="glass-effect rounded-lg overflow-hidden glow-hover animate-slide-up group"
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
            </Interactive3DCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
