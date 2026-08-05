import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Procedurally generates a stylised 3D laptop mesh — screen with code-like
 * lines and a keyboard base — so we don't need external model assets.
 */
function LaptopMesh() {
  const groupRef = useRef<THREE.Group>(null);

  // Screen panel
  const screenMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#0D1015',
        roughness: 0.2,
        metalness: 0.6,
        clearcoat: 0.8,
        clearcoatRoughness: 0.15,
        envMapIntensity: 1.2,
      }),
    [],
  );

  // Aluminium body
  const bodyMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: '#B0B8C4',
        roughness: 0.35,
        metalness: 0.85,
        clearcoat: 0.4,
        clearcoatRoughness: 0.3,
        envMapIntensity: 1.0,
      }),
    [],
  );

  // Accent glow material for "code lines" on screen
  const codeMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#4F9CFF',
        transparent: true,
        opacity: 0.85,
      }),
    [],
  );

  const codeMatDim = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#FF6B9D',
        transparent: true,
        opacity: 0.6,
      }),
    [],
  );

  // Simulated code lines on the screen
  const codeLines = useMemo(() => {
    const lines: { y: number; width: number; mat: THREE.Material }[] = [];
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

  return (
    <group ref={groupRef} rotation={[0.15, 0.4, 0]}>
      {/* Screen bezel */}
      <mesh position={[0, 0.55, 0]} material={bodyMat}>
        <boxGeometry args={[1.5, 1.0, 0.04]} />
      </mesh>

      {/* Screen display area */}
      <mesh position={[0, 0.55, 0.022]} material={screenMat}>
        <planeGeometry args={[1.35, 0.85]} />
      </mesh>

      {/* Code lines on screen */}
      {codeLines.map((line, i) => (
        <mesh
          key={i}
          position={[-0.55 + line.width / 2 + 0.12, 0.55 + line.y, 0.026]}
          material={line.mat}
        >
          <planeGeometry args={[line.width, 0.035]} />
        </mesh>
      ))}

      {/* Keyboard base */}
      <mesh position={[0, 0, 0.35]} rotation={[-Math.PI / 2, 0, 0]} material={bodyMat}>
        <boxGeometry args={[1.5, 0.9, 0.035]} />
      </mesh>

      {/* Trackpad */}
      <mesh position={[0, 0.02, 0.55]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.4, 0.25]} />
        <meshPhysicalMaterial
          color="#9AA0A8"
          roughness={0.2}
          metalness={0.9}
          clearcoat={0.6}
        />
      </mesh>

      {/* Keyboard key grid hints */}
      <mesh position={[0, 0.02, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.2, 0.35]} />
        <meshBasicMaterial color="#8890A0" transparent opacity={0.15} />
      </mesh>

      {/* Accent rim glow */}
      <mesh position={[0, 0.55, 0]}>
        <boxGeometry args={[1.58, 1.08, 0.06]} />
        <meshBasicMaterial color="#4F9CFF" transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

export default function CodeElementCanvas({ className = '' }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.8, 4.0], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.8]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 4, 2]} intensity={1.4} castShadow />
          <pointLight position={[-3, -2, -2]} intensity={0.6} color="#4F9CFF" />
          <pointLight position={[2, -1, 3]} intensity={0.4} color="#FF6B9D" />
          <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.2}>
            <LaptopMesh />
          </Float>
          <ContactShadows position={[0, -0.8, 0]} opacity={0.4} scale={6} blur={2.4} far={2} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
