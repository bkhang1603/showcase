"use client";

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

export default function StarsBackground() {
    const [stars, setStars] = useState<Star[]>([]);

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
        <>
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
        </>
    );
}
