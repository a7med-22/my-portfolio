"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen py-20 px-6 flex flex-col justify-center ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}
