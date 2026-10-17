import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
function CuteChibiRobot({ isHovered }) {
    const groupRef = useRef(null);
    const headRef = useRef(null);
    const leftArmRef = useRef(null);
    const rightEyeRef = useRef(null);
    const leftEyeRef = useRef(null);
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Cute gentle breathing float
        if (groupRef.current) {
            groupRef.current.position.y = Math.sin(time * 2.5) * 0.05 - 0.05;
            // Mouse tracking head turn
            const targetY = (state.pointer.x * Math.PI) / 4.5;
            const targetX = (-state.pointer.y * Math.PI) / 6;
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.08);
        }
        // Cute head tilt on hover
        if (headRef.current) {
            if (isHovered) {
                headRef.current.rotation.z = Math.sin(time * 6) * 0.12 + 0.06;
            }
            else {
                headRef.current.rotation.z = Math.sin(time * 1.5) * 0.03;
            }
        }
        // Eye Blink Effect & Happy Expression
        const blink = Math.sin(time * 3.5) > 0.96 ? 0.1 : 1;
        if (leftEyeRef.current)
            leftEyeRef.current.scale.y = isHovered ? 0.45 : blink;
        if (rightEyeRef.current)
            rightEyeRef.current.scale.y = isHovered ? 0.45 : blink;
        // Eye Happy Rotation on Hover (Super Cute ^ ^ Eyes)
        if (leftEyeRef.current)
            leftEyeRef.current.rotation.z = isHovered ? -0.2 : 0;
        if (rightEyeRef.current)
            rightEyeRef.current.rotation.z = isHovered ? 0.2 : 0;
        // Waving Arm Animation on Hover
        if (leftArmRef.current) {
            if (isHovered) {
                leftArmRef.current.rotation.z = Math.sin(time * 14) * 0.4 + 0.85;
            }
            else {
                leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, 0.1, 0.1);
            }
        }
    });
    return (_jsxs("group", { ref: groupRef, position: [0, -0.1, 0], children: [_jsxs("group", { ref: headRef, position: [0, 0.48, 0], children: [_jsxs("mesh", { position: [0, 0, 0], scale: [1.22, 1.05, 1.1], children: [_jsx("sphereGeometry", { args: [0.5, 64, 64] }), _jsx("meshStandardMaterial", { color: "#FAFAFA", roughness: 0.1, metalness: 0.15 })] }), _jsxs("mesh", { position: [0, -0.02, 0.2], rotation: [0.04, 0, 0], scale: [1.14, 0.9, 0.98], children: [_jsx("sphereGeometry", { args: [0.44, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.48] }), _jsx("meshStandardMaterial", { color: "#020202", roughness: 0.02, metalness: 0.95 })] }), _jsxs("mesh", { ref: leftEyeRef, position: [-0.18, -0.01, 0.58], rotation: [0, 0, Math.PI / 2], children: [_jsx("capsuleGeometry", { args: [0.04, 0.12, 16, 16] }), _jsx("meshStandardMaterial", { color: "#00F0FF", emissive: "#00E5FF", emissiveIntensity: isHovered ? 2.2 : 1.6 })] }), _jsxs("mesh", { ref: rightEyeRef, position: [0.18, -0.01, 0.58], rotation: [0, 0, Math.PI / 2], children: [_jsx("capsuleGeometry", { args: [0.04, 0.12, 16, 16] }), _jsx("meshStandardMaterial", { color: "#00F0FF", emissive: "#00E5FF", emissiveIntensity: isHovered ? 2.2 : 1.6 })] }), _jsxs("group", { position: [-0.6, -0.02, 0], rotation: [0, 0, Math.PI / 2], children: [_jsxs("mesh", { children: [_jsx("cylinderGeometry", { args: [0.14, 0.14, 0.08, 32] }), _jsx("meshStandardMaterial", { color: "#FFFFFF", metalness: 0.3, roughness: 0.2 })] }), _jsxs("mesh", { position: [0, 0.05, 0], children: [_jsx("torusGeometry", { args: [0.1, 0.018, 16, 32] }), _jsx("meshStandardMaterial", { color: "#00F0FF", emissive: "#00E5FF", emissiveIntensity: 1.8 })] })] }), _jsxs("group", { position: [0.6, -0.02, 0], rotation: [0, 0, Math.PI / 2], children: [_jsxs("mesh", { children: [_jsx("cylinderGeometry", { args: [0.14, 0.14, 0.08, 32] }), _jsx("meshStandardMaterial", { color: "#FFFFFF", metalness: 0.3, roughness: 0.2 })] }), _jsxs("mesh", { position: [0, -0.05, 0], children: [_jsx("torusGeometry", { args: [0.1, 0.018, 16, 32] }), _jsx("meshStandardMaterial", { color: "#00F0FF", emissive: "#00E5FF", emissiveIntensity: 1.8 })] })] })] }), _jsxs("mesh", { position: [0, -0.05, 0], children: [_jsx("cylinderGeometry", { args: [0.16, 0.2, 0.06, 32] }), _jsx("meshStandardMaterial", { color: "#111111", metalness: 0.8, roughness: 0.3 })] }), _jsxs("mesh", { position: [0, -0.45, 0], children: [_jsx("capsuleGeometry", { args: [0.3, 0.35, 32, 32] }), _jsx("meshStandardMaterial", { color: "#FAFAFA", roughness: 0.12, metalness: 0.15 })] }), _jsxs("mesh", { position: [0, -0.42, 0.31], children: [_jsx("capsuleGeometry", { args: [0.025, 0.14, 16, 16] }), _jsx("meshStandardMaterial", { color: "#00F0FF", emissive: "#00E5FF", emissiveIntensity: 2.0 })] }), _jsxs("mesh", { position: [-0.32, -0.32, 0], children: [_jsx("sphereGeometry", { args: [0.07, 16, 16] }), _jsx("meshStandardMaterial", { color: "#00F0FF", emissive: "#00E5FF", emissiveIntensity: 1.5 })] }), _jsxs("mesh", { position: [0.32, -0.32, 0], children: [_jsx("sphereGeometry", { args: [0.07, 16, 16] }), _jsx("meshStandardMaterial", { color: "#00F0FF", emissive: "#00E5FF", emissiveIntensity: 1.5 })] }), _jsx("group", { ref: leftArmRef, position: [-0.38, -0.38, 0], children: _jsxs("mesh", { position: [-0.08, -0.12, 0], children: [_jsx("capsuleGeometry", { args: [0.065, 0.22, 16, 16] }), _jsx("meshStandardMaterial", { color: "#E5E5E5", roughness: 0.15, metalness: 0.1 })] }) }), _jsx("group", { position: [0.38, -0.38, 0], children: _jsxs("mesh", { position: [0.08, -0.12, 0], children: [_jsx("capsuleGeometry", { args: [0.065, 0.22, 16, 16] }), _jsx("meshStandardMaterial", { color: "#E5E5E5", roughness: 0.15, metalness: 0.1 })] }) }), _jsxs("mesh", { position: [0, -0.98, 0], rotation: [-Math.PI / 2, 0, 0], children: [_jsx("planeGeometry", { args: [1.0, 1.0] }), _jsx("meshBasicMaterial", { color: "#000000", opacity: 0.3, transparent: true })] })] }));
}
export default function GraceRobotCanvas({ isHovered }) {
    return (_jsx("div", { className: "w-[110px] h-[115px] sm:w-[120px] sm:h-[125px] relative cursor-pointer select-none flex items-center justify-center", children: _jsxs(Canvas, { camera: { position: [0, 0.08, 3.4], fov: 42 }, children: [_jsx("ambientLight", { intensity: 1.8 }), _jsx("directionalLight", { position: [4, 6, 4], intensity: 2.4, color: "#ffffff" }), _jsx("directionalLight", { position: [-4, 4, -2], intensity: 1.5, color: "#00f0ff" }), _jsx("pointLight", { position: [-3, -2, -2], intensity: 0.8, color: "#a3a3a3" }), _jsx(Float, { speed: 2.5, rotationIntensity: 0.15, floatIntensity: 0.4, children: _jsx(CuteChibiRobot, { isHovered: isHovered }) })] }) }));
}
