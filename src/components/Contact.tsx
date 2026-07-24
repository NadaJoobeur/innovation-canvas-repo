import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

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
    {
      icon: MapPin,
      label: "Location",
      value: "Monastir, Tunisia",
      href: "https://www.bing.com/maps/search?mepi=0%7E%7EEmbedded%7ELargeMapLink&ty=18&vdpid=7214452655249162241&v=2&sV=1&FORM=MIRE&q=Monastir%2C+Gouvernorat+Monastir%2C+Tunisie&ss=id.sid%3Ab281cb3d-bf68-e4ac-1396-284768f3912e&ppois=35.77075958251953_10.828051567077637_Monastir%2C+Gouvernorat+Monastir%2C+Tunisie_%7E&cp=35.770760%7E10.828052&lvl=16&style=r",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Open to <span className="gradient-text">Opportunities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm actively looking for a developer position. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-left">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start gap-4 glass-effect p-4 rounded-lg glow-hover transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-gradient-primary shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
