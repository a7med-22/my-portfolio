"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

export default function Hero() {
  const [, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (inView) {
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        subtitleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        buttonRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
      );
    }
  }, [inView]);

  return (
    <Section id="hero" title="">
      <div ref={heroRef} className="flex flex-col items-center justify-center">
        <div className="text-center">
          <motion.h1
            ref={titleRef}
            className="text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Creative 3D Portfolio
          </motion.h1>
          <motion.p
            ref={subtitleRef}
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
          >
            Welcome to my interactive 3D portfolio showcasing my work and skills
            in web development and 3D design.
          </motion.p>
          <motion.div ref={buttonRef} className="flex justify-center gap-4">
            <Button href="#projects" variant="primary">
              View Projects
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
