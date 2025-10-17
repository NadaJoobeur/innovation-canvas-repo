import { Trophy, Award, Medal, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Achievements = () => {
  const competitions = [
    {
      title: "International Coding Competition",
      position: "1st Place",
      date: "2023",
      description: "Won first place among 500+ participants worldwide",
    },
    {
      title: "Hackathon Championship",
      position: "Winner",
      date: "2023",
      description: "Led team to victory with innovative solution",
    },
    {
      title: "Algorithm Challenge",
      position: "Top 10",
      date: "2022",
      description: "Ranked in top 10 out of 1000+ competitors",
    },
  ];

  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "CNCF",
      date: "2022",
    },
  ];

  const activities = [
    {
      title: "Tech Club President",
      organization: "University Tech Society",
      period: "2022-2023",
      description: "Led a team of 50+ members organizing workshops and events",
    },
    {
      title: "Open Source Contributor",
      organization: "Various Projects",
      period: "2020-Present",
      description: "Active contributor to major open-source projects",
    },
    {
      title: "Coding Mentor",
      organization: "Code Academy",
      period: "2021-2023",
      description: "Mentored 30+ students in web development",
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
                  className="glass-effect p-6 rounded-lg glow-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
