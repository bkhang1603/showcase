"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";

// Loading component
export function ModelLoader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="text-white text-center bg-black/50 p-4 rounded-lg backdrop-blur-sm">
                <div className="mb-2 text-lg">Loading 3D Model...</div>
                <div className="w-40 h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="text-sm mt-2 text-gray-300">
                    {Math.round(progress)}%
                </div>
            </div>
        </Html>
    );
}

// Component to load external GLTF/GLB model
interface ExternalModelProps {
    url: string;
    position?: [number, number, number];
    scale?: number | [number, number, number];
    rotationSpeed?: number;
    floatEnabled?: boolean;
}

export function ExternalModel({
    url,
    position = [0, 0, 0],
    scale = 1,
    rotationSpeed = 0.01,
    floatEnabled = true,
}: ExternalModelProps) {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>(null);

    // Auto rotation
    useFrame(() => {
        if (modelRef.current && rotationSpeed > 0) {
            modelRef.current.rotation.y += rotationSpeed;
        }
    });

    const modelComponent = (
        <primitive
            ref={modelRef}
            object={scene.clone()}
            position={position}
            scale={scale}
        />
    );

    if (floatEnabled) {
        return (
            <Float speed={1} rotationIntensity={0.2} floatIntensity={1}>
                {modelComponent}
            </Float>
        );
    }

    return modelComponent;
}

// Example URLs for testing (you can replace these)
export const SAMPLE_MODELS = {
    // Low-poly spaceship from Sketchfab (free)
    spaceship:
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/low-poly-spaceship/model.gltf",

    // Robot from Three.js examples
    robot: "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb",

    // Duck from glTF samples
    duck: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb",

    // Helmet from glTF samples
    helmet: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/DamagedHelmet/glTF-Binary/DamagedHelmet.glb",

    // Brain from glTF samples
    brain: "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BrainStem/glTF-Binary/BrainStem.glb",
};

// Preload models for better performance
Object.values(SAMPLE_MODELS).forEach((url) => {
    useGLTF.preload(url);
});
