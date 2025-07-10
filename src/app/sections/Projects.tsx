"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Section from "../components/ui/Section";

const projects = [
  {
    title: "3D E-Commerce",
    description: "Interactive 3D product showcase for e-commerce websites.",
    tags: ["Three.js", "React", "Blender"],
  },
  {
    title: "WebGL Visualization",
    description: "Data visualization using WebGL for high performance.",
    tags: ["WebGL", "D3.js", "TypeScript"],
  },
  {
    title: "AR Portfolio",
    description: "Augmented reality portfolio using WebXR.",
    tags: ["WebXR", "A-Frame", "Three.js"],
  },
  {
    title: "Interactive 3D Map",
    description: "3D map with interactive elements and animations.",
    tags: ["Mapbox", "Three.js", "GSAP"],
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".project-item", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <Section id="projects" title="My Projects">
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-item bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
            whileHover={{ y: -10 }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
