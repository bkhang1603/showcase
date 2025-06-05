# 3D Character Showcase - Implementation Guide

## Overview

The CharacterShowcase component displays interactive 3D characters representing Gaming, AR/VR, and IoT solutions. Currently uses placeholder capsule geometries that can be replaced with actual 3D models.

## Current Implementation

### Features

-   ✅ Interactive 3D scene with OrbitControls
-   ✅ Three animated placeholder characters
-   ✅ Floating animations and wireframe effects
-   ✅ Dynamic lighting system
-   ✅ Particle background effects
-   ✅ Loading states with animated fallbacks
-   ✅ Responsive design with character info cards
-   ✅ Tokyo-inspired visual theme

### File Structure

```
src/components/home/CharacterShowcase.tsx
public/models/
├── LittlestTokyo.glb (available)
└── Soldier.glb (available)
```

## Replacing Placeholder Characters

### Step 1: Prepare 3D Models

1. Place your 3D models (.glb or .gltf) in `public/models/`
2. Recommended models:
    - Gaming character: Action/adventure character
    - AR/VR character: Futuristic/tech character
    - IoT character: Robot/industrial character

### Step 2: Update Character Component

Replace the `PlaceholderCharacter` function in `CharacterShowcase.tsx`:

```tsx
import { useGLTF } from "@react-three/drei";

function Character3D({
    position,
    color,
    name,
    modelPath,
}: {
    position: [number, number, number];
    color: string;
    name: string;
    modelPath: string;
}) {
    const { scene } = useGLTF(modelPath);
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y =
                Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
            meshRef.current.position.y =
                position[1] +
                Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.15;
        }
    });

    return (
        <group position={position}>
            <group ref={meshRef} scale={[0.5, 0.5, 0.5]}>
                <primitive object={scene.clone()} />
            </group>
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.7}>
                <Text
                    position={[0, 2.2, 0]}
                    fontSize={0.35}
                    color="#ffffff"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    {name}
                </Text>
            </Float>
        </group>
    );
}
```

### Step 3: Update Character Data

```tsx
const characters = [
    {
        position: [-2.5, 0, 0] as [number, number, number],
        color: "#00d4ff",
        name: "Gaming",
        modelPath: "/models/gaming-character.glb",
    },
    {
        position: [0, 0, 0] as [number, number, number],
        color: "#ff6b35",
        name: "AR/VR",
        modelPath: "/models/arvr-character.glb",
    },
    {
        position: [2.5, 0, 0] as [number, number, number],
        color: "#7c3aed",
        name: "IoT",
        modelPath: "/models/iot-character.glb",
    },
];
```

## Performance Optimization

### Model Optimization

-   Keep models under 5MB each
-   Use compressed textures
-   Limit polygon count to 10k-20k per model
-   Use LOD (Level of Detail) if needed

### Loading Optimization

```tsx
// Preload models
useGLTF.preload("/models/gaming-character.glb");
useGLTF.preload("/models/arvr-character.glb");
useGLTF.preload("/models/iot-character.glb");
```

## Animation Enhancement

### Character Animations

If your 3D models include animations, you can use:

```tsx
import { useAnimations } from "@react-three/drei";

const { actions } = useAnimations(animations, meshRef);

// Play idle animation
useEffect(() => {
    actions?.idle?.play();
}, [actions]);
```

### Custom Material Effects

```tsx
// Add emissive materials for tech effect
<meshStandardMaterial
    {...materials.character}
    emissive={color}
    emissiveIntensity={0.2}
/>
```

## Troubleshooting

### Common Issues

1. **Model not appearing**: Check file path and model scale
2. **Performance issues**: Reduce model complexity
3. **Loading errors**: Verify file format (.glb recommended)
4. **Animation glitches**: Check animation mixer setup

### Debug Tips

```tsx
// Add debug helpers
import { Box3Helper } from "three";

// Visualize bounding box
const helper = new Box3Helper(box, 0xffff00);
scene.add(helper);
```

## Future Enhancements

-   [ ] Character interaction on click/hover
-   [ ] Character dialogue system
-   [ ] Dynamic character swapping
-   [ ] VR support with hand tracking
-   [ ] Character customization options

## Dependencies

```json
{
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.90.0",
    "three": "^0.158.0",
    "framer-motion": "^10.16.0"
}
```
