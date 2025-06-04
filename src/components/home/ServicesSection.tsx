"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import images from "@/assets/images";
import icons from "@/assets/icons";

const services = [
    {
        title: "AR Applications",
        description:
            "Augmented reality solutions for business and entertainment",
        image: images.ar,
        icon: icons.ar,
        href: "/programs/ar",
    },
    {
        title: "VR Applications",
        description:
            "Immersive virtual reality experiences and training simulations",
        image: images.vr,
        icon: icons.vr,
        href: "/programs/vr",
    },
    {
        title: "Simulation",
        description: "High-fidelity simulations for training and visualization",
        image: images.simulation,
        icon: icons.vr,
        href: "/programs/simulation",
    },
    {
        title: "IOT Systems",
        description: "Connected device ecosystems and smart solutions",
        image: images.iot,
        icon: icons.iot,
        href: "/programs/iot",
    },
    {
        title: "PC Games",
        description: "Cutting-edge gaming experiences for desktop platforms",
        image: images.pc,
        icon: icons.vr,
        href: "/programs/pc-games",
    },
    {
        title: "Mobile Games",
        description: "Engaging mobile gaming applications for iOS and Android",
        image: images.mobile,
        icon: icons.vr,
        href: "/programs/mobile-games",
    },
    {
        title: "Web Games",
        description:
            "Browser-based gaming solutions with cross-platform support",
        image: images.web,
        icon: icons.vr,
        href: "/programs/web-games",
    },
    {
        title: "Metaverse",
        description: "Virtual world environments and metaverse experiences",
        image: images.metaverse,
        icon: icons.ar,
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
                            className="group"
                            transition={{ duration: 0.5 }}
                        >
                            <Link href={service.href} className="block">
                                {" "}
                                <div className="bg-gray-800 rounded-xl overflow-hidden h-full shadow-lg hover:shadow-indigo-500/20 border border-gray-700 hover:border-indigo-500 transition-all duration-700">
                                    <div className="relative h-48 w-full overflow-hidden group-hover:after:opacity-10 after:absolute after:inset-0 after:bg-indigo-500/0 after:opacity-0 after:transition-opacity after:duration-700 after:ease-out">
                                        {/* Service image with fallback */}{" "}
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-all duration-700 ease-out group-hover:filter group-hover:brightness-105"
                                            onError={(e) => {
                                                // Fallback if image fails to load
                                                const target =
                                                    e.target as HTMLImageElement;
                                                target.src =
                                                    typeof service.icon ===
                                                    "string"
                                                        ? service.icon
                                                        : service.icon.src;
                                                target.classList.remove(
                                                    "object-cover"
                                                );
                                                target.classList.add(
                                                    "object-contain",
                                                    "p-8"
                                                );
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-55 transition-all duration-700 ease-out"></div>
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
                                            </span>{" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-1 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-700 ease-out"
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
