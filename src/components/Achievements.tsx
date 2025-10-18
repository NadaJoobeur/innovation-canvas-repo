import { Trophy, Award, Medal, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "./ui/card";

const Achievements = () => {
  const competitions = [
{
  title: "TWISE NIGHT",
  position: "National Top 10",
  date: "2025",
  description: "Ranked among the top 10 nationally out of 100+ participants",
},

    {
      title: "Entrepreneurship Competition",
      position: "Initiator Status",
      date: "2025",
      description: "Competition organized by the University of Monastir, where our team presented an innovative project idea.",
  
    },
    {
      title: "La Nuit de l'Info",
      position: "1st Place ",
      date: "2024",
      description: "National hackathon where our team developed an innovative web application in one night, guided by professional mentors and evaluated on design, architecture, and collaboration.",
    },
  ];

  const certificates = [
    {
      title: " Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2025",
      lien:"/cloudFnd.pdf",
    },
    {
      title: "Cloud Operations",
      issuer: "Amazon Web Services",
      date: "2025",
       lien:"/cloudOpr.pdf",
    },
    {
      title: "Create a VPC Using AWS",
      issuer: "Coursera",
      date: "2025",
      lien:"/VPC.pdf",     
    },
    {
      title: "Jenkins  : Automating your delivery pipeline",
      issuer: "Coursera",
      date: "2025",
      lien:"/Jenkins.pdf",
    },
    
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      date: "2024",
      lien:"/DL.pdf",
    },
      {
      title: "Building Transformer-Based NLP Applications",
      issuer: "NVIDIA",
      date: "2024",
      lien:"/NLP.pdf",
    },
  ];

  const activities = [
    {
      title: "General Secretary ",
      organization: "IEEE Computer Society Chapter",
      period: "2023-2024",
  description: "Participated in and helped organize workshops and events, while reporting on activities and outcomes.",
    },
    {
      title: " International Relations Department",
      organization: "AIESEC RUSPINA",
      period: "2024",
    description: "Facilitated international collaborations, coordinated projects, and actively contributed to global initiatives and open-source projects.",
    },
   
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="competitions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-effect mb-8">
            <TabsTrigger value="competitions">Competitions</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="competitions" className="space-y-6">
            {competitions.map((item, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-lg glow-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-primary shrink-0">
                    <Trophy className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">{item.position}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

         <TabsContent value="certificates">
  <div className="grid md:grid-cols-2 gap-6">
    {certificates.map((cert, index) => (
      <div
        key={index}
        className="glass-effect p-6 rounded-lg glow-hover animate-fade-in cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        style={{ animationDelay: `${index * 0.1}s` }}
        onClick={() => window.open(cert.lien, "_blank")} // 🔹 ouvre le PDF dans un nouvel onglet
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-gradient-primary shrink-0">
            <Award className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold mb-1">{cert.title}</h3>
            <p className="text-sm text-primary mb-1">{cert.issuer}</p>
            <p className="text-xs text-muted-foreground">{cert.date}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</TabsContent>


          <TabsContent value="activities" className="space-y-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="glass-effect p-6 rounded-lg glow-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gradient-primary shrink-0">
                    <Star className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{activity.title}</h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                        {activity.period}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">{activity.organization}</p>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Achievements;
