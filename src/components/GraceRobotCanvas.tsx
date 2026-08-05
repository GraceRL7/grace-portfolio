import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function RobotBody({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Gentle breathing motion
      groupRef.current.position.y = Math.sin(time * 2) * 0.08;

      // Mouse pointer tracking for head look
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.06);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.06);
    }

    // Right & Left Eye Blinking Occasional Effect
    const blink = Math.sin(time * 3) > 0.98 ? 0.1 : 1;
    if (leftEyeRef.current) leftEyeRef.current.scale.y = blink;
    if (rightEyeRef.current) rightEyeRef.current.scale.y = blink;

    // Hover Wave Animation
    if (leftArmRef.current) {
      if (isHovered) {
        leftArmRef.current.rotation.z = Math.sin(time * 10) * 0.4 + 0.8;
      } else {
        leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, 0, 0.1);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Soft Shadow Base */}
      <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.8, 1.8]} />
        <meshBasicMaterial color="#000000" opacity={0.4} transparent />
      </mesh>

      {/* Head Outer Pixar White Shell */}
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.1} />
      </mesh>

      {/* Visor Glass (Black Glass Face) */}
      <mesh position={[0, 0.6, 0.38]} rotation={[0.1, 0, 0]}>
        <sphereGeometry args={[0.48, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial color="#050505" roughness={0.05} metalness={0.95} />
      </mesh>

      {/* Left Soft White Eye */}
      <mesh ref={leftEyeRef} position={[-0.22, 0.65, 0.78]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshBasicMaterial color={isHovered ? '#FFFFFF' : '#E5E5E5'} />
      </mesh>

      {/* Right Soft White Eye */}
      <mesh ref={rightEyeRef} position={[0.22, 0.65, 0.78]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshBasicMaterial color={isHovered ? '#FFFFFF' : '#E5E5E5'} />
      </mesh>

      {/* Cute Ears / Side Caps */}
      <mesh position={[-0.76, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
        <meshStandardMaterial color="#262626" metalness={0.8} />
      </mesh>
      <mesh position={[0.76, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
        <meshStandardMaterial color="#262626" metalness={0.8} />
      </mesh>

      {/* Torso Body (Pixar White Capsule) */}
      <mesh position={[0, -0.4, 0]}>
        <capsuleGeometry args={[0.45, 0.5, 32, 32]} />
        <meshStandardMaterial color="#F0F0F0" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Chest Emblem Accent (Monochrome Dark) */}
      <mesh position={[0, -0.3, 0.44]}>
        <circleGeometry args={[0.12, 32]} />
        <meshStandardMaterial color="#171717" roughness={0.3} />
      </mesh>

      {/* Left Arm (Waving Arm) */}
      <group ref={leftArmRef} position={[-0.55, -0.3, 0]}>
        <mesh position={[-0.15, -0.2, 0]}>
          <capsuleGeometry args={[0.1, 0.3, 16, 16]} />
          <meshStandardMaterial color="#E5E5E5" roughness={0.2} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group position={[0.55, -0.3, 0]}>
        <mesh position={[0.15, -0.2, 0]}>
          <capsuleGeometry args={[0.1, 0.3, 16, 16]} />
          <meshStandardMaterial color="#E5E5E5" roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

export default function GraceRobotCanvas({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-[140px] h-[140px] relative cursor-pointer select-none">
      <Canvas camera={{ position: [0, 0.2, 3.2], fov: 45 }}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-5, -2, -3]} intensity={1} color="#a3a3a3" />
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
          <RobotBody isHovered={isHovered} />
        </Float>
      </Canvas>
    </div>
  );
}
