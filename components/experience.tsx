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
      <div className="relative pl-8 not-last:pb-12 group">
        {/* Timeline line: Softer, desaturated orange or a dark neutral */}
        <div className="absolute left-0 top-2.5 h-full w-[2px] bg-orange-600/40 group-first:h-[calc(100%-24px)] group-first:top-6">
          {/*
            Dot:
            - Border: Mid-tone orange
            - Background: Dark, blending with overall page background
        */}
          <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-orange-500 bg-slate-800" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {/*
              Icon Holder:
              - Background: Very subtle, light orange tint
          */}
            <div className="flex-shrink-0 size-9 bg-orange-400/20 rounded-full flex items-center justify-center">
              {/* Icon: Mid-tone orange for visibility */}
              <Building2 className="size-5 text-orange-400" />
            </div>
            {/* Company text: Bright off-white */}
            <span className="text-lg font-semibold text-neutral-100">{company}</span>
          </div>
          <div>
            {/* Title text: Brightest white for emphasis */}
            <h3 className="text-xl font-medium text-white">{title}</h3>
            {/* Period text: Light gray */}
            <div className="flex items-center gap-2 mt-1 text-sm text-neutral-300">
              <Calendar className="size-4" />
              <span>{period}</span>
            </div>
          </div>
          {/* Description text: Softer light gray */}
          <p className="text-neutral-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
                <Badge
                    key={tech}
                    // Custom badge style for softer orange theme
                    className="
                                rounwded-full bg-orange-400/30   // Light orange bg, darker orange text
                                border border-orange-500/40                    // Subtle orange border
                                px-2.5 py-0.5 text-xs font-medium              // Adjusted padding and font weight
                            "
                >
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
            {/* Section Badge: Styled for dark theme */}
            <Badge
                variant="outline" // Base structure, specific styles override
                className="
                mb-4 bg-orange-400/20 text-white border-orange-500/60  // Softer orange badge
                px-4 py-1.5 font-medium
              "
            >
              Experience
            </Badge>
            {/* Section Title: Bright white */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Professional Journey
            </h2>
            {/* Section Subtitle: Lighter gray */}
            <p className="text-neutral-400 mt-2 sm:mt-4 text-lg">
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