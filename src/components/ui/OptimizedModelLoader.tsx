"use client";

import { useEffect, useMemo, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Preload models for better performance
const modelPaths = ["/models/Soldier.glb", "/models/LittlestTokyo.glb"];

// Preload all models on module load
modelPaths.forEach((path) => {
    useGLTF.preload(path);
});

// Optimized model loader with caching and performance improvements
export function useOptimizedGLTF(path: string) {
    const [isLoading, setIsLoading] = useState(true);
    const gltf = useGLTF(path);

    useEffect(() => {
        if (gltf.scene) {
            // Optimize materials for performance
            gltf.scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    // Enable shadow casting/receiving selectively
                    child.castShadow = true;
                    child.receiveShadow = true;

                    // Optimize materials
                    if (child.material) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach((mat) => {
                                if (mat instanceof THREE.MeshStandardMaterial) {
                                    mat.envMapIntensity = 0.5;
                                    mat.metalness = Math.min(
                                        mat.metalness,
                                        0.5
                                    );
                                }
                            });
                        } else if (
                            child.material instanceof THREE.MeshStandardMaterial
                        ) {
                            child.material.envMapIntensity = 0.5;
                            child.material.metalness = Math.min(
                                child.material.metalness,
                                0.5
                            );
                        }
                    }

                    // Optimize geometry
                    if (child.geometry) {
                        child.geometry.computeBoundingSphere();
                        child.geometry.computeBoundingBox();

                        // Remove unnecessary vertex attributes if they exist
                        if (child.geometry.attributes.uv2) {
                            child.geometry.deleteAttribute("uv2");
                        }
                    }
                }
            });

            setIsLoading(false);
        }
    }, [gltf.scene]);

    return {
        ...gltf,
        isLoading,
    };
}

// Optimized animation hook with performance improvements
export function useOptimizedAnimations(
    animations: THREE.AnimationClip[],
    scene: THREE.Object3D
) {
    const mixer = useMemo(() => {
        if (scene && animations.length > 0) {
            const animationMixer = new THREE.AnimationMixer(scene);

            // Set time scale for smoother animation
            animationMixer.timeScale = 1;

            return animationMixer;
        }
        return null;
    }, [scene, animations]);

    const actions = useMemo(() => {
        if (mixer && animations.length > 0) {
            const actionMap: { [key: string]: THREE.AnimationAction } = {};

            animations.forEach((clip) => {
                const action = mixer.clipAction(clip);
                action.setLoop(THREE.LoopRepeat, Infinity);
                actionMap[clip.name] = action;
            });

            return actionMap;
        }
        return {};
    }, [mixer, animations]);

    return { mixer, actions };
}

// Memory cleanup utility
export function disposeGLTF(gltf: { scene?: THREE.Group }) {
    if (gltf.scene) {
        gltf.scene.traverse((child: THREE.Object3D) => {
            if (child instanceof THREE.Mesh) {
                if (child.geometry) {
                    child.geometry.dispose();
                }
                if (child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((mat: THREE.Material) => {
                            if (mat instanceof THREE.MeshStandardMaterial) {
                                if (mat.map) mat.map.dispose();
                                if (mat.normalMap) mat.normalMap.dispose();
                                if (mat.roughnessMap)
                                    mat.roughnessMap.dispose();
                                if (mat.metalnessMap)
                                    mat.metalnessMap.dispose();
                            }
                            mat.dispose();
                        });
                    } else if (
                        child.material instanceof THREE.MeshStandardMaterial
                    ) {
                        if (child.material.map) child.material.map.dispose();
                        if (child.material.normalMap)
                            child.material.normalMap.dispose();
                        if (child.material.roughnessMap)
                            child.material.roughnessMap.dispose();
                        if (child.material.metalnessMap)
                            child.material.metalnessMap.dispose();
                        child.material.dispose();
                    }
                }
            }
        });
    }
}

export default useOptimizedGLTF;
