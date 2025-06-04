"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ClientOnly from "@/components/ui/ClientOnly";
import SimpleScene3D from "@/components/ui/SimpleScene3D";

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
    color: string;
}

export default function HeroSection() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Cyan/Tokyo themed color palette for particles
        const colors = [
            "bg-cyan-500/90",
            "bg-blue-500/90",
            "bg-indigo-500/90",
            "bg-teal-500/90",
            "bg-sky-500/90",
            "bg-purple-500/90",
        ];

        const generateParticles = () => {
            return [...Array(30)].map((_, i) => ({
                id: i,
                width: Math.random() * 8 + 3,
                height: Math.random() * 8 + 3,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animY: Math.random() * -120 - 40,
                animX: (Math.random() - 0.5) * 60,
                duration: Math.random() * 12 + 10,
                delay: Math.random() * 3 + 1,
                color: colors[Math.floor(Math.random() * colors.length)],
            }));
        };

        const timer = setTimeout(() => {
            setParticles(generateParticles());
            setIsLoaded(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Tokyo-inspired gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-cyan-900/40 to-blue-900/60"></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.3) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.3) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                ></div>
            </div>

            {/* Animated particles with Tokyo theme */}
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
                            filter: "blur(1px) brightness(1.2)",
                            boxShadow: "0 0 6px 1px rgba(6, 182, 212, 0.4)",
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                            y: [0, particle.animY],
                            x: [0, particle.animX],
                            opacity: [0, 0.8, 0],
                            scale: [0.8, 1.2, 0.5],
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

            <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
                <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
                    {/* Left side - Text content */}
                    <motion.div
                        className="lg:order-1 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
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
                            T2V is dedicated to providing the best gaming, AR,
                            VR, simulation, applications, and IOT experiences
                            for our customers. We are constantly pushing the
                            envelope when it comes to innovation and technology.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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
                                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-full font-medium transition block"
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
                                    className="bg-transparent border border-cyan-400 text-cyan-300 px-8 py-3 rounded-full font-medium hover:bg-cyan-900/30 transition block"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Tokyo 3D Scene */}
                    <motion.div
                        className="lg:order-2 h-[400px] lg:h-[600px] relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {" "}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden">
                            <ClientOnly
                                fallback={
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-900/20 to-blue-900/30 rounded-2xl">
                                        <div className="text-center">
                                            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                            <div className="text-cyan-300 text-sm">
                                                Loading 3D Scene...
                                            </div>
                                        </div>
                                    </div>
                                }
                            >
                                <SimpleScene3D className="w-full h-full" />
                            </ClientOnly>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
                    className="text-cyan-300"
                >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                </svg>
            </motion.div>
        </section>
    );
}
