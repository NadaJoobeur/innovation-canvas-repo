import { Code2, Server, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Designing maintainable, well-structured systems",
    },
    {
      icon: Server,
      title: "Backend Focus",
      description: "APIs and services that hold up in production",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team player with strong communication",
    },
    {
      icon: Award,
      title: "Reliability",
      description: "Committed to delivering quality work",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-in-left">
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
              I'm a Software Engineering graduate and full stack developer, currently looking for a developer position where I can keep growing. My focus is on backend development, clean architectures, and APIs, with hands-on experience in DevOps and AI integration.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Outside of coding, I enjoy hackathons and contributing to open-source projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-effect p-4 rounded-lg glow-hover text-center transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-2 rounded-full bg-gradient-primary mb-3">
                  <item.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
