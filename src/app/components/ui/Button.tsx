"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center";

  const variantClasses = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    secondary:
      "bg-transparent border border-purple-600 text-purple-400 hover:bg-purple-900 hover:bg-opacity-30",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${
    disabled ? disabledClasses : ""
  } ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href} className={buttonClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {children}
    </motion.button>
  );
}
