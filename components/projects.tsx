import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          loading={'lazy'}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "DbMind",
      description:
          "An intelligent search engine that translates natural language queries into SQL. Supports complex queries like filtering, aggregations, and date-based conditions.",
      image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js", "TypeScript", "Python", "spaCy", "Pandas", "PostgreSQL"],
    },
    {
      title: "Gestion de Stock",
      description:
          "A full-featured stock management system with authentication, inventory tracking, reporting, and predictive stock analysis using machine learning.",
      image: "/placeholder.svg",
      technologies: ["React", "Material UI", "TypeScript", "Spring Boot 3.2.1", "Python", "Scikit-learn", "Pandas", "PostgreSQL"],
      githubUrl: "https://github.com/ovoc01/gestion_stock",
    },
    {
      title: "My Portfolio",
      description:
          "A personal portfolio showcasing projects, skills, and experience, built with a modern UI and responsive design.",
      image: "/placeholder.svg",
      technologies: ["NextJS 15", "Shadcn UI", "Tailwind CSS"],
      githubUrl: "https://github.com/ovoc01/main-portfolio",
    },
    {
      title: "Anemoi",
      description:
          "A fully functional web framework built from scratch to understand key concepts behind Spring (DI, ORM, MVC). It provides a working dependency injection system, a lightweight ORM, and a routing mechanism.",
      image: "/placeholder.svg",
      technologies: ["Java", "Bash"],
      githubUrl: "https://github.com/ovoc01/Anemoi-project",
    },
    {
      title: "Scaffold",
      description:
          "A code generator that creates boilerplate CRUD applications from an existing database schema. Supports PostgreSQL, MySQL, and SQLite. Generates backends for Spring Boot (JPA), Django, and Laravel, as well as frontends for React.js, Angular, and Vue.js.",
      image: "/placeholder.svg",
      technologies: ["Java"],
      githubUrl: "https://github.com/ovoc01/scaf-v2.git",
    },
  ];


  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my best projects and technical achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
