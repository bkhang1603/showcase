"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import images from "@/assets/images";

interface Particle {
    id: number;
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
}

export default function ApplicationSection() {
    const [particles, setParticles] = useState<Particle[]>([]);

    // Generate stable random values on client-side only
    useEffect(() => {
        const generateParticles = () => {
            return [...Array(30)].map((_, i) => ({
                id: i,
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
            }));
        };

        setParticles(generateParticles());
    }, []);

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 relative overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-white/5"
                        style={{
                            width: particle.width,
                            height: particle.height,
                            left: particle.left,
                            top: particle.top,
                        }}
                        animate={{
                            opacity: [0.1, 0.5, 0.1],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="text-indigo-400 font-medium uppercase tracking-wider text-sm">
                                Transformative Technology
                            </span>
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            3D APPLICATION INTO LIFE
                        </h2>
                        <p className="text-indigo-200 mb-6">
                            Our products are specifically designed to address
                            the unique needs of each of our clients. We offer
                            the latest in gaming, AR, VR, simulation, and IoT
                            technology, providing a comprehensive platform that
                            can be tailored to suit any business.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "Custom AR/VR Solutions",
                                "Interactive 3D Environments",
                                "IoT Integration Services",
                                "Simulation Systems",
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.1,
                                    }}
                                >
                                    <div className="mr-3 mt-1 text-indigo-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-indigo-100">{feature}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/tech"
                                className="inline-flex items-center text-indigo-300 hover:text-indigo-100 transition group"
                            >
                                Explore our technology
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Main image */}
                            <motion.div
                                className="rounded-lg shadow-2xl overflow-hidden relative z-0"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={images.threeDApplication}
                                    alt="3D Application Visualization"
                                    width={800}
                                    height={450}
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Decorative image 1 */}
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-lg overflow-hidden border-4 border-gray-800 shadow-xl z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <Image
                                    src={images.vr}
                                    alt="VR Experience"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Decorative image 2 */}
                            <motion.div
                                className="absolute -top-8 -right-8 w-40 h-28 rounded-lg overflow-hidden border-4 border-gray-800 shadow-xl z-10"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <Image
                                    src={images.ar}
                                    alt="AR Experience"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-indigo-600/20 rounded-lg blur-xl -z-10 opacity-50"></div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            className="absolute -top-8 -right-8 w-16 h-16 bg-indigo-600/20 rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-12 -left-12 w-24 h-24 bg-purple-600/20 rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0.7, 0.5],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
