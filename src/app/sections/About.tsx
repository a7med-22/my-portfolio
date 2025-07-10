"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Section from "../components/ui/Section";

const skills = [
  "React",
  "Three.js",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Blender",
  "GSAP",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".skill-item", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <Section id="about" title="About Me">
      <div
        ref={containerRef}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
          <p className="mb-6">
            I&apos;m a passionate frontend developer and 3D enthusiast with
            expertise in creating immersive web experiences. I combine my skills
            in web development and 3D design to build unique, interactive
            portfolios and applications.
          </p>
          <p>
            With over 5 years of experience in the industry, I&apos;ve worked on
            various projects ranging from simple websites to complex 3D web
            applications.
          </p>
        </motion.div>

        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="skill-item px-4 py-2 bg-gray-800 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#9333ea" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
