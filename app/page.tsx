// Add this at the very top of the file
'use client';

import { useEffect, useRef } from 'react';
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Projects from "@/components/projects"
import Footer from "@/components/footer";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number | null>(null);

    // State for our light source's properties
    const lightSource = useRef({
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 0),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 0),
        dx: (Math.random() - 0.5) * 2, // Random initial horizontal speed & direction
        dy: (Math.random() - 0.5) * 2, // Random initial vertical speed & direction
        size: 100 + Math.random() * 300, // Initial size between 400 and 700
        size_dx: (Math.random() - 0.5) * 0.5, // Speed of size change
        targetX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 0),
        targetY: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 0),
        targetSize: 400 + Math.random() * 300,
    });

    useEffect(() => {
        const currentContainer = containerRef.current;
        if (!currentContainer) return;

        const animateLight = () => {
            const ls = lightSource.current;
            const rect = currentContainer.getBoundingClientRect(); // Get current bounds

            // Move towards target
            const ease = 0.02; // Easing factor for smooth movement
            ls.x += (ls.targetX - ls.x) * ease;
            ls.y += (ls.targetY - ls.y) * ease;
            ls.size += (ls.targetSize - ls.size) * ease * 0.5; // Slower size change

            // If close to target, pick a new target
            if (Math.abs(ls.targetX - ls.x) < 10 && Math.abs(ls.targetY - ls.y) < 10) {
                ls.targetX = Math.random() * rect.width;
                ls.targetY = Math.random() * rect.height;
            }
            if (Math.abs(ls.targetSize - ls.size) < 10) {
                ls.targetSize = 300 + Math.random() * 500; // New target size between 300 and 800
            }

            // Keep within bounds (optional, or let it wander off slightly)
            // For this example, we'll let targetting handle staying roughly in view.

            currentContainer.style.setProperty('--mouse-x', `${ls.x}px`);
            currentContainer.style.setProperty('--mouse-y', `${ls.y}px`);
            currentContainer.style.setProperty('--light-size', `${Math.max(200, ls.size)}px`); // Ensure min size

            animationFrameId.current = requestAnimationFrame(animateLight);
        };

        animationFrameId.current = requestAnimationFrame(animateLight);

        // Mouse interaction (optional - can override or influence automatic movement)
        const handleMouseMove = (event: MouseEvent) => {
            const rect = currentContainer.getBoundingClientRect();
            // Make mouse influence the target, not directly set x/y
            lightSource.current.targetX = event.clientX - rect.left;
            lightSource.current.targetY = event.clientY - rect.top;
            // Optionally, make mouse temporarily increase size or intensity
            // lightSource.current.targetSize = 600 + Math.random() * 200;
        };

        currentContainer.addEventListener('mousemove', handleMouseMove);


        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            currentContainer.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="
                space-y-0 text-white min-h-screen
                relative overflow-hidden
                bg-[radial-gradient(circle_var(--light-size,_500px)_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_#f97316_0%,_#7c2d12_60%,_black_90%)]
            "
            style={{
                // Initialize CSS variables (optional, Tailwind fallbacks usually work)
                // '--mouse-x': '50%',
                // '--mouse-y': '50%',
                // '--light-size': '500px',
            } as React.CSSProperties}
        >
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Education/>
                <Experience/>
                <Projects/>
            </main>
            <Footer/>
        </div>
    );
}