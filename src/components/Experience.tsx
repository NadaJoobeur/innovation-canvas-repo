import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Company Name 1",
      location: "City, Country",
      period: "Summer 2023",
      description: "Worked on developing and maintaining web applications using modern technologies.",
      responsibilities: [
        "Developed new features for the main product",
        "Collaborated with senior developers on code reviews",
        "Improved application performance by 30%",
        "Participated in agile development processes",
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Junior Developer Intern",
      company: "Company Name 2",
      location: "City, Country",
      period: "Summer 2022",
      description: "Gained hands-on experience in full-stack development and DevOps practices.",
      responsibilities: [
        "Built responsive user interfaces",
        "Implemented RESTful APIs",
        "Worked with CI/CD pipelines",
        "Participated in team meetings and sprint planning",
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "Docker"],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:pl-20">
                  <div className="glass-effect p-6 rounded-lg glow-hover">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-secondary border-4 border-background hidden md:block"></div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gradient-primary shrink-0">
                        <Briefcase className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                          <span className="text-sm">{resp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
