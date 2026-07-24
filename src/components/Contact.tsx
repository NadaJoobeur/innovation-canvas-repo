import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nadajbr725@gmail.com",
      href: "mailto:nadajbr725@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 29 884 210",
      href: "tel:+21629884210",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "nada-joobeur",
      href: "https://www.linkedin.com/in/nada-joobeur-704461241/",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Open to <span className="gradient-text">Opportunities</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full mb-3"></div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            I'm actively looking for a developer position. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 animate-fade-in">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-3 glass-effect p-4 rounded-lg glow-hover transition-all duration-300"
            >
              <div className="p-2 rounded-md bg-gradient-primary shrink-0">
                <item.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
