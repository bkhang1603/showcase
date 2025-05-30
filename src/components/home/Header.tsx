"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed w-full backdrop-blur-md z-50 transition-all duration-300 ${
                scrolled ? "bg-black/90" : "bg-transparent"
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/t2v-logo.svg"
                            alt="T2V Logo"
                            width={120}
                            height={40}
                            priority
                        />
                    </Link>
                </motion.div>

                <nav className="hidden md:flex space-x-8">
                    {[
                        { name: "Home", href: "/" },
                        { name: "Programs", href: "/programs" },
                        { name: "Tech", href: "/tech" },
                        { name: "About", href: "/about" },
                        { name: "Contact", href: "/contact" },
                    ].map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{ y: -3 }}
                        >
                            <Link
                                href={item.href}
                                className="text-white hover:text-indigo-300 transition"
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <motion.button
                    className="md:hidden text-white"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </motion.button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <motion.div
                    className="md:hidden bg-gray-900/95 backdrop-blur-md"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <div className="px-4 py-3 space-y-1">
                        {[
                            { name: "Home", href: "/" },
                            { name: "Programs", href: "/programs" },
                            { name: "Tech", href: "/tech" },
                            { name: "About", href: "/about" },
                            { name: "Contact", href: "/contact" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-white hover:text-indigo-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
