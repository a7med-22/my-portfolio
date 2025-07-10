"use client";

import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, useMatcapTexture, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function Models() {
  const [matcapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [font, setFont] = useState<any>(null);

  // Load font
  useEffect(() => {
    import("@react-three/drei").then((module) => {
      <module className="preloadFont"></module>("/fonts/helvetiker_regular.typeface.json");
      setFont(true);
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 10,
        0.1
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.1
      );
    }
  });

  if (!font) return null;

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      >
        <icosahedronGeometry args={[1, 0]} />
        <meshMatcapMaterial matcap={matcapTexture} />
      </mesh>

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[0, -2, 0]}
      >
        Portfolio
        <meshMatcapMaterial matcap={matcapTexture} />
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
