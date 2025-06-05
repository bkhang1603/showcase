"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ClientOnly from "@/components/ui/ClientOnly";
import SimpleScene3D from "@/components/ui/SimpleScene3D";
import StarsBackground from "@/components/ui/StarsBackground";

export default function HeroSection() {
    return (
        <section className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center">
            <StarsBackground />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
                    {/* Content */}
                    <motion.div
                        className="space-y-8 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
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
                                {" "}
                                <Link
                                    href="/contact"
                                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-3 rounded-full font-medium transition block"
                                >
                                    Get Started
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {" "}
                                <Link
                                    href="/about"
                                    className="bg-transparent border border-purple-400 text-purple-300 px-8 py-3 rounded-full font-medium hover:bg-purple-900/30 transition block"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* 3D Scene - Optimized */}
                    <motion.div
                        className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                    >
                        <ClientOnly>
                            <SimpleScene3D className="w-full h-full" />
                        </ClientOnly>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
