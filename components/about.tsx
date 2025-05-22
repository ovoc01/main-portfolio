import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons"; // Assuming GithubLogo is styled for dark theme or inherits color
import Link from "next/link";

const About = () => {
  return (
      <section id="about" className="relative py-20 sm:py-28 px-6">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10 md:gap-16">
            {/* Profile Image - Right column on desktop */}
            <ProfileImage className="mt-0 md:mt-4" />

            {/* Content - Left column on desktop */}
            <div className="flex-1 text-center md:text-left">
              {/* Section Badge: Softer Orange theme */}
              <Badge
                  variant="outline" // Base structure, specific styles override
                  className="
                mb-4 bg-orange-400/20 text-white border-orange-500/60  // Softer orange badge
                px-4 py-1.5 font-medium
              "
              >
                About Me
              </Badge>

              {/* Headline: Bright white */}
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight text-white">
                Passionate about creating impactful web experiences
              </h2>

              {/* Paragraph: Light gray */}
              <p className="text-neutral-300 mb-8 text-base sm:text-lg text-center md:text-justify leading-relaxed">
                Passionate software engineer specializing in full-stack development, machine learning, and AI.
                With expertise in modern web technologies and scalable architectures,
                I build intelligent solutions that bridge software engineering and data science. Always eager to learn and innovate.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                {/* GitHub Button: Primary orange style (mid-tone) */}
                <Link href="https://github.com/ovoc01" target="_blank" rel="noopener noreferrer" legacyBehavior passHref>
                  <Button
className={'hover:shadow-md hover:shadow-orange-700/70 rounded-xl'}
                  >
                    <GithubLogo className="h-5 w-5" /> {/* Ensure GithubLogo is light or inherits text-white */}
                    View Github
                  </Button>
                </Link>

                {/* Download CV Button: Softer orange outline style */}
                <Link href={"/files/CV_RAZAFINDRASOAVA_MIRINDRA_ZO%20.pdf"} target="_blank" rel="noopener noreferrer" legacyBehavior passHref>
                  <Button
                      variant="outline" // Base structure, specific styles override
                      className="
                      text-gray-800
                  "
                  >
                    <Download className="h-5 w-5" />
                    Download CV
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

// Theming for ProfileImage with softer orange
const ProfileImage = ({
                        className,
                        ...props
                      }: HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0", className)} {...props}>
      <div className="
      relative w-full h-full rounded-2xl overflow-hidden
      bg-slate-700/50  // Dark, semi-transparent background for placeholder
      border-2 border-orange-500/30 // Very subtle, softer orange border
      p-1
      shadow-xl shadow-orange-800/20 // Darker, desaturated orange for shadow to avoid it being too bright
    ">
        <Image
            src="/placeholder.svg" // REMEMBER TO REPLACE THIS
            alt="Mirindra Zo RAZAFINDRASOAVA - Profile"
            className="object-cover rounded-[14px]"
            fill
            sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
            priority
        />
      </div>
    </div>
);

export default About;