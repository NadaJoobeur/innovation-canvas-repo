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
    <section id="languages" className="section-padding bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            <span className="gradient-text">Languages</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((item, index) => (
            <div
              key={index}
              className="glass-effect p-5 rounded-lg glow-hover text-center animate-fade-in transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-2 rounded-full bg-gradient-primary mb-3">
                <LanguagesIcon className="w-4 h-4 text-primary-foreground" />
              </div>
              <h3 className="font-medium text-sm mb-1">{item.language}</h3>
              <p className="text-primary text-xs font-medium mb-0.5">{item.level}</p>
              <p className="text-[11px] text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
