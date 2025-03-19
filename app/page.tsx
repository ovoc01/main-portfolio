import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Education from "@/components/education";

export default function Home() {
    return (
        <div className="space-y-10 sm:space-y-16">
            <Hero/>
            <About/>
            <Education/>
            <Experience/>
            <Projects/>
        </div>
    );
}
