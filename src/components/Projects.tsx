import { useState } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application powered by AI for intelligent responses and conversation management.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL"],
      category: "ai",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "mobile",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for creating and managing portfolio websites with drag-and-drop builder.",
      image: "/placeholder.svg",
      technologies: ["Vue.js", "Express", "MySQL", "AWS"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
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
              className="glass-effect rounded-lg overflow-hidden glow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-muted overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 pb-6">
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
