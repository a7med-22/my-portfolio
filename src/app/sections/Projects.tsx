"use client";

import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "3D E-Commerce Showcase",
    description:
      "Interactive 3D product visualization for online stores with custom lighting and materials.",
    tags: ["Three.js", "React", "Blender"],
    image: "/projects/ecommerce.jpg",
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    title: "WebGL Data Visualization",
    description:
      "Real-time data visualization dashboard with WebGL rendering for high performance.",
    tags: ["WebGL", "D3.js", "TypeScript"],
    image: "/projects/dataviz.jpg",
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    title: "AR Portfolio Experience",
    description:
      "Augmented reality portfolio that can be viewed through mobile devices using WebXR.",
    tags: ["WebXR", "A-Frame", "Three.js"],
    image: "/projects/ar.jpg",
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    title: "Interactive 3D Map",
    description:
      "3D map visualization with interactive elements and custom terrain generation.",
    tags: ["Mapbox", "Three.js", "GSAP"],
    image: "/projects/map.jpg",
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-colors"
          >
            <div className="relative h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
