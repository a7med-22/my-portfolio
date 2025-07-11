"use client";

import { motion } from "framer-motion";
import Section from "../components/ui/Section";

const skills = [
  { name: "React", level: 90 },
  { name: "Three.js", level: 85 },
  { name: "TypeScript", level: 88 },
  { name: "Next.js", level: 92 },
  { name: "Framer Motion", level: 80 },
  { name: "Blender", level: 75 },
];

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description:
      "Leading the frontend team in building interactive 3D web applications.",
  },
  {
    role: "UI/UX Designer",
    company: "Creative Solutions",
    period: "2018 - 2020",
    description:
      "Designed and implemented user interfaces for various clients.",
  },
];

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
          <p className="mb-4 text-gray-300">
            I&apos;m a passionate frontend developer specializing in creating
            immersive 3D web experiences. With over 5 years of experience in the
            industry, I combine my skills in web development and 3D design to
            build unique, interactive applications.
          </p>
          <p className="mb-4 text-gray-300">
            When I&apos;m not coding, you can find me creating 3D models,
            exploring new technologies, or contributing to open-source projects.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-6">Experience</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-purple-500 pl-4">
                <h4 className="text-xl font-semibold">{exp.role}</h4>
                <p className="text-purple-400">
                  {exp.company} • {exp.period}
                </p>
                <p className="mt-2 text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">My Skills</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6">Education</h3>
          <div className="border-l-2 border-purple-500 pl-4">
            <h4 className="text-xl font-semibold">
              Master&apos;s in Computer Science
            </h4>
            <p className="text-purple-400">Stanford University • 2016 - 2018</p>
            <p className="mt-2 text-gray-400">
              Specialized in Human-Computer Interaction and 3D Graphics
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
