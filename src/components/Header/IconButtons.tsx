import React from "react";
import { FaSearch, FaSun, FaMoon, FaVolumeUp } from "react-icons/fa";
import { motion } from "framer-motion";
import useBreakpoint from "../../hooks/useBreakpoint"; // Importando o hook useBreakpoint

interface IconButtonsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const IconButtons: React.FC<IconButtonsProps> = ({ isDarkMode, toggleDarkMode }) => {
  const breakpoint = useBreakpoint(); // Obtendo o breakpoint atual

  const icons = [
    { Icon: FaSearch, action: undefined, showOnBreakpoint: "sm" }, // Adicionando a condição de breakpoint
    { Icon: isDarkMode ? FaSun : FaMoon, action: toggleDarkMode },
    { Icon: FaVolumeUp, action: undefined },
  ];

  return (
    <>
      {icons.map(({ Icon, action, showOnBreakpoint }, index) => {
        // Verificando se o ícone deve ser mostrado com base no breakpoint
        const shouldShowIcon =
          !showOnBreakpoint || breakpoint !== "base" || (showOnBreakpoint === "sm" && breakpoint !== "base");

        if (!shouldShowIcon) return null; // Não renderiza o ícone se a condição não for atendida

        const borderColor = "border-[#242353]";
        const gradient = "from-[#8E83FB] to-[#5D52EE]";
        return (
          <motion.button
            key={index}
            aria-label="Icon Button"
            className={`p-1 md:p-1.5 border-2 ${borderColor} rounded-full hover:bg-gradient-to-r ${gradient} hover:shadow-lg transition duration-300`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            onClick={action}
          >
            <Icon className="text-xs md:text-sm text-white transition duration-300" />
          </motion.button>
        );
      })}
    </>
  );
};

export default IconButtons;
