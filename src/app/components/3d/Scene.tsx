"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import Models from "./Models";
import Effects from "./Effects";

export default function Scene() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 12],
      }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace, // Updated property
      }}
      className="canvas-container"
    >
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#6b46c1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />
      <Models />
      <Effects />
      <Preload all />
    </Canvas>
  );
}
