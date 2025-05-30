"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const processes = [
    {
        step: "01",
        title: "Receiving Requests",
        items: [
            "Taking requests from customers",
            "Analyzing requirements",
            "Document & interface design",
        ],
        image: "/images/process-1.jpg",
    },
    {
        step: "02",
        title: "Deployment Planning",
        items: [
            "Analyzing and determining resources",
            "Creating a plan",
            "Allocating tasks",
        ],
        image: "/images/process-2.jpg",
    },
    {
        step: "03",
        title: "Product Development",
        items: [
            "Detailed design",
            "Programming implementation",
            "Performing unit tests",
            "Code review by Project Leader",
        ],
        image: "/images/process-3.jpg",
    },
    {
        step: "04",
        title: "Testing & Bug Fixing",
        items: [
            "Module testing",
            "System testing",
            "User acceptance testing",
            "Bug fixing and finalization",
        ],
        image: "/images/process-4.jpg",
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center"></div>
            </div>

            {/* Glowing orbs */}
            <motion.div
                className="absolute top-20 left-20 w-40 h-40 rounded-full bg-indigo-600/10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-600/10 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-indigo-400 font-medium uppercase tracking-wider text-sm block mb-3">
                        Our Methodology
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Our Working Process
                    </h2>
                    <p className="text-indigo-300 max-w-2xl mx-auto">
                        Our product development methodology refined over more
                        than 5 years of experience
                    </p>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.div
                                className="bg-gray-800 border border-gray-700 rounded-xl h-full relative overflow-hidden group"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Image */}
                                <div className="relative h-40 overflow-hidden">
                                    <Image
                                        src={process.image}
                                        alt={process.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                                    <motion.div
                                        className="absolute bottom-4 left-6 text-5xl font-bold text-indigo-600/50 group-hover:text-indigo-500/60 transition-colors"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1 + 0.2,
                                        }}
                                    >
                                        {process.step}
                                    </motion.div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors">
                                        {process.title}
                                    </h3>

                                    <ul className="space-y-2">
                                        {process.items.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay:
                                                        index * 0.1 +
                                                        i * 0.1 +
                                                        0.3,
                                                }}
                                            >
                                                <svg
                                                    className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                                                    {item}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-300 pointer-events-none"></div>
                            </motion.div>

                            {index < 3 && (
                                <div className="hidden lg:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
                                    <motion.svg
                                        className="h-8 w-8 text-indigo-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </motion.svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Process Flow Visualization */}
                <motion.div
                    className="mt-20 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="relative h-[200px] md:h-[300px] w-full rounded-xl overflow-hidden">
                        <Image
                            src="/images/process-flow.jpg"
                            alt="Our Process Flow"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center max-w-2xl px-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Complete End-to-End Solution
                                </h3>
                                <p className="text-indigo-200">
                                    Our comprehensive development process
                                    ensures quality at every stage, from initial
                                    concept to final deployment and support.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
