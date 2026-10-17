import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
/**
 * Procedurally generates a stylised 3D laptop mesh — screen with code-like
 * lines and a keyboard base — so we don't need external model assets.
 */
function LaptopMesh() {
    const groupRef = useRef(null);
    // Screen panel
    const screenMat = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: '#0D1015',
        roughness: 0.2,
        metalness: 0.6,
        clearcoat: 0.8,
        clearcoatRoughness: 0.15,
        envMapIntensity: 1.2,
    }), []);
    // Aluminium body
    const bodyMat = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: '#B0B8C4',
        roughness: 0.35,
        metalness: 0.85,
        clearcoat: 0.4,
        clearcoatRoughness: 0.3,
        envMapIntensity: 1.0,
    }), []);
    // Accent glow material for "code lines" on screen
    const codeMat = useMemo(() => new THREE.MeshBasicMaterial({
        color: '#4F9CFF',
        transparent: true,
        opacity: 0.85,
    }), []);
    const codeMatDim = useMemo(() => new THREE.MeshBasicMaterial({
        color: '#FF6B9D',
        transparent: true,
        opacity: 0.6,
    }), []);
    // Simulated code lines on the screen
    const codeLines = useMemo(() => {
        const lines = [];
        const lineData = [
            { w: 0.55, m: 'accent' },
            { w: 0.38, m: 'dim' },
            { w: 0.7, m: 'accent' },
            { w: 0.25, m: 'dim' },
            { w: 0.6, m: 'accent' },
            { w: 0.45, m: 'dim' },
            { w: 0.35, m: 'accent' },
            { w: 0.5, m: 'dim' },
        ];
        lineData.forEach((d, i) => {
            lines.push({
                y: 0.32 - i * 0.085,
                width: d.w,
                mat: d.m === 'accent' ? codeMat : codeMatDim,
            });
        });
        return lines;
    }, [codeMat, codeMatDim]);
    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
        }
    });
    return (_jsxs("group", { ref: groupRef, rotation: [0.15, 0.4, 0], children: [_jsx("mesh", { position: [0, 0.55, 0], material: bodyMat, children: _jsx("boxGeometry", { args: [1.5, 1.0, 0.04] }) }), _jsx("mesh", { position: [0, 0.55, 0.022], material: screenMat, children: _jsx("planeGeometry", { args: [1.35, 0.85] }) }), codeLines.map((line, i) => (_jsx("mesh", { position: [-0.55 + line.width / 2 + 0.12, 0.55 + line.y, 0.026], material: line.mat, children: _jsx("planeGeometry", { args: [line.width, 0.035] }) }, i))), _jsx("mesh", { position: [0, 0, 0.35], rotation: [-Math.PI / 2, 0, 0], material: bodyMat, children: _jsx("boxGeometry", { args: [1.5, 0.9, 0.035] }) }), _jsxs("mesh", { position: [0, 0.02, 0.55], rotation: [-Math.PI / 2, 0, 0], children: [_jsx("planeGeometry", { args: [0.4, 0.25] }), _jsx("meshPhysicalMaterial", { color: "#9AA0A8", roughness: 0.2, metalness: 0.9, clearcoat: 0.6 })] }), _jsxs("mesh", { position: [0, 0.02, 0.2], rotation: [-Math.PI / 2, 0, 0], children: [_jsx("planeGeometry", { args: [1.2, 0.35] }), _jsx("meshBasicMaterial", { color: "#8890A0", transparent: true, opacity: 0.15 })] }), _jsxs("mesh", { position: [0, 0.55, 0], children: [_jsx("boxGeometry", { args: [1.58, 1.08, 0.06] }), _jsx("meshBasicMaterial", { color: "#4F9CFF", transparent: true, opacity: 0.04 })] })] }));
}
export default function CodeElementCanvas({ className = '' }) {
    return (_jsx("div", { className: className, "aria-hidden": "true", children: _jsx(Canvas, { camera: { position: [0, 0.8, 4.0], fov: 38 }, gl: { antialias: true, alpha: true }, dpr: [1, 1.8], children: _jsxs(Suspense, { fallback: null, children: [_jsx("ambientLight", { intensity: 0.5 }), _jsx("directionalLight", { position: [3, 4, 2], intensity: 1.4, castShadow: true }), _jsx("pointLight", { position: [-3, -2, -2], intensity: 0.6, color: "#4F9CFF" }), _jsx("pointLight", { position: [2, -1, 3], intensity: 0.4, color: "#FF6B9D" }), _jsx(Float, { speed: 1.4, rotationIntensity: 0.5, floatIntensity: 1.2, children: _jsx(LaptopMesh, {}) }), _jsx(ContactShadows, { position: [0, -0.8, 0], opacity: 0.4, scale: 6, blur: 2.4, far: 2 }), _jsx(Environment, { preset: "city" })] }) }) }));
}
