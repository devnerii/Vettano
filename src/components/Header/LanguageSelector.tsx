import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

interface LanguageSelectorProps {
  language: string;
  isLanguageMenuOpen: boolean;
  toggleLanguageMenu: () => void;
  changeLanguage: (lang: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  isLanguageMenuOpen,
  toggleLanguageMenu,
  changeLanguage,
}) => {
  const gradientStyle = {
    background: "linear-gradient(to right, #8E83FB, #5D52EE)",
    color: "#fff",
    backgroundSize: "200% 200%",
    transition: "background 0.5s ease, color 0.5s ease",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    Object.assign(target.style, gradientStyle);
    target.style.animation =
      "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate";
    target.style.borderColor = "transparent";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    target.style.transition = "background 0.5s ease, color 0.5s ease";
    target.style.animation = "none";
    target.style.background = "transparent";
    target.style.color = "";
    target.style.borderColor = "#282759";
  };

  return (
    <div className="relative">
      <motion.button
        aria-label="Language"
        onClick={toggleLanguageMenu}
        className="flex items-center space-x-1 p-1 border border-[#282759] rounded-full hover:shadow-lg transition duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ fontFamily: "Montserrat", fontWeight: "medium" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full overflow-hidden">
          <Image
            src={
              language === "PT"
                ? "/assets/img/logos/brazil_flag.png"
                : "/assets/img/logos/usa_flag.png"
            }
            alt={`${language === "PT" ? "Brazil" : "USA"} Flag`}
            width={20} // substitua pelo valor real da largura
            height={20} // substitua pelo valor real da altura
            className="object-cover"
          />
        </div>
        <span className="text-blue-900 dark:text-white text-xs md:text-sm">
          {language}
        </span>
        <FaChevronDown className="text-blue-900 dark:text-white" />
      </motion.button>

      {isLanguageMenuOpen && (
        <div className="absolute right-0 mt-2 w-24 md:w-32 bg-white dark:bg-gray-800 border rounded shadow-lg">
          <button
            onClick={() => changeLanguage("PT")}
            className="flex items-center w-full px-3 md:px-4 py-1 md:py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            style={{ fontFamily: "Montserrat", fontWeight: "regular" }}
          >
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full overflow-hidden mr-1 md:mr-2">
              <Image
                src="/assets/img/logos/brazil_flag.png"
                alt="Brazil Flag"
                width={20} // substitua pelo valor real da largura
                height={20} // substitua pelo valor real da altura
                className="object-cover"
              />
            </div>
            PT
          </button>
          <button
            onClick={() => changeLanguage("ENG")}
            className="flex items-center w-full px-3 md:px-4 py-1 md:py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
            style={{ fontFamily: "Montserrat", fontWeight: "regular" }}
          >
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full overflow-hidden mr-1 md:mr-2">
              <Image
                src="/assets/img/logos/usa_flag.png"
                alt="USA Flag"
                width={20} // substitua pelo valor real da largura
                height={20} // substitua pelo valor real da altura
                className="object-cover"
              />
            </div>
            ENG
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;