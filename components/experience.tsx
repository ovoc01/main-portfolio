import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer | AI Engineer",
      company: "Self Employed",
      period: "Jan 2025 - Present",
      description:
          "Building intelligent and scalable web applications by integrating modern AI and machine learning solutions. Specializing in full-stack development, API design, and data-driven applications.",
      technologies: [
        "React", "Node.js", "Shadcn", "Tailwind", "TypeScript",
        "Python", "FastAPI", "MongoDB", "PostgreSQL", "React Native"
      ],
    },
    {
      title: "Full Stack Developer (Internship)",
      company: "Colas Madagascar",
      period: "Aug 2024 - Nov 2024",
      description:
          "Designed and developed a full-stack stock management system with microservices architecture. Implemented authentication, user management, and a predictive analytics module for stock forecasting.",
      technologies: [
        "React", "Spring Boot", "PostgreSQL (PostGIS)", "Docker",
        "Redis", "Machine Learning (ARIMA)", "Flask"
      ],
    },
    {
      title: "Full Stack Developer (Student Projects)",
      company: "IT University",
      period: "2021 - 2024",
      description:
          "Worked on multiple academic projects, gaining hands-on experience in full-stack development, cloud computing, and AI-driven applications. Developed scalable applications, optimized database performance, and implemented advanced algorithms.",
      technologies: [
        "React", "NestJS", "PostgreSQL", "Docker", "Redis",
        "Machine Learning", "Cloud Computing"
      ],
    },
  ];


  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
