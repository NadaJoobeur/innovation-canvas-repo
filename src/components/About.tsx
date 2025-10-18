import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team player with strong communication",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering quality",
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
             I'm a third-year Software Engineering student passionate about building web applications that are both scalable and high-performance, often integrating AI solutions. I enjoy working on projects from start to finish—from design to deployment—and love finding creative, efficient ways to solve problems.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
             Technology has always driven my curiosity, and I’m constantly looking to learn, grow, and explore new tools and ideas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
             Outside of coding, I enjoy participating in hackathons, contributing to open-source projects, and collaborating with others in the tech community.
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
