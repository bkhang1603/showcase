"use client";

import React, { Suspense, useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    OrbitControls,
    Environment,
    Points,
    PointMaterial,
    ContactShadows,
    Float,
} from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";
import styles from "./CharacterShowcase.module.css";
import {
    useOptimizedGLTF,
    useOptimizedAnimations,
} from "@/components/ui/OptimizedModelLoader";

// Preload the model for better performance
import { useGLTF } from "@react-three/drei";
useGLTF.preload("/models/Soldier.glb");

// Enhanced Soldier Character with optimized performance
function SoldierCharacter({
    position,
    color,
    name,
    animationIndex = 0,
    isActive = false,
    onClick,
}: {
    position: [number, number, number];
    color: string;
    name: string;
    animationIndex?: number;
    isActive?: boolean;
    onClick?: () => void;
}) {
    const group = useRef<THREE.Group>(null);
    const { scene, animations, isLoading } = useOptimizedGLTF(
        "/models/Soldier.glb"
    );

    // Use optimized scene cloning
    const clonedScene = useMemo(() => {
        if (scene && !isLoading) {
            return SkeletonUtils.clone(scene);
        }
        return null;
    }, [scene, isLoading]);

    const { mixer, actions } = useOptimizedAnimations(
        animations,
        clonedScene || scene
    );

    // Optimized animation management
    useEffect(() => {
        const animationNames = Object.keys(actions);

        if (
            animationNames.length > animationIndex &&
            actions[animationNames[animationIndex]]
        ) {
            actions[animationNames[animationIndex]]?.play();
        } else if (animationNames.length > 0) {
            actions[animationNames[0]]?.play();
        }

        return () => {
            Object.values(actions).forEach((action) => action?.stop());
        };
    }, [actions, animationIndex, name]);

    // Throttled animation updates
    const lastUpdate = useRef(0);
    useFrame((state, delta) => {
        const now = state.clock.elapsedTime;

        // Update at 30fps instead of 60fps for better performance
        if (now - lastUpdate.current > 1 / 30) {
            if (mixer) {
                mixer.update(delta);
            }

            if (group.current) {
                // Enhanced floating animation with less computation
                group.current.position.y =
                    position[1] + Math.sin(now * 0.8 + position[0]) * 0.08;

                // Active character gets more dramatic rotation
                const rotationMultiplier = isActive ? 0.15 : 0.05;
                group.current.rotation.y =
                    Math.sin(now * 0.3 + position[0]) * rotationMultiplier;
            }

            lastUpdate.current = now;
        }
    });

    if (isLoading || !clonedScene) {
        return null;
    }

    return (
        <group position={position} onClick={onClick}>
            {/* Optimized lighting - only for active character */}
            {isActive && (
                <spotLight
                    position={[0, 8, 3]}
                    angle={0.8}
                    penumbra={1}
                    intensity={2}
                    color={color}
                    target={group.current || undefined}
                    castShadow={false} // Disable shadows for performance
                />
            )}

            {/* Holographic ring for active character - simplified */}
            {isActive && (
                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
                    <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[1.5, 0.02, 8, 50]} />
                        <meshBasicMaterial
                            color={color}
                            transparent
                            opacity={0.6}
                        />
                    </mesh>
                </Float>
            )}

            {/* Character model with optimized scaling */}
            <group ref={group} scale={isActive ? [1.1, 1.1, 1.1] : [1, 1, 1]}>
                <primitive object={clonedScene} scale={0.8} />
            </group>
        </group>
    );
}

// Dynamic holographic environment
function HolographicEnvironment() {
    const holoRingsRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (holoRingsRef.current) {
            holoRingsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <group ref={holoRingsRef}>
            {/* Multiple holographic rings */}
            {[...Array(3)].map((_, i) => (
                <mesh
                    key={i}
                    position={[0, 0, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <torusGeometry args={[8 + i * 2, 0.01, 16, 100]} />
                    <meshBasicMaterial
                        color={`hsl(${240 + i * 30}, 70%, 60%)`}
                        transparent
                        opacity={0.3 - i * 0.05}
                    />
                </mesh>
            ))}
        </group>
    );
}

// Enhanced particle system with interactive effects
function EnhancedParticleField({
    activeCharacter,
}: {
    activeCharacter: number;
}) {
    const pointsRef = useRef<THREE.Points>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(500 * 3);
        for (let i = 0; i < 500; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 1] = Math.random() * 20 - 2;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
        }
        return positions;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
            pointsRef.current.position.y =
                Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
        }
    });

    const particleColor =
        activeCharacter === 0
            ? "#a855f7"
            : activeCharacter === 1
            ? "#6366f1"
            : "#8b5cf6";

    return (
        <Points
            ref={pointsRef}
            positions={particlesPosition}
            stride={3}
            frustumCulled={false}
        >
            <PointMaterial
                transparent
                color={particleColor}
                size={0.02}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={0.6}
            />
        </Points>
    );
}

