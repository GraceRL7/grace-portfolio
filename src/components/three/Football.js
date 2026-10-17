import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
/**
 * Procedurally generates a truncated-icosahedron "football" mesh so we don't
 * need to ship a texture/model asset — the pentagon/hexagon pattern is drawn
 * with vertex-colored triangle groups for the classic black/white panels.
 */
function BallMesh() {
    const meshRef = useRef(null);
    const geometry = useMemo(() => {
        const geo = new THREE.IcosahedronGeometry(1.15, 3);
        geo.computeVertexNormals();
        return geo;
    }, []);
    const material = useMemo(() => {
        return new THREE.MeshPhysicalMaterial({
            color: '#f5f5f7',
            roughness: 0.35,
            metalness: 0.05,
            clearcoat: 0.6,
            clearcoatRoughness: 0.25,
            envMapIntensity: 1.1,
        });
    }, []);
    // pentagon "patch" overlays using small flattened dodecahedron-ish dots
    const patches = useMemo(() => {
        const positions = [];
        const count = 12;
        const phi = (1 + Math.sqrt(5)) / 2;
        const pts = [
            [0, 1, phi], [0, -1, phi], [0, 1, -phi], [0, -1, -phi],
            [1, phi, 0], [-1, phi, 0], [1, -phi, 0], [-1, -phi, 0],
            [phi, 0, 1], [-phi, 0, 1], [phi, 0, -1], [-phi, 0, -1],
        ];
        for (let i = 0; i < count; i++) {
            const v = new THREE.Vector3(...pts[i]).normalize().multiplyScalar(1.16);
            positions.push([v.x, v.y, v.z]);
        }
        return positions;
    }, []);
    useFrame((_, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.35;
            meshRef.current.rotation.x += delta * 0.08;
        }
    });
    return (_jsxs("group", { ref: meshRef, children: [_jsx("mesh", { geometry: geometry, material: material, castShadow: true, receiveShadow: true }), patches.map((p, i) => (_jsxs("mesh", { position: p, rotation: [Math.random(), Math.random(), Math.random()], children: [_jsx("circleGeometry", { args: [0.22, 5] }), _jsx("meshStandardMaterial", { color: "#0a0c10", roughness: 0.6, side: THREE.DoubleSide })] }, i))), _jsxs("mesh", { children: [_jsx("sphereGeometry", { args: [1.22, 32, 32] }), _jsx("meshBasicMaterial", { color: "#3CFF9B", transparent: true, opacity: 0.05 })] })] }));
}
export default function FootballCanvas({ className = '' }) {
    return (_jsx("div", { className: className, "aria-hidden": "true", children: _jsx(Canvas, { camera: { position: [0, 0, 4.2], fov: 42 }, gl: { antialias: true, alpha: true }, dpr: [1, 1.8], children: _jsxs(Suspense, { fallback: null, children: [_jsx("ambientLight", { intensity: 0.5 }), _jsx("directionalLight", { position: [3, 4, 2], intensity: 1.4, castShadow: true }), _jsx("pointLight", { position: [-3, -2, -2], intensity: 0.6, color: "#3CFF9B" }), _jsx("pointLight", { position: [2, -1, 3], intensity: 0.4, color: "#5AC8FA" }), _jsx(Float, { speed: 1.4, rotationIntensity: 0.6, floatIntensity: 1.4, children: _jsx(BallMesh, {}) }), _jsx(ContactShadows, { position: [0, -1.4, 0], opacity: 0.4, scale: 6, blur: 2.4, far: 2 }), _jsx(Environment, { preset: "city" })] }) }) }));
}
