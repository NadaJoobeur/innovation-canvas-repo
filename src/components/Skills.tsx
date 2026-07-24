import { Code2, Database, Server, Cloud, Brain, Code, Layers } from "lucide-react";

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
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
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
      icon: Layers,
      title: "Big Data",
      skills: ["Hadoop", "Spark"],
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "Python", "TypeScript", "JavaScript"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full mb-3"></div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I work with, grounded in real projects and professional experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glass-effect rounded-lg p-5 glow-hover animate-fade-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-gradient-primary">
                  <category.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
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