// Main character scene with interactivity
function CharacterScene({
    activeCharacter,
    setActiveCharacter,
}: {
    activeCharacter: number;
    setActiveCharacter: (index: number) => void;
}) {
    const characters = [
        {
            position: [-4, 0, 0] as [number, number, number],
            color: "#a855f7",
            name: "Captain Rex",
            animationIndex: 0,
            description:
                "Elite tactical commander specializing in advanced combat strategies and battlefield leadership",
        },
        {
            position: [0, 0, 0] as [number, number, number],
            color: "#6366f1",
            name: "Agent Nova",
            animationIndex: 1,
            description:
                "Cybernetic operative mastering augmented reality systems and digital warfare",
        },
        {
            position: [4, 0, 0] as [number, number, number],
            color: "#8b5cf6",
            name: "Sentinel Zero",
            animationIndex: 2,
            description:
                "Advanced guardian protocol protecting critical infrastructure and network security",
        },
    ];

    return (
        <>
            {/* Enhanced background sphere with gradient */}
            <mesh>
                <sphereGeometry args={[60, 64, 64]} />
                <meshBasicMaterial
                    color="#0a0a0a"
                    side={THREE.BackSide}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Dynamic lighting setup */}
            <ambientLight intensity={0.4} color="#1e293b" />
            <directionalLight
                position={[15, 20, 15]}
                intensity={2}
                color="#ffffff"
                castShadow
                shadow-mapSize={[4096, 4096]}
                shadow-camera-far={60}
                shadow-camera-left={-15}
                shadow-camera-right={15}
                shadow-camera-top={15}
                shadow-camera-bottom={-15}
            />

            {/* Color-coordinated rim lighting */}
            <directionalLight
                position={[-15, 8, -15]}
                intensity={1.2}
                color="#a855f7"
            />
            <directionalLight
                position={[15, 8, -15]}
                intensity={1}
                color="#6366f1"
            />

            {/* Characters with interactivity */}
            {characters.map((char, index) => (
                <SoldierCharacter
                    key={index}
                    position={char.position}
                    color={char.color}
                    name={char.name}
                    animationIndex={char.animationIndex}
                    isActive={activeCharacter === index}
                    onClick={() => setActiveCharacter(index)}
                />
            ))}

            {/* Enhanced particle field */}
            <EnhancedParticleField activeCharacter={activeCharacter} />

            {/* Holographic environment */}
            <HolographicEnvironment />

            {/* Enhanced ground with holographic grid */}
            <ContactShadows
                position={[0, 0, 0]}
                opacity={0.4}
                scale={30}
                blur={2}
                far={10}
                resolution={256}
                color="#a855f7"
            />

            {/* Animated grid */}
            <gridHelper
                args={[40, 40, "#6366f1", "#1a1a2e"]}
                position={[0, 0.01, 0]}
            />

            <Environment preset="night" />
        </>
    );
}

// Loading component with enhanced animation
function LoadingFallback() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.8;
            meshRef.current.rotation.x =
                Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
            meshRef.current.position.y =
                Math.sin(state.clock.elapsedTime * 2) * 0.5;
        }
    });
    return (
        <group>
            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1.2]} />
                    <meshStandardMaterial
                        color="#a855f7"
                        opacity={0.8}
                        transparent
                        emissive="#4c1d95"
                        wireframe={true}
                    />
                </mesh>
            </Float>
        </group>
    );
}

// Preload the soldier model
useGLTF.preload("/models/Soldier.glb");

