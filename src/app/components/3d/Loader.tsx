"use client";

import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="bg-black bg-opacity-70 p-6 rounded-lg text-center">
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-white">{Math.round(progress)}% loaded</p>
      </div>
    </Html>
  );
}
