"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import {
    useOptimizedGLTF,
    useOptimizedAnimations,
} from "./OptimizedModelLoader";

interface SimpleScene3DProps {
    className?: string;
}

function TokyoModel() {
    const { scene, animations, isLoading } = useOptimizedGLTF(
        "/models/LittlestTokyo.glb"
    );
    const { mixer } = useOptimizedAnimations(animations, scene);
    const modelRef = useRef<THREE.Group>(null);

    // Optimized frame update with throttling
    const lastUpdate = useRef(0);
    useFrame((state, delta) => {
        const now = state.clock.elapsedTime;

        // Throttle animation updates to 30fps for better performance
        if (now - lastUpdate.current > 1 / 30) {
            if (mixer) {
                mixer.update(delta);
            }
            lastUpdate.current = now;
        }
    });

    if (isLoading) {
        return null;
    }

    return (
        <group ref={modelRef}>
            <primitive
                object={scene}
                position={[1, 1, 0]}
                scale={[0.01, 0.01, 0.01]}
            />
        </group>
    );
}

function LoadingSpinner() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm rounded-2xl">
            <motion.div
                className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <span className="ml-4 text-cyan-400 font-medium">
                Loading 3D Model...
            </span>
        </div>
    );
}

export default function SimpleScene3D({ className = "" }: SimpleScene3DProps) {
    // Memoize canvas props for performance
    const canvasProps = React.useMemo(
        () => ({
            camera: {
                position: [5, 2, 8] as [number, number, number],
                fov: 40,
                near: 1,
                far: 100,
            },
            dpr: Math.min(window.devicePixelRatio || 1, 2), // Limit DPR for performance
            performance: { min: 0.5 }, // Adaptive performance
            frameloop: "demand" as const, // Only render when needed
        }),
        []
    );

    return (
        <div className={`w-full h-full relative ${className}`}>
            <Canvas {...canvasProps} className="rounded-2xl">
                {/* Optimized lighting */}
                <ambientLight intensity={0.4} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={0.8}
                    castShadow={false} // Disable shadows for better performance
                />

                <Suspense fallback={null}>
                    <TokyoModel />
                    <Environment preset="dawn" />
                </Suspense>

                <OrbitControls
                    target={[0, 0.5, 0]}
                    enablePan={false}
                    enableDamping={true}
                    dampingFactor={0.05}
                    minDistance={2}
                    maxDistance={20}
                    maxPolarAngle={Math.PI / 2} // Limit vertical rotation
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
            </Canvas>

            <Suspense fallback={<LoadingSpinner />}>
                <div></div>
            </Suspense>
        </div>
    );
}

// Preload the model
useGLTF.preload("/models/LittlestTokyo.glb");