export default function CharacterShowcase() {
    const [activeCharacter, setActiveCharacter] = useState(0);
    const characters = [
        {
            name: "Captain Rex",
            description:
                "Elite tactical commander with advanced combat training and strategic battlefield analysis. Specialized in leading complex operations across multiple terrains.",
            tech: ["Advanced Tactics", "Combat Strategy", "Team Leadership"],
            color: "from-purple-400 to-pink-400",
        },
        {
            name: "Agent Nova",
            description:
                "Cybernetic operative equipped with cutting-edge augmented reality interfaces and digital warfare capabilities. Expert in virtual infiltration.",
            tech: ["AR Systems", "Digital Warfare", "Cyber Security"],
            color: "from-blue-400 to-indigo-400",
        },
        {
            name: "Sentinel Zero",
            description:
                "Advanced guardian protocol designed for protecting critical infrastructure and maintaining network security across all digital domains.",
            tech: ["Network Defense", "System Protection", "AI Monitoring"],
            color: "from-violet-400 to-purple-400",
        },
    ];

    return (
        <section
            className={`relative py-20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 border-t border-purple-500/10 ${styles.characterShowcase}`}
        >
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.15) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.15) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Enhanced Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-purple-300 text-sm font-medium">
                            3D Character Showcase
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Elite Digital
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 ml-3">
                            Warriors
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Experience our advanced 3D soldier characters powered by
                        cutting-edge animation technology. Each warrior
                        represents a specialized domain of our technological
                        expertise.
                    </p>
                </motion.div>

                {/* Interactive 3D Display */}
                <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
                    {/* Character Info Panel */}
                    <motion.div
                        className="lg:col-span-1 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
                            <h3
                                className={`text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${characters[activeCharacter].color}`}
                            >
                                {characters[activeCharacter].name}
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {characters[activeCharacter].description}
                            </p>

                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-purple-300 uppercase tracking-wide">
                                    Technology Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {characters[activeCharacter].tech.map(
                                        (tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-200"
                                            >
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Character Selection */}
                        <div className="space-y-3">
                            {characters.map((char, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setActiveCharacter(index)}
                                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                                        activeCharacter === index
                                            ? "bg-purple-500/20 border-purple-500/50 shadow-lg shadow-purple-500/20"
                                            : "bg-slate-800/30 border-slate-700/50 hover:border-purple-500/30"
                                    }`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`font-medium ${
                                                activeCharacter === index
                                                    ? "text-white"
                                                    : "text-gray-300"
                                            }`}
                                        >
                                            {char.name}
                                        </span>
                                        <div
                                            className={`w-3 h-3 rounded-full transition-colors ${
                                                activeCharacter === index
                                                    ? "bg-purple-400"
                                                    : "bg-slate-600"
                                            }`}
                                        />
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* 3D Character Display */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div
                            className={`h-[700px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/20 shadow-2xl shadow-purple-500/10 ${styles.canvasContainer}`}
                        >
                            <Canvas
                                camera={{
                                    position: [0, 4, 12],
                                    fov: 50,
                                    near: 0.1,
                                    far: 100,
                                }}
                                shadows
                                style={{
                                    background:
                                        "radial-gradient(ellipse at center, rgba(15, 23, 42, 0.9) 0%, rgba(2, 6, 23, 1) 70%, rgba(0, 0, 0, 1) 100%)",
                                }}
                            >
                                <Suspense fallback={<LoadingFallback />}>
                                    <CharacterScene
                                        activeCharacter={activeCharacter}
                                        setActiveCharacter={setActiveCharacter}
                                    />
                                </Suspense>

                                <OrbitControls
                                    target={[0, 1.5, 0]}
                                    enablePan={false}
                                    enableDamping={true}
                                    dampingFactor={0.05}
                                    minDistance={6}
                                    maxDistance={20}
                                    maxPolarAngle={Math.PI / 2.2}
                                    autoRotate={false}
                                />
                            </Canvas>
                        </div>

                        {/* Interactive Controls */}
                        <motion.div
                            className="flex justify-center mt-6 space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
                                <span className="text-sm text-gray-400">
                                    Click and drag to rotate • Scroll to zoom
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Technology Stats */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6 mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
                        <div className="text-3xl font-bold text-purple-400 mb-2">
                            120 FPS
                        </div>
                        <div className="text-gray-300">Real-time Rendering</div>
                    </div>
                    <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
                        <div className="text-3xl font-bold text-indigo-400 mb-2">
                            50+
                        </div>
                        <div className="text-gray-300">Animation States</div>
                    </div>
                    <div className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
                        <div className="text-3xl font-bold text-violet-400 mb-2">
                            4K
                        </div>
                        <div className="text-gray-300">Texture Quality</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
