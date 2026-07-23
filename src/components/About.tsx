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
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a Software Engineering graduate and full stack developer, currently looking for a developer position where I can keep growing. My focus is on backend development, clean architectures, and APIs, with hands-on experience in DevOps and AI integration.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of coding, I enjoy hackathons and contributing to open-source projects.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-lg glow-hover card-3d text-center group hover:shadow-neon transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-primary mb-4 group-hover:animate-bounce-slow">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
