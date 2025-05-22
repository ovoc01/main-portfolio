import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
      <div className="relative min-h-screen flex items-center justify-center px-6 pt-[10vh] pb-[5vh] overflow-hidden">
        <AnimatedGridPattern
            numSquares={50}
            maxOpacity={0.07} // Keep this subtle on the dynamic gradient
            duration={3}
            className={cn(
                "[mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,white,transparent)]",
                "inset-x-0 inset-y-0 h-full skew-y-12"
            )}
        />
        <div className="relative z-[1] text-center max-w-screen-md">
          {/* Badge: Orange background, light text */}
          <Badge
              className="
            rounded-full border-none
            bg-orange-500/80 hover:bg-orange-500 text-orange-100  // Changed from purple to orange
            px-4 py-1.5 text-sm shadow-md shadow-orange-600/30   
          "
          >
            {/* Zap Icon: Light orange/amber fill */}
            <Zap className="mr-1.5 h-4 w-4 fill-orange-300 text-orange-300" />
            Fullstack Developer
          </Badge>

          {/* Headline: Bright white (can remain neutral and highly contrasted) */}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tight text-white">
            Building Scalable & Engaging Web Experiences
          </h1>

          {/* Paragraph: Light gray (can remain neutral) */}
          <p className="mt-6 text-base md:text-lg text-neutral-300 max-w-xl mx-auto">
            Hey there! I&lsquo;m Mirindra Zo RAZAFINDRASOAVA, a Full Stack Developer who loves
            building cool and scalable web experiences. From crafting beautiful
            frontends to powering robust backends, I bring ideas to life with
            clean code and great design. Let&lsquo;s create something amazing
            together! 🚀
          </p>

          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-4">
            <Link href="#about" passHref legacyBehavior>
              <Button
                  size="lg"
                  className="
                rounded-full text-base font-semibold
                bg-orange-500 hover:bg-orange-600 text-white         // Changed from purple to orange
                shadow-lg shadow-orange-600/40 hover:shadow-orange-700/50 
                focus-visible:ring-orange-400 transition-all duration-200 ease-in-out
                transform hover:scale-105
              "
              >
                See What I Do
                <CircleArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </Link>

            {/* Optional Secondary Button - Themed for Orange */}
            {/*
          <Link href="#contact" passHref legacyBehavior>
            <Button
              size="lg"
              variant="outline" // Base for structure, specific styles override
              className="
                rounded-full text-base font-semibold
                border-orange-500 text-orange-300                   // Orange outline and text
                hover:bg-orange-500/20 hover:text-orange-200      // Orange hover effect
                focus-visible:ring-orange-400 transition-all duration-200 ease-in-out
              "
            >
              Get In Touch
            </Button>
          </Link>
          */}
          </div>
        </div>
      </div>
  );
};

export default Hero;