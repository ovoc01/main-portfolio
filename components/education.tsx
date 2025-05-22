// Add this at the very top of the file if it's not already in your _app.js or layout
// 'use client'; // Only if this component itself needs client-side interactivity beyond what's shown.
// For styling based on a parent's client-side gradient, this isn't strictly needed here.

import { Badge } from "@/components/ui/badge";
import { Calendar, University } from "lucide-react";

interface EducationItemProps {
    title: string;
    company: string;
    period: string;
    description: string;
    technologies: string[];
}

const EducationItem = ({
                           title,
                           company,
                           period,
                           description,
                           technologies,
                       }: EducationItemProps) => {
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
                        <University className="size-5 text-orange-400" />
                    </div>
                    {/* Company/Institution text: Bright off-white */}
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
                                rounded-full bg-orange-400/30   // Light orange bg, darker orange text
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

const Education = () => {
    const Educations = [
        {
            title: "Master MIAGE (MBDS): Software Engineering & Machine Learning",
            company: "IT University & Université de Côte D'Azur",
            period: "Nov 2024 - Present",
            description:
                "Focused on advanced software engineering principles and machine learning techniques. Developed expertise in distributed computing, cybersecurity, and modern web technologies. Worked on real-world AI applications, optimizing data-driven solutions, and implementing scalable architectures.",
            technologies: [
                "Machine Learning",
                "Advanced Web (MEAN Stack)",
                "Distributed Computing & Web Services",
                "Cybersecurity",
                "Operational Research",
                "Constraint Programming",
                "Software Architecture",
            ],
        },
        {
            title: "Bachelor's in Information Technology",
            company: "IT University",
            period: "Oct 2021 - Nov 2024",
            description:
                "Built a strong foundation in computer science, covering software development, database systems, networking, and applied mathematics. Gained hands-on experience in full-stack development, algorithm optimization, and cloud computing.",
            technologies: [
                "Object-Oriented Programming",
                "System Programming",
                "Network Security",
                "Data Warehousing & Data Mining",
                "Software Architecture",
                "React Native",
                "Algorithm & Optimization",
            ],
        },
    ];

    return (
        <section id="education" className="relative py-20 px-6">
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
                        Education
                    </Badge>
                    {/* Section Title: Bright white */}
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        Education Journey
                    </h2>
                    {/* Section Subtitle: Lighter gray */}
                    <p className="text-neutral-400 mt-2 sm:mt-4 text-lg">
                        A timeline of my professional growth and key achievements
                    </p>
                </div>

                <div className="relative">
                    {Educations.map((educationItem, index) => ( // Changed Education to educationItem for clarity
                        <EducationItem key={index} {...educationItem} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;