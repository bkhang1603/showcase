"use client";

import icons from "@/assets/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import StarsBackground from "@/components/ui/StarsBackground";

const processes = [
    {
        step: "01",
        title: "Receiving Requests",
        items: [
            "Taking requests from customers",
            "Analyzing requirements",
            "Document & interface design",
        ],
        image: icons.request,
    },
    {
        step: "02",
        title: "Deployment Planning",
        items: [
            "Analyzing and determining resources",
            "Creating a plan",
            "Allocating tasks",
        ],
        image: icons.deployment,
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
        image: icons.product,
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
        image: icons.testing,
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-700/20">
            <StarsBackground />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-purple-400 font-medium uppercase tracking-wider text-sm bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 inline-block mb-3">
                        Our Methodology
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent">
                        Our Working Process
                    </h2>
                    <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Our product development methodology refined over more
                        than 5 years of experience
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
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
                            {" "}
                            <motion.div
                                className="bg-slate-900/50 border border-purple-500/20 rounded-xl h-full relative overflow-hidden group backdrop-blur-sm"
                                whileHover={{
                                    y: -5,
                                    borderColor: "rgba(168, 85, 247, 0.4)",
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Image */}
                                <div className="relative h-40 overflow-hidden">
                                    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
                                        <Image
                                            src={process.image}
                                            alt={process.title}
                                            width={120}
                                            height={120}
                                            className="object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-0 invert group-hover:drop-shadow-lg"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                    <motion.div
                                        className="absolute bottom-4 left-6 text-5xl font-bold text-purple-600/60 group-hover:text-purple-500/80 transition-colors"
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
                                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
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
                                                    className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0"
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
                                                <span className="text-slate-300 group-hover:text-slate-100 transition-colors">
                                                    {item}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-indigo-600/0 group-hover:from-purple-600/10 group-hover:to-indigo-600/10 transition-all duration-300 pointer-events-none rounded-xl"></div>
                            </motion.div>{" "}
                            {index < 3 && (
                                <div className="hidden lg:block absolute top-1/2 -right-7 transform -translate-y-1/2 z-10">
                                    <motion.svg
                                        className="h-8 w-8 text-purple-500"
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
                </div>{" "}
                {/* Process Flow Visualization */}
                <motion.div
                    className="mt-20 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="relative h-[200px] md:h-[300px] w-full rounded-xl overflow-hidden border border-purple-500/20">
                        <Image
                            src="/grid.svg"
                            alt="Our Process Flow"
                            fill
                            className="object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-purple-950/60 to-slate-900/90"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center max-w-2xl px-4">
                                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent mb-4">
                                    Complete End-to-End Solution
                                </h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Our comprehensive development process
                                    ensures quality at every stage, from initial
                                    concept to final deployment and support.
                                </p>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/30"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-indigo-500/30"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-500/30"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-indigo-500/30"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
