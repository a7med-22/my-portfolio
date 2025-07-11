"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home");
    };

    // Set initial active section
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Listen for scroll to update active section
    const handleScroll = () => {
      let current = "#home";
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = `#${section.id}`;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="#home"
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            John<span className="text-purple-500">3D</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-purple-500"
                      : "text-white hover:text-purple-300"
                  }`}
                  onClick={() => setActiveSection(item.path)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-purple-500"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {item.name}
                  {!isActive && (
                    <motion.span
                      className="absolute left-0 top-full block h-[2px] w-0 bg-purple-500"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button className="md:hidden text-white hover:text-purple-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
