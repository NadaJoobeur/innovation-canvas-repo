import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Software Engineering Cycle",
      institution: "ISIMM – Software Engineering Cycle",
      period: "2023 - Present",
      
    },
    {
      degree: "Integrated Preparatory Cycle",
      institution: "ISIMM – Software Engineering Cycle",
      period: "2021 - 2023",
      
    },
  ];

  return (
    <section id="education" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="md:pl-20">
                  <div className="glass-effect p-6 rounded-lg glow-hover">
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block"></div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-full bg-gradient-primary shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                        <p className="text-primary font-medium mb-2">{item.institution}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>


                    <div className="space-y-2">
                    
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

export default Education;
