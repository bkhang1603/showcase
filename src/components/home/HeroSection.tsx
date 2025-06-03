"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Scene3D from "../ui/Scene3D";

export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Tech Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-gray-900"></div>
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-indigo-500/30"
                        style={{
                            width: Math.random() * 8 + 2,
                            height: Math.random() * 8 + 2,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, Math.random() * -100 - 50],
                            x: [0, (Math.random() - 0.5) * 50],
                            opacity: [0, 0.7, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Floating tech elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute w-32 h-32 top-[15%] left-[10%]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Image
                        src="/images/vr-element.png"
                        alt="VR Element"
                        fill
                        className="object-contain"
                    />
                </motion.div>

                <motion.div
                    className="absolute w-40 h-40 bottom-[20%] right-[15%]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Image
                        src="/images/ar-element.png"
                        alt="AR Element"
                        fill
                        className="object-contain"
                    />
                </motion.div>

                <motion.div
                    className="absolute w-24 h-24 top-[40%] right-[10%]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                >
                    <Image
                        src="/images/iot-element.png"
                        alt="IoT Element"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </div>            <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center">
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

                    {/* Right side - 3D Scene */}
                    <motion.div
                        className="lg:order-2 h-[400px] lg:h-[600px] relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-indigo-500/20">
                            <Scene3D className="w-full h-full" />
                            
                            {/* Optional overlay with tech info */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/30">
                                    <motion.p 
                                        className="text-indigo-300 text-sm"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.2 }}
                                    >
                                        Interactive 3D Technology Preview
                                    </motion.p>
                                </div>
                            </div>                        </div>
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
                    className="text-indigo-300"
                >
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                </svg>
            </motion.div>
        </section>
    );
}
