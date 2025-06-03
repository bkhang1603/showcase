"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
    OrbitControls,
    PerspectiveCamera,
    Environment,
    Center,
    Float,
} from "@react-three/drei";
import { motion } from "framer-motion";

// Simple 3D Cube Component for testing
export function AnimatedCube() {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial
                    color="#6366f1"
                    roughness={0.3}
                    metalness={0.7}
                />
            </mesh>
        </Float>
    );
}

// Geometric Shape Component
function GeometricShapes() {
    return (
        <group>
            {/* Main Cube */}
            <Float speed={1.2} rotationIntensity={0.5} floatIntensity={1}>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    <meshStandardMaterial
                        color="#8b5cf6"
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>
            </Float>

            {/* Floating Spheres */}
            <Float speed={2} rotationIntensity={1} floatIntensity={3}>
                <mesh position={[3, 1, -1]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial
                        color="#06b6d4"
                        roughness={0.1}
                        metalness={0.9}
                    />
                </mesh>
            </Float>

            <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5}>
                <mesh position={[-2.5, -0.5, 1]}>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial
                        color="#f59e0b"
                        roughness={0.3}
                        metalness={0.6}
                    />
                </mesh>
            </Float>

            {/* Torus */}
            <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.8}>
                <mesh
                    position={[1.5, -2, 0.5]}
                    rotation={[Math.PI / 4, 0, Math.PI / 6]}
                >
                    <torusGeometry args={[0.8, 0.3, 16, 100]} />
                    <meshStandardMaterial
                        color="#ec4899"
                        roughness={0.2}
                        metalness={0.7}
                    />
                </mesh>
            </Float>

            {/* Pyramid */}
            <Float speed={1.3} rotationIntensity={0.7} floatIntensity={2.2}>
                <mesh position={[-1.8, 1.5, -0.5]}>
                    <coneGeometry args={[0.6, 1.2, 8]} />
                    <meshStandardMaterial
                        color="#10b981"
                        roughness={0.4}
                        metalness={0.5}
                    />
                </mesh>
            </Float>
        </group>
    );
}

function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />

            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight
                position={[-10, -10, -5]}
                intensity={0.5}
                color="#6366f1"
            />

            {/* Environment for reflections */}
            <Environment preset="city" />

            {/* 3D Objects */}
            <Center>
                <GeometricShapes />
            </Center>
        </>
    );
}

interface Scene3DProps {
    className?: string;
}

export default function Scene3D({ className = "" }: Scene3DProps) {
    return (
        <motion.div
            className={`w-full h-full ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <Canvas>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </motion.div>
    );
}
