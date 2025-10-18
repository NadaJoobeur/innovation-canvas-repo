import { useEffect, useState } from "react";
import { Code2, Database, Palette, Server, Smartphone, Cloud ,Brain,Code} from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        { name: "React ", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "chakra_ui", level: 80 },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "Python / Flask", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      icon: Database,
      title: "Database & Tools",
      skills: [
        { name: "PostgreSQL / MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Hadoop/Apache Spark", level: 70 },
        { name: "Docker", level: 75 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS ", level: 80 },
        { name: "CI/CD Pipelines", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "Git / GitHub", level: 95 },
      ],
    },
    {
      icon: Brain,
      title: "ML & DL",
      skills: [
        { name: "CNNs", level: 85 },
        { name: " LSTM", level: 70 },
        { name: "TensorFlow / Keras", level: 75 },
        { name: " U-Net architectures", level: 85 },
      ],
    },
    {
      icon:Code,
      title: "Programming",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "C/C++", level: 95 },
        { name: "R", level: 85 },
      ],
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
            A comprehensive overview of my technical expertise and proficiency levels
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

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${catIndex * 100 + skillIndex * 50}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
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
