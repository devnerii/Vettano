// components/Logo.tsx
import React from "react";
import { motion } from "framer-motion";

const Logo: React.FC = () => {
  return (
    <motion.h1
      className="text-2xl md:text-3xl font-bold text-white"
      style={{
        fontFamily: "Oswald, sans-serif",
        letterSpacing: "0.1em",
        textShadow: "4px 4px 4px black",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      VETTANO
    </motion.h1>
  );
};

export default Logo;
