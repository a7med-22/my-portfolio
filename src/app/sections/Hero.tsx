"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

// Animation variants for letter-by-letter animation
const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
}: AnimatedTextProps) => {
  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {text.split("").map((char: string, index: number) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
          style={{
            minWidth: char === " " ? "0.25em" : "auto",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface AnimatedColorTextProps {
  normalText: string;
  highlightedText: string;
  className?: string;
  delay?: number;
}

const AnimatedColorText = ({
  normalText,
  highlightedText,
  className = "",
  delay = 0,
}: AnimatedColorTextProps) => {
  const fullText = normalText + highlightedText;

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {fullText.split("").map((char: string, index: number) => {
        const isHighlighted = index >= normalText.length;
        return (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`inline-block ${
              isHighlighted ? "text-purple-500 font-bold" : ""
            }`}
            style={{
              minWidth: char === " " ? "0.25em" : "auto",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default function Hero() {
  return (
    <Section id="hero" title="">
      <div className="flex flex-col md:flex-row items-start justify-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative -top-10 w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
        >
          <Image
            src="/profile.png"
            alt="Ahmed Osama"
            width={320}
            height={320}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <AnimatedColorText
              normalText="Hi, I'm "
              highlightedText="Ahmed Osama"
              delay={0.2}
            />
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            <AnimatedText
              text="Creative Frontend Developer & 3D Artist"
              delay={1.0}
            />
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, type: "spring", stiffness: 100 }}
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
