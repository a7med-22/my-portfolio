"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Dribbble", url: "https://dribbble.com" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              My<span className="text-purple-500">3D</span>Portfolio
            </h3>
            <p className="mt-2 text-gray-400">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#9333ea" }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
