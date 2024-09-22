// components/Header/ActionButton.tsx
import React from "react";
import { motion } from "framer-motion";

interface ActionButtonProps {
  label: string;
  gradientColors: [string, string];
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, gradientColors }) => {
  return (
    <motion.button
      className="px-3 py-1 md:px-4 md:py-2 rounded-full text-white relative overflow-hidden transition duration-500 shadow-none"
      style={{
        background: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
        fontFamily: "Montserrat",
        fontWeight: 400,
        fontSize: "0.75rem",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      onMouseEnter={(e) => {
        const target = e.currentTarget;
        target.style.boxShadow =
          "0 0 30px rgba(96, 108, 245, 0.8), 0 0 40px rgba(93, 82, 238, 0.6)";
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget;
        target.style.transition = "box-shadow 0.5s ease";
        target.style.boxShadow = "none";
      }}
    >
      {label}
    </motion.button>
  );
};

export default ActionButton;
