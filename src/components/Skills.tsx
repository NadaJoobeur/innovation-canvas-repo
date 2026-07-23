import { Code2, Database, Server, Cloud, Brain, Code } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["Angular", "React", "TypeScript", "Tailwind CSS", "Chakra UI"],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Spring Boot", "Node.js / Express", "Flask", "FastAPI", "RESTful APIs"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["Terraform", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Git"],
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Scikit-learn", "TensorFlow / Keras", "U-Net architectures", "OpenCV", "LLM/VLM integration"],
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "TypeScript", "JavaScript"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with, grounded in real projects and professional experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glass-effect rounded-xl p-6 glow-hover card-3d animate-fade-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
