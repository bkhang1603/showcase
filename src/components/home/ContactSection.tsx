"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Star {
    id: number;
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
}

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stars, setStars] = useState<Star[]>([]);

    // Generate stable random values on client-side only
    useEffect(() => {
        const generateStars = () => {
            return [...Array(50)].map((_, i) => ({
                id: i,
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                duration: Math.random() * 3 + 2,
                delay: Math.random() * 5,
            }));
        };

        setStars(generateStars());
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Here you would typically send the data to your API
        console.log("Form submitted:", formState);

        // Reset form
        setFormState({ name: "", email: "", message: "" });
        setIsSubmitting(false);

        // Show success message
        alert("Thank you for your message! We'll get back to you soon.");
    };
    return (
        <section className="py-24 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden border-t border-purple-500/10">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            {/* Stars with purple/indigo colors */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"
                        style={{
                            width: star.width,
                            height: star.height,
                            left: star.left,
                            top: star.top,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.2, 1],
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

            {/* Purple glowing orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.7, 0.4],
                        x: [0, -25, 0],
                        y: [0, 25, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {" "}
                    <div className="text-center mb-12">
                        <span className="text-purple-400 font-medium uppercase tracking-wider text-sm bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 inline-block mb-3">
                            Get in Touch
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent">
                            Contact Us
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Ready to transform your ideas into reality? Our team
                            is here to help you with any questions or inquiries.
                        </p>
                    </div>{" "}
                    <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <motion.div
                                className="bg-gradient-to-br from-slate-900 via-purple-950/30 to-slate-900 p-8 text-white relative overflow-hidden"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/20 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-600/20 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2"></div>

                                <div className="relative">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                                        <span className="mr-3">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-7 w-7 text-purple-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                />
                                            </svg>
                                        </span>
                                        Contact Us
                                    </h2>
                                    <p className="mb-8 text-slate-300 leading-relaxed">
                                        Ready to bring your ideas to life? Get
                                        in touch with our team to discuss your
                                        project.
                                    </p>

                                    <div className="space-y-6 mt-8">
                                        <motion.div
                                            className="flex items-start"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.3,
                                            }}
                                        >
                                            {" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 mr-3 text-purple-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <div>
                                                <h3 className="font-medium text-purple-300">
                                                    Address
                                                </h3>
                                                <p className="text-slate-200">
                                                    123 Innovation Street, Tech
                                                    City
                                                </p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className="flex items-start"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.4,
                                            }}
                                        >
                                            {" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 mr-3 text-purple-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <div>
                                                <h3 className="font-medium text-purple-300">
                                                    Email
                                                </h3>
                                                <p className="text-slate-200">
                                                    info@t2vcompany.com
                                                </p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            className="flex items-start"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.5,
                                            }}
                                        >
                                            {" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 mr-3 text-purple-400"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            <div>
                                                <h3 className="font-medium text-purple-300">
                                                    Phone
                                                </h3>
                                                <p className="text-slate-200">
                                                    +1 (123) 456-7890
                                                </p>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Map image */}
                                    <motion.div
                                        className="mt-10 relative h-40 rounded-lg overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.6,
                                        }}
                                    >
                                        <Image
                                            src="/images/map.jpg"
                                            alt="Office Location"
                                            fill
                                            className="object-cover"
                                        />{" "}
                                        <div className="absolute inset-0 bg-purple-900/40"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-purple-600 rounded-full p-2 shadow-lg shadow-purple-500/25">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-white"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="p-8 relative"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {" "}
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl"></div>
                                <form
                                    className="space-y-4 relative"
                                    onSubmit={handleSubmit}
                                >
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-slate-300 mb-1"
                                        >
                                            Name
                                        </label>
                                        <motion.input
                                            whileFocus={{ scale: 1.01 }}
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-slate-800/70 border border-purple-500/30 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-slate-300 mb-1"
                                        >
                                            Email
                                        </label>
                                        <motion.input
                                            whileFocus={{ scale: 1.01 }}
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 bg-slate-800/70 border border-purple-500/30 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-slate-300 mb-1"
                                        >
                                            Message
                                        </label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.01 }}
                                            id="message"
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2 bg-slate-800/70 border border-purple-500/30 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-slate-400"
                                            placeholder="How can we help you?"
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-md transition shadow-lg hover:shadow-purple-500/25 ${
                                            isSubmitting
                                                ? "opacity-70 cursor-not-allowed"
                                                : ""
                                        }`}
                                    >
                                        {isSubmitting
                                            ? "Sending..."
                                            : "Send Message"}
                                    </motion.button>

                                    {/* Social links */}
                                    <div className="pt-6 mt-6 border-t border-purple-500/20">
                                        <p className="text-slate-400 mb-4">
                                            Connect with us on social media
                                        </p>
                                        <div className="flex space-x-4">
                                            {[
                                                "facebook",
                                                "twitter",
                                                "linkedin",
                                                "instagram",
                                            ].map((social, index) => (
                                                <motion.a
                                                    key={social}
                                                    href="#"
                                                    className="w-10 h-10 rounded-full bg-slate-800/70 border border-purple-500/30 flex items-center justify-center text-slate-300 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                        delay:
                                                            0.3 + index * 0.1,
                                                    }}
                                                >
                                                    <span className="sr-only">
                                                        {social}
                                                    </span>
                                                    <svg
                                                        className="h-5 w-5"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        {social ===
                                                            "facebook" && (
                                                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                                        )}
                                                        {social ===
                                                            "twitter" && (
                                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                        )}
                                                        {social ===
                                                            "linkedin" && (
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                        )}
                                                        {social ===
                                                            "instagram" && (
                                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                        )}
                                                    </svg>
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
