"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Define particle type
interface Particle {
    id: number;
    width: number;
    height: number;
    left: string;
    top: string;
    animY: number;
    animX: number;
    duration: number;
    delay: number;
    color: string; // Add color property for vibrant particles
}

export default function HeroSection() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isLoaded, setIsLoaded] = useState(false); // Generate stable random values on client-side only
    useEffect(() => {
        // Vibrant color palette for particles with higher opacity and glow effects
        const colors = [
            "bg-purple-500/90",
            "bg-indigo-500/90",
            "bg-blue-500/90",
            "bg-cyan-500/90",
            "bg-emerald-500/90",
            "bg-pink-500/90",
            "bg-rose-500/90",
        ];
        const generateParticles = () => {
            return [...Array(40)].map((_, i) => ({
                id: i,
                width: Math.random() * 12 + 4, // Slightly larger particles
                height: Math.random() * 12 + 4, // Slightly larger particles
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animY: Math.random() * -150 - 50, // More dramatic vertical movement
                animX: (Math.random() - 0.5) * 80, // More dramatic horizontal movement
                duration: Math.random() * 10 + 8, // Slightly faster animation
                delay: Math.random() * 3 + 2, // Adjusted delay to prevent initial flicker
                color: colors[Math.floor(Math.random() * colors.length)], // Random vibrant color
            }));
        };

        // Set a small timeout to ensure DOM is ready before animation starts
        const timer = setTimeout(() => {
            setParticles(generateParticles());
            setIsLoaded(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {" "}
            {/* Background with modern gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/60 to-indigo-900/80"></div>
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                ></div>
            </div>
            {/* Animated particles - now with more vibrant colors */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className={`absolute rounded-full ${particle.color}`}
                        style={{
                            width: particle.width,
                            height: particle.height,
                            left: particle.left,
                            top: particle.top,
                            filter: "blur(2px) brightness(1.3)", // Enhanced blur and brightness for better glow effect
                            boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.3)", // Add glow effect
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            y: [0, particle.animY],
                            x: [0, particle.animX],
                            opacity: [0, 0.9, 0], // Higher peak opacity
                            scale: [0.8, 1.3, 0.5], // Enhanced scaling for more dynamic effect
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "linear",
                            delay: particle.delay,
                        }}
                    />
                ))}
            </motion.div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                            Innovative
                        </span>{" "}
                        Technology Solutions
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-gray-200 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        T2V is dedicated to providing the best gaming, AR, VR,
                        simulation, applications, and IOT experiences for our
                        customers. We are constantly pushing the envelope when
                        it comes to innovation and technology.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-medium transition block"
                            >
                                Get Started
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/about"
                                className="bg-transparent border border-indigo-400 text-indigo-300 px-8 py-3 rounded-full font-medium hover:bg-indigo-900/30 transition block"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            {/* Bottom scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-300"
                >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                </svg>
            </motion.div>
        </section>
    );
}
