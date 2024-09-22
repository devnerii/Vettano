// components/AccountButtons.tsx
import React from "react";
import { motion } from "framer-motion";

const AccountButtons: React.FC = () => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.animation =
      "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate";
    target.style.background =
      "linear-gradient(to right, #8E83FB, #5D52EE)";
    target.style.color = "#fff";
    target.style.backgroundSize = "200% 200%";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    target.style.transition = "background 0.5s ease, color 0.5s ease";
    target.style.animation = "none";
    target.style.background = "transparent";
    target.style.color = "";
    target.style.boxShadow =
      "0 0 15px rgba(93, 82, 238, 0.5)";
  };

  return (
    <>
      <motion.a
        href="#"
        className="px-2 md:px-3 py-1 md:py-2 rounded-full border border-[#242353] dark:border-[#5D52EE] text-white relative overflow-hidden transition duration-500 shadow-lg"
        style={{
          fontFamily: "Montserrat",
          fontWeight: "bold",
          boxShadow: "0 0 15px rgba(93, 82, 238, 0.5)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Criar Conta
      </motion.a>
      <motion.a
        href="#"
        className="px-2 md:px-3 py-1 md:py-2 rounded-full border border-[#242353] dark:border-[#5D52EE] text-white relative overflow-hidden transition duration-500 shadow-lg"
        style={{
          fontFamily: "Montserrat",
          fontWeight: "bold",
          boxShadow: "0 0 15px rgba(93, 82, 238, 0.5)",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Logar
      </motion.a>
    </>
  );
};

export default AccountButtons;
