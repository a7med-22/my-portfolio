"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

export default function Hero() {
  return (
    <Section id="hero" title="">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
        >
          <Image
            src="/profile.png" // Place your image in public folder
            alt="John Doe"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I&apos;m <span className="text-purple-500">John Doe</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Creative Frontend Developer & 3D Artist
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Button href="#projects" variant="primary">
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
