"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Star {
    id: number;
    width: number;
    height: number;
    left: string;
    top: string;
    opacity: number;
    duration: number;
    delay: number;
}

export default function Footer() {
    // Using a static value for server rendering
    const [currentYear, setCurrentYear] = useState(2025);

    // Update the year on the client side only
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const [stars, setStars] = useState<Star[]>([]);

    // Generate stable random values on client-side only
    useEffect(() => {
        const generateStars = () => {
            return [...Array(100)].map((_, i) => ({
                id: i,
                width: Math.random() * 2 + 0.5,
                height: Math.random() * 2 + 0.5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                duration: Math.random() * 5 + 3,
                delay: Math.random() * 5,
            }));
        };

        setStars(generateStars());
    }, []);

    return (
        <footer className="bg-slate-950 text-white py-16 relative overflow-hidden">
            {/* Stars background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: star.width,
                            height: star.height,
                            left: star.left,
                            top: star.top,
                            opacity: star.opacity,
                        }}
                        animate={{
                            opacity: [null, 0.1, 0.8, 0.1],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: star.delay,
                        }}
                    />
                ))}
            </div>

            {/* Galaxy effect */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-900/5 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold mb-4">T2V</h3>
                        <p className="text-gray-400 mb-4">
                            Providing cutting-edge gaming, AR, VR, simulation,
                            and IoT solutions for businesses worldwide.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                {
                                    name: "Facebook",
                                    icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                                },
                                {
                                    name: "Twitter",
                                    icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                                },
                                {
                                    name: "LinkedIn",
                                    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                },
                            ].map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href="#"
                                    className="text-gray-400 hover:text-indigo-400 transition"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.1 * index + 0.5,
                                        duration: 0.3,
                                    }}
                                >
                                    <span className="sr-only">
                                        {social.name}
                                    </span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d={social.icon}
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Services", href: "/services" },
                                { name: "Portfolio", href: "/portfolio" },
                                { name: "Contact", href: "/contact" },
                            ].map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.05 * index + 0.5,
                                        duration: 0.3,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-indigo-400 transition"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {[
                                {
                                    name: "AR Applications",
                                    href: "/services/ar",
                                },
                                {
                                    name: "VR Applications",
                                    href: "/services/vr",
                                },
                                {
                                    name: "Game Development",
                                    href: "/services/games",
                                },
                                {
                                    name: "Simulation",
                                    href: "/services/simulation",
                                },
                                {
                                    name: "IoT Solutions",
                                    href: "/services/iot",
                                },
                            ].map((service, index) => (
                                <motion.li
                                    key={service.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.05 * index + 0.6,
                                        duration: 0.3,
                                    }}
                                >
                                    <Link
                                        href={service.href}
                                        className="text-gray-400 hover:text-indigo-400 transition"
                                    >
                                        {service.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">
                            Newsletter
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form className="flex">
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-slate-800 text-white border-slate-700 border"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-md transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <p>© {currentYear} T2V. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}
