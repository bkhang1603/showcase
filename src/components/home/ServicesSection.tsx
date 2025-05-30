"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        title: "AR Applications",
        description:
            "Augmented reality solutions for business and entertainment",
        image: "/images/services/ar-application.jpg",
        icon: "/icons/ar-icon.svg",
        href: "/programs/ar",
    },
    {
        title: "VR Applications",
        description:
            "Immersive virtual reality experiences and training simulations",
        image: "/images/services/vr-application.jpg",
        icon: "/icons/vr-icon.svg",
        href: "/programs/vr",
    },
    {
        title: "Simulation",
        description: "High-fidelity simulations for training and visualization",
        image: "/images/services/simulation.jpg",
        icon: "/icons/simulation-icon.svg",
        href: "/programs/simulation",
    },
    {
        title: "IOT Systems",
        description: "Connected device ecosystems and smart solutions",
        image: "/images/services/iot-systems.jpg",
        icon: "/icons/iot-icon.svg",
        href: "/programs/iot",
    },
    {
        title: "PC Games",
        description: "Cutting-edge gaming experiences for desktop platforms",
        image: "/images/services/pc-games.jpg",
        icon: "/icons/game-pc-icon.svg",
        href: "/programs/pc-games",
    },
    {
        title: "Mobile Games",
        description: "Engaging mobile gaming applications for iOS and Android",
        image: "/images/services/mobile-games.jpg",
        icon: "/icons/game-mobile-icon.svg",
        href: "/programs/mobile-games",
    },
    {
        title: "Web Games",
        description:
            "Browser-based gaming solutions with cross-platform support",
        image: "/images/services/web-games.jpg",
        icon: "/icons/game-web-icon.svg",
        href: "/programs/web-games",
    },
    {
        title: "Metaverse",
        description: "Virtual world environments and metaverse experiences",
        image: "/images/services/metaverse.jpg",
        icon: "/icons/metaverse-icon.svg",
        href: "/programs/metaverse",
    },
];

export default function ServicesSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background grid pattern */}
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

            {/* Additional decorative elements */}
            <motion.div
                className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-indigo-500/5 blur-xl"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            <motion.div
                className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-purple-500/5 blur-xl"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.05, 0.1, 0.05],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Our Services
                    </h2>
                    <p className="text-indigo-300 max-w-2xl mx-auto mb-6">
                        We offer cutting-edge solutions in gaming, AR, VR,
                        simulation, and IoT technologies to transform your ideas
                        into reality.
                    </p>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ scale: 1.03, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="group"
                        >
                            <Link href={service.href} className="block">
                                <div className="bg-gray-800 rounded-xl overflow-hidden h-full shadow-lg hover:shadow-indigo-500/20 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                                    <div className="relative h-48 w-full overflow-hidden">
                                        {/* Service image with fallback */}
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                // Fallback to icon if image fails to load
                                                const target =
                                                    e.target as HTMLImageElement;
                                                target.src = service.icon;
                                                target.classList.remove(
                                                    "object-cover"
                                                );
                                                target.classList.add(
                                                    "object-contain",
                                                    "p-8"
                                                );
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                                        {/* Service icon overlay */}
                                        <div className="absolute top-4 right-4 bg-gray-900/50 backdrop-blur-sm p-2 rounded-full">
                                            <Image
                                                src={service.icon}
                                                alt={`${service.title} icon`}
                                                width={24}
                                                height={24}
                                                className="opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="mt-2 text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                                            {service.description}
                                        </p>
                                        <div className="mt-3 flex items-center">
                                            <span className="text-indigo-400 text-sm group-hover:text-indigo-300 transition-colors duration-300">
                                                Explore
                                            </span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-1 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300 group-hover:translate-x-1 transition-transform"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
