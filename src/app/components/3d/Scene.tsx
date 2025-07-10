"use client";

import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";
import Models from "./Models";
import Effects from "./Effects";
import Loader from "./Loader";

export default function Scene() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 10],
      }}
      gl={{ antialias: true }}
      className="canvas-container"
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Models />
        <Effects />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
