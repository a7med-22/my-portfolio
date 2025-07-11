"use client";

import { useRef, useState, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Text3D,
  OrbitControls,
  useFont,
  Float,
  Environment,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

function ModelContent() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const font = useFont("/fonts/helvetiker_regular.typeface.json");

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.1;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 20,
        0.1
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 20,
        0.1
      );
    }
  });

  if (!font) return null;

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <Environment preset="city" />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? [1.15, 1.15, 1.15] : [1, 1, 1]}
        >
          <torusKnotGeometry args={[1, 0.4, 100, 16]} />
          <meshStandardMaterial
            color="#6b46c1"
            roughness={0.1}
            metalness={0.3}
            envMapIntensity={0.5}
          />
        </mesh>
      </Float>

      <Text3D
        font={font.data}
        size={0.4}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[1, -2, 0]}
      >
        Frontend developer
        <meshStandardMaterial
          color="#ffffff"
          emissive="#6b46c1"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.8}
        />
      </Text3D>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </group>
  );
}

export default function Models() {
  return (
    <Suspense fallback={null}>
      <ModelContent />
    </Suspense>
  );
}
