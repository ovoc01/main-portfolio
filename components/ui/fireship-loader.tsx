// components/ui/fireship-loader.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface FireshipLoaderProps {
    isLoading: boolean;
    loadingText?: string;
}

const FireshipLoader = ({ isLoading, loadingText = "Preparing for launch..." }: FireshipLoaderProps) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm"
                    aria-live="polite"
                    aria-busy={isLoading}
                >
                    <div className="relative w-32 h-64 sm:w-40 sm:h-80 mb-4">
                        {/* Rocket Body */}
                        <motion.svg
                            viewBox="0 0 100 200"
                            className="absolute bottom-0 left-1/2 w-full h-full"
                            style={{ x: "-50%" }}
                            initial={{ y: 20, scale: 0.95 }} // Start slightly lower and smaller
                            animate={{
                                y: [20, 18, 20, 19, 20, 0, -250], // Initial shake, then liftoff
                                scale: [0.95, 0.95, 0.95, 0.95, 0.95, 1, 0.7], // Scale up then slightly down for perspective
                                transition: {
                                    duration: 4, // Total duration of launch sequence
                                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.7, 1], // Timing for y keyframes
                                    scale: { delay: 2, duration: 2 }, // Scale animation part
                                    ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeOut", "easeIn"],
                                },
                            }}
                            exit={{ y: -300, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
                        >
                            {/* Rocket SVG Path (simplified) */}
                            <defs>
                                <linearGradient id="rocketBodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#4a5568', stopOpacity: 1 }} /> {/* slate-700 */}
                                    <stop offset="50%" style={{ stopColor: '#718096', stopOpacity: 1 }} /> {/* slate-500 */}
                                    <stop offset="100%" style={{ stopColor: '#4a5568', stopOpacity: 1 }} /> {/* slate-700 */}
                                </linearGradient>
                                <linearGradient id="rocketTipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#a0aec0', stopOpacity: 1 }} /> {/* slate-400 */}
                                    <stop offset="100%" style={{ stopColor: '#718096', stopOpacity: 1 }} /> {/* slate-500 */}
                                </linearGradient>
                            </defs>
                            <path
                                d="M50 0 L65 50 L60 180 L40 180 L35 50 Z" // Main body
                                fill="url(#rocketBodyGradient)"
                            />
                            <path
                                d="M50 0 L35 50 L65 50 Z" // Nose cone
                                fill="url(#rocketTipGradient)"
                            />
                            {/* Fins (optional) */}
                            <path d="M60 150 L75 180 L60 180 Z" fill="#4a5568" />
                            <path d="M40 150 L25 180 L40 180 Z" fill="#4a5568" />
                        </motion.svg>

                        {/* Flames */}
                        <motion.div
                            className="absolute bottom-[-20px] left-1/2 w-20 h-32 sm:w-24 sm:h-40" // Adjust size as needed
                            style={{ x: "-50%" }}
                            initial={{ scaleY: 0, opacity: 0 }}
                            animate={{
                                scaleY: [0, 0.3, 1, 1.5, 1.2], // Grow, then flicker, then big for launch
                                opacity: [0, 0.7, 1, 1, 1],
                                y: [0, 0, 0, 0, 10], // Push flames down a bit during full thrust
                                transition: {
                                    duration: 4,
                                    times: [0, 0.4, 0.7, 0.85, 1], // Matches rocket animation points
                                    delay: 0.5, // Flames start after a brief moment
                                },
                            }}
                            exit={{ scaleY: 0, opacity: 0, transition: { duration: 0.2 } }}
                        >
                            {/* Simple layered flame shapes */}
                            <div className="absolute inset-0">
                                <FlameParticle color="#FF5722" delay={0} size="100%" /> {/* Deep Orange */}
                                <FlameParticle color="#FF9800" delay={0.1} size="80%" /> {/* Orange */}
                                <FlameParticle color="#FFC107" delay={0.2} size="60%" /> {/* Amber */}
                            </div>
                        </motion.div>

                        {/* Smoke - multiple particles for a plume effect */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={`smoke-${i}`}
                                className="absolute bottom-[-40px] left-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-gray-400/50 rounded-full"
                                style={{
                                    x: `${Math.random() * 40 - 70}%`, // Spread smoke horizontally
                                }}
                                initial={{ y: 0, scale: 0, opacity: 0 }}
                                animate={{
                                    y: [0, 20 + i * 10, 50 + i * 20], // Billow downwards and spread
                                    scale: [0, 0.5 + Math.random() * 0.5, 1 + Math.random()],
                                    opacity: [0, 1, 0],
                                    transition: {
                                        duration: 2.5,
                                        delay: 1.5 + i * 0.1, // Stagger smoke appearance, start during power up
                                        ease: "easeOut",
                                    },
                                }}
                                exit={{ opacity: 0, scale: 0, transition: { duration: 0.2 } }}
                            />
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } }}
                        exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
                        className="text-sm sm:text-base text-purple-300 tracking-wider"
                    >
                        {loadingText}
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Helper for individual flame particles for a more dynamic look
const FlameParticle = ({ color, delay, size }: { color: string; delay: number; size: string }) => (
    <motion.div
        className="absolute bottom-0 left-1/2 rounded-t-full"
        style={{
            x: "-50%",
            width: size,
            height: '100%', // Takes full height of parent flame container
            backgroundColor: color,
            filter: 'blur(3px)', // Softens the flame edges
        }}
        initial={{ opacity: 0, scaleY: 0.8 }}
        animate={{
            opacity: [0, 1, 0.8, 1, 0.7],
            scaleY: [0.8, 1, 0.9, 1.1, 0.85],
            y: [0, -5, 0, -7, 0], // Flicker up and down
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "mirror",
                delay: delay,
                ease: "easeInOut",
            },
        }}
    />
);

export default FireshipLoader;