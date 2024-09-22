// components/IconButtons.tsx
import React from "react";
import { FaSearch, FaSun, FaMoon, FaVolumeUp } from "react-icons/fa";
import { motion } from "framer-motion";

interface IconButtonsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const IconButtons: React.FC<IconButtonsProps> = ({ isDarkMode, toggleDarkMode }) => {
  const icons = [
    { Icon: FaSearch, action: undefined },
    { Icon: isDarkMode ? FaSun : FaMoon, action: toggleDarkMode },
    { Icon: FaVolumeUp, action: undefined },
  ];

  return (
    <>
      {icons.map(({ Icon, action }, index) => {
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
