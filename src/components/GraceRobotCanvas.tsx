import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function CuteChibiRobot({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const leftArmRef = useRef<THREE.Group>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);

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
      } else {
        headRef.current.rotation.z = Math.sin(time * 1.5) * 0.03;
      }
    }

    // Eye Blink Effect & Happy Expression
    const blink = Math.sin(time * 3.5) > 0.96 ? 0.1 : 1;
    if (leftEyeRef.current) leftEyeRef.current.scale.y = isHovered ? 0.45 : blink;
    if (rightEyeRef.current) rightEyeRef.current.scale.y = isHovered ? 0.45 : blink;

    // Eye Happy Rotation on Hover (Super Cute ^ ^ Eyes)
    if (leftEyeRef.current) leftEyeRef.current.rotation.z = isHovered ? -0.2 : 0;
    if (rightEyeRef.current) rightEyeRef.current.rotation.z = isHovered ? 0.2 : 0;

    // Waving Arm Animation on Hover
    if (leftArmRef.current) {
      if (isHovered) {
        leftArmRef.current.rotation.z = Math.sin(time * 14) * 0.4 + 0.85;
      } else {
        leftArmRef.current.rotation.z = THREE.MathUtils.lerp(leftArmRef.current.rotation.z, 0.1, 0.1);
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* Big Cute Chibi Head Assembly */}
      <group ref={headRef} position={[0, 0.48, 0]}>
        {/* Large Rounded Chibi Helmet Shell */}
        <mesh position={[0, 0, 0]} scale={[1.22, 1.05, 1.1]}>
          <sphereGeometry args={[0.5, 64, 64]} />
          <meshStandardMaterial
            color="#FAFAFA"
            roughness={0.1}
            metalness={0.15}
          />
        </mesh>

        {/* Glossy Black Face Screen / Visor Frame */}
        <mesh position={[0, -0.02, 0.2]} rotation={[0.04, 0, 0]} scale={[1.14, 0.9, 0.98]}>
          <sphereGeometry args={[0.44, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.48]} />
          <meshStandardMaterial
            color="#020202"
            roughness={0.02}
            metalness={0.95}
          />
        </mesh>

        {/* Glowing Cyan Left Horizontal Eye Pill (Reference Image Style) */}
        <mesh ref={leftEyeRef} position={[-0.18, -0.01, 0.58]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.04, 0.12, 16, 16]} />
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#00E5FF"
            emissiveIntensity={isHovered ? 2.2 : 1.6}
          />
        </mesh>

        {/* Glowing Cyan Right Horizontal Eye Pill */}
        <mesh ref={rightEyeRef} position={[0.18, -0.01, 0.58]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.04, 0.12, 16, 16]} />
          <meshStandardMaterial
            color="#00F0FF"
            emissive="#00E5FF"
            emissiveIntensity={isHovered ? 2.2 : 1.6}
          />
        </mesh>

        {/* Side Ear Nodes with Glowing Cyan Rings */}
        <group position={[-0.6, -0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh>
            <cylinderGeometry args={[0.14, 0.14, 0.08, 32]} />
            <meshStandardMaterial color="#FFFFFF" metalness={0.3} roughness={0.2} />
          </mesh>
          <mesh position={[0, 0.05, 0]}>
            <torusGeometry args={[0.1, 0.018, 16, 32]} />
            <meshStandardMaterial
              color="#00F0FF"
              emissive="#00E5FF"
              emissiveIntensity={1.8}
            />
          </mesh>
        </group>

        <group position={[0.6, -0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh>
            <cylinderGeometry args={[0.14, 0.14, 0.08, 32]} />
            <meshStandardMaterial color="#FFFFFF" metalness={0.3} roughness={0.2} />
          </mesh>
          <mesh position={[0, -0.05, 0]}>
            <torusGeometry args={[0.1, 0.018, 16, 32]} />
            <meshStandardMaterial
              color="#00F0FF"
              emissive="#00E5FF"
              emissiveIntensity={1.8}
            />
          </mesh>
        </group>
      </group>

      {/* Neck Joint */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.16, 0.2, 0.06, 32]} />
        <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Compact Chibi Body Armor */}
      <mesh position={[0, -0.45, 0]}>
        <capsuleGeometry args={[0.3, 0.35, 32, 32]} />
        <meshStandardMaterial
          color="#FAFAFA"
          roughness={0.12}
          metalness={0.15}
        />
      </mesh>

      {/* Glowing Cyan Chest LED Bar (Reference Image Style) */}
      <mesh position={[0, -0.42, 0.31]}>
        <capsuleGeometry args={[0.025, 0.14, 16, 16]} />
        <meshStandardMaterial
          color="#00F0FF"
          emissive="#00E5FF"
          emissiveIntensity={2.0}
        />
      </mesh>

      {/* Glowing Cyan Shoulder Armor Accents */}
      <mesh position={[-0.32, -0.32, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#00F0FF" emissive="#00E5FF" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[0.32, -0.32, 0]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#00F0FF" emissive="#00E5FF" emissiveIntensity={1.5} />
      </mesh>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.38, -0.38, 0]}>
        <mesh position={[-0.08, -0.12, 0]}>
          <capsuleGeometry args={[0.065, 0.22, 16, 16]} />
          <meshStandardMaterial color="#E5E5E5" roughness={0.15} metalness={0.1} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group position={[0.38, -0.38, 0]}>
        <mesh position={[0.08, -0.12, 0]}>
          <capsuleGeometry args={[0.065, 0.22, 16, 16]} />
          <meshStandardMaterial color="#E5E5E5" roughness={0.15} metalness={0.1} />
        </mesh>
      </group>

      {/* Subtle Floating Ground Shadow */}
      <mesh position={[0, -0.98, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.0, 1.0]} />
        <meshBasicMaterial color="#000000" opacity={0.3} transparent />
      </mesh>
    </group>
  );
}

export default function GraceRobotCanvas({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="w-[110px] h-[115px] sm:w-[120px] sm:h-[125px] relative cursor-pointer select-none flex items-center justify-center">
      <Canvas camera={{ position: [0, 0.08, 3.4], fov: 42 }}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[4, 6, 4]} intensity={2.4} color="#ffffff" />
        <directionalLight position={[-4, 4, -2]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-3, -2, -2]} intensity={0.8} color="#a3a3a3" />
        <Float speed={2.5} rotationIntensity={0.15} floatIntensity={0.4}>
          <CuteChibiRobot isHovered={isHovered} />
        </Float>
      </Canvas>
    </div>
  );
}
