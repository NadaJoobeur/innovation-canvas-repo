import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern – End-of-Studies Project",
      company: "Capgemini Engineering",
      location: "El Ghazala Technology Park, Ariana, Tunisia",
      period: "February - May 2026",
      description: "Designed and developed PharmaLink, a full-stack patient-pharmacy platform enabling medication search, reservations, and automated prescription reading through a dedicated OCR/LLM microservice, deployed on AWS through an Infrastructure-as-Code pipeline.",
      responsibilities: [
        "Designed and implemented the Angular frontend and Spring Boot backend for a multi-role healthcare platform (patients, pharmacists, admins)",
        "Built an OCR/LLM microservice with FastAPI to extract and validate prescription data from photos",
        "Provisioned and deployed the full infrastructure on AWS (EC2 Auto Scaling Group, Application Load Balancer, RDS) using Terraform",
        "Containerized services with Docker and structured the end-to-end deployment workflow",
      ],
      technologies: ["Angular", "Spring Boot", "FastAPI", "PostgreSQL", "Terraform", "AWS", "Docker"],
    },
      {
      title: "Software Engineering Intern",
      company: "Proxym-IT Group",
      location: "Sousse, Tunisia",
      period: "Summer 2025",
      description: "Designed and developed an internal platform standardizing key vehicle insurance processes, providing a modular, reusable technical base for future projects.",
      responsibilities: [
        "Designed and implemented a platform to standardize vehicle insurance workflows",
        "Built modular and reusable code to accelerate future insurance projects",
        "Collaborated with team members to ensure code quality and maintainability",
        "Participated in requirement analysis and technical decisions within an agile team",
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL","chakra-ui","REST API" ],
    },
    {
    title: "AI & Software Engineering Intern",
    company: "Lab_Tim Laboratory, Faculty of Medicine",
    location: "Monastir, Tunisia",
    period: "Summer 2024",
    description: "Designed and trained U-Net models enhanced with Inception modules for brain lesion segmentation and built a web platform for medical image visualization, preprocessing, and prediction.",
    responsibilities: [
      "Developed U-Net models with Inception modules for brain lesion segmentation",
      "Built a web platform for medical image visualization, preprocessing, and prediction",
      "Implemented AI pipelines to streamline medical imaging workflows",
      "Collaborated with researchers to optimize model performance",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "React", "Flask"],
  },
   {
  title: "Data Engineering Intern",
  company: "TaDa Startup",
  location: "Monastir, Tunisia",
  period: "Summer 2024",
  description: "Extracted and structured a database of over 70,000 entries from PDFs, APIs, and web sources, and automated data processing workflows to improve efficiency.",
  responsibilities: [
    "Extracted and structured data from PDFs, APIs, and web sources",
    "Automated data processing pipelines, improving efficiency by 40%",
    "Cleaned and validated large datasets to ensure accuracy",
    "Collaborated with the team to integrate processed data into applications",
  ],
  technologies: ["Python", "Pandas", "SQL", "APIs", "ETL"],
}
,
  {
  title: "Cybersecurity Intern",
  company: "L’EPI D’OR",
  location: "Sousse, Tunisia",
  period: "Summer 2023",
  description: "Gained hands-on experience in Linux system administration and conducted comprehensive website vulnerability assessments and security scans.",
  responsibilities: [
    "Configured, monitored, and optimized Linux systems",
    "Performed website vulnerability assessments and security scans",
    "Identified and reported security issues with actionable recommendations",
    "Collaborated with the team to improve system and network security",
  ],
  technologies: ["Linux", "Greenbone",  "Kali Linux"],
}


  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="md:pl-16">
                  <div className="glass-effect p-5 rounded-lg glow-hover">
                    {/* Timeline dot */}
                    <div className="absolute left-[18px] top-6 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block"></div>

                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-md bg-gradient-primary shrink-0">
                        <Briefcase className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-semibold mb-0.5">{exp.title}</h3>
                        <p className="text-primary text-sm font-medium mb-1.5">{exp.company}</p>
                        <div className="flex flex-wrap gap-3 text-muted-foreground text-xs mb-3">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{exp.description}</p>

                    <div className="space-y-1.5 mb-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0"></div>
                          <span className="text-xs text-muted-foreground leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
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

export default Experience;
