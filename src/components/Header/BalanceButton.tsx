import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BalanceButton: React.FC = () => {
  const initialStyle = {
    background: "#242353",
    color: "#ffffff",
    borderColor: "#242353",
  };

  const gradientStyle = {
    background: "linear-gradient(to right, #8E83FB, #5D52EE)",
    color: "#fff",
    backgroundSize: "200% 200%",
    transition: "background 0.5s ease, color 0.5s ease",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    Object.assign(target.style, gradientStyle);
    target.style.animation =
      "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate";
    target.style.borderColor = "transparent";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transition = "background 0.5s ease, color 0.5s ease";
    target.style.animation = "none";
    Object.assign(target.style, initialStyle);
  };

  return (
    <motion.div
      className="flex items-center px-2 py-1 md:px-2.5 md:py-2 rounded-full border border-[#242353] relative overflow-hidden transition duration-500 shadow-lg"
      style={{
        fontFamily: "Montserrat",
        fontWeight: "bold",
        ...initialStyle,
        borderWidth: "2px",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/assets/img/logos/liras.png"
        alt="Lira Icon"
        width={20} // Substitua pelos valores reais necessários
        height={20} // Substitua pelos valores reais necessários
        className="object-cover rounded-full mr-1 md:mr-2"
      />
      <span className="text-[#ffffff] text-xs md:text-sm">999.999</span>
      <span className="text-[#334ba3] ml-1 md:ml-2 text-xs md:text-sm">₺</span>
    </motion.div>
  );
};

export default BalanceButton;
