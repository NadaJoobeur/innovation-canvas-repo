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
    <section id="education" className="section-padding bg-card/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block"></div>

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="md:pl-16">
                  <div className="glass-effect p-5 rounded-lg glow-hover">
                    <div className="absolute left-[18px] top-6 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block"></div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-gradient-primary shrink-0">
                        <GraduationCap className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold mb-0.5">{item.degree}</h3>
                        <p className="text-primary text-sm font-medium mb-1.5">{item.institution}</p>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>
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
