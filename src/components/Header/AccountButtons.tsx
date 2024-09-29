// src/components/Header/AccountButtons.tsx

import React from "react";
import { motion } from "framer-motion";

interface AccountButtonsProps {
  singleButton?: boolean; // Prop opcional
  createAccountText?: string; // Texto opcional para o botão "Criar Conta"
  loginText?: string; // Texto opcional para o botão "Logar"
}

const AccountButtons: React.FC<AccountButtonsProps> = ({
  singleButton = false,
  createAccountText = "Criar Conta", // Valor padrão
  loginText = "Logar", // Valor padrão
}) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (singleButton) return; // Evita alterar estilos se for singleButton
    const target = e.currentTarget;
    target.style.animation =
      "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate";
    target.style.background = "linear-gradient(to right, #8E83FB, #5D52EE)";
    target.style.color = "#fff";
    target.style.backgroundSize = "200% 200%";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (singleButton) return; // Evita alterar estilos se for singleButton
    const target = e.currentTarget;
    target.style.transition = "background 0.5s ease, color 0.5s ease";
    target.style.animation = "none";
    target.style.background = "transparent";
    target.style.color = "";
    target.style.boxShadow = "0 0 15px rgba(93, 82, 238, 0.5)";
  };

  // Define estilos ativos para o botão "Logar"
  const activeLogarStyle = singleButton
    ? {
        animation: "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate",
        background: "linear-gradient(to right, #8E83FB, #5D52EE)",
        color: "#fff",
        backgroundSize: "200% 200%",
        boxShadow: "0 0 15px rgba(93, 82, 238, 0.5)",
      }
    : {};

  return (
    <>
      {!singleButton && (
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
          {createAccountText} {/* Texto customizável */}
        </motion.a>
      )}
      <motion.a
        href="#"
        className="px-6 sm:px-2 md:px-3 lg:px-3 xl:px-3 2xl:px-3 
           py-2 sm:py-1 md:py-2 lg:py-2 xl:py-2 2xl:py-2 
           rounded-full border border-[#242353] 
           dark:border-[#5D52EE] text-white 
           relative overflow-hidden 
           transition duration-500 shadow-lg"
        style={{
          fontFamily: "Montserrat",
          fontWeight: "bold",
          boxShadow: "0 0 15px rgba(93, 82, 238, 0.5)",
          ...activeLogarStyle, // Aplica estilos ativos se singleButton for true
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: singleButton ? 0.7 : 0.8 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {loginText} {/* Texto customizável */}
      </motion.a>
    </>
  );
};

export default AccountButtons;
