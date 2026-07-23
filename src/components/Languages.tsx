import { Languages as LanguagesIcon } from "lucide-react";

const Languages = () => {
  const languages = [
    {
      language: "Arabic",
      level: "Native",
      detail: "Native language",
    },
    {
      language: "French",
      level: "C1",
      detail: "TCF",
    },
    {
      language: "English",
      level: "C1 Advanced",
      detail: "EF SET",
    },
  ];

  return (
    <section id="languages" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Languages</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((item, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-lg glow-hover card-3d text-center group hover:shadow-neon transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-3 rounded-full bg-gradient-primary mb-4 group-hover:animate-bounce-slow">
                <LanguagesIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{item.language}</h3>
              <p className="text-primary text-sm font-medium mb-1">{item.level}</p>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
