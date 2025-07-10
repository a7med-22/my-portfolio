"use client";

import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function Effects() {
  const particlesRef = useRef<THREE.Points>(null);

  const count = 500;

  // useMemo عشان متتعملش كل رندر
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    for (let i = 0; i < count; i++) {
      sizes[i] = Math.random() * 0.2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [count]);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.0005;
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.8}
      />
    </points>
  );
}
