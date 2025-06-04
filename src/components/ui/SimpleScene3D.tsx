"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

interface SimpleScene3DProps {
    className?: string;
}

function TokyoModel() {
    const { scene, animations } = useGLTF("/models/LittlestTokyo.glb");
    const mixer = useRef<THREE.AnimationMixer | null>(null);
    const modelRef = useRef<THREE.Group>(null);

    // Initialize animation mixer
    React.useEffect(() => {
        if (scene && animations.length > 0) {
            mixer.current = new THREE.AnimationMixer(scene);
            const action = mixer.current.clipAction(animations[0]);
            action.play();
        }
        return () => {
            if (mixer.current) {
                mixer.current.stopAllAction();
            }
        };
    }, [scene, animations]);

    // Update animation
    useFrame((state, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }
    });

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
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
                className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
}

export default function SimpleScene3D({ className = "" }: SimpleScene3DProps) {
    return (
        <div className={`w-full h-full relative ${className}`}>
            <Canvas
                camera={{
                    position: [5, 2, 8],
                    fov: 40,
                    near: 1,
                    far: 100,
                }}
                className="rounded-2xl"
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />

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
                />
            </Canvas>{" "}
            <Suspense fallback={<LoadingSpinner />}>
                <div></div>
            </Suspense>
        </div>
    );
}

// Preload the model
useGLTF.preload("/models/LittlestTokyo.glb");
