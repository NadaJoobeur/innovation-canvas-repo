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
    {
      title: "Kubernetes in AWS: Create Cluster in EKS in your own VPC",
      issuer: "Coursera",
      date: "2025",
      lien:"/kubernetes_aws.pdf",
    },
    {
      title: "Pod Management with Kubernetes: Run containerized workloads",
      issuer: "Coursera",
      date: "2025",
      lien:"/Pod_kubernetes.pdf",
    }
  ];

  const activities = [
    {
      title: "General Secretary ",
      organization: "IEEE Computer Society Chapter",
      period: "2023-2024",
  description: "Participated in and helped organize workshops and events, while reporting on activities and outcomes.",
    },
    {
      title: " International Relations & Data Department",
      organization: "AIESEC RUSPINA",
      period: "2024",
    description: "Conducted international calls with representatives from multiple countries to build strategic collaborations, strengthen partnerships with the department, and support cross-border initiatives.",
    },
   
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <Tabs defaultValue="competitions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 glass-effect mb-6 h-9">
            <TabsTrigger value="competitions" className="text-xs">Competitions</TabsTrigger>
            <TabsTrigger value="certificates" className="text-xs">Certificates</TabsTrigger>
            <TabsTrigger value="activities" className="text-xs">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="competitions" className="space-y-4">
            {competitions.map((item, index) => (
              <div
                key={index}
                className="glass-effect p-5 rounded-lg glow-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-gradient-primary shrink-0">
                    <Trophy className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1.5 gap-2">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20 shrink-0">
                        {item.date}
                      </span>
                    </div>
                    <p className="text-primary text-sm font-medium mb-1.5">{item.position}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="certificates">
            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="glass-effect p-4 rounded-lg glow-hover animate-fade-in cursor-pointer transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.08}s` }}
                  onClick={() => window.open(cert.lien, "_blank")}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-gradient-primary shrink-0">
                      <Award className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold mb-0.5">{cert.title}</h3>
                      <p className="text-xs text-primary mb-0.5">{cert.issuer}</p>
                      <p className="text-[11px] text-muted-foreground">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="glass-effect p-5 rounded-lg glow-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-gradient-primary shrink-0">
                    <Star className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1.5 gap-2">
                      <h3 className="text-base font-semibold">{activity.title}</h3>
                      <span className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20 shrink-0">
                        {activity.period}
                      </span>
                    </div>
                    <p className="text-primary text-sm font-medium mb-1.5">{activity.organization}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
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
