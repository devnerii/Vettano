import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaSun,
  FaMoon,
  FaVolumeUp,
  FaChevronDown,
} from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import LeftColumn from "./LeftColumn";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState("PT");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

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
    <>
      <header className="relative bg-custom-bg text-white shadow-md transition-colors duration-300 ease-in-out">
        {!isLoaded ? (
          <div className="animate-pulse flex items-center justify-between p-2 md:p-3 h-16 md:h-20">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 md:w-1/6"
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto p-2 md:p-3 grid grid-cols-12 gap-4 items-center h-16 md:h-20"
            role="banner"
          >
            <div className="col-span-12 md:col-span-2">
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
            </div>

            <div className="col-span-12 md:col-span-6 flex justify-end items-center space-x-1 md:space-x-2 ml-auto">
              <motion.button
                className="px-3 py-1 md:px-4 md:py-2 rounded-full text-white relative overflow-hidden transition duration-500 shadow-none"
                style={{
                  background: "linear-gradient(to right, #8E83FB, #5D52EE)",
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
                Depósito
              </motion.button>

              <motion.div
                className="flex items-center px-2 py-1 md:px-2.5 md:py-2 rounded-full border border-[#242353] relative overflow-hidden transition duration-500 shadow-lg"
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  backgroundColor: "#242353",
                  borderWidth: "2px",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  Object.assign(target.style, gradientStyle);
                  target.style.animation =
                    "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate";
                  target.style.borderColor = "transparent";
                  target.style.borderWidth = "2px";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.transition =
                    "background 0.5s ease, color 0.5s ease, border-color 0.5s ease, border-width 0.5s ease";
                  target.style.animation = "none";
                  target.style.background = "#121236";
                  target.style.color = "";
                  target.style.borderColor = "#1d1c49";
                  target.style.borderWidth = "2px";
                }}
              >
                <Image
                  src="/assets/img/logos/liras.png"
                  alt="Lira Icon"
                  width={20}
                  height={20}
                  className="w-4 h-4 md:w-5 md:h-5 object-cover rounded-full mr-1 md:mr-2"
                />
                <span className="text-[#ffffff] text-xs md:text-sm">
                  999.999
                </span>
                <span className="text-[#334ba3] ml-1 md:ml-2 text-xs md:text-sm">
                  ₺
                </span>
              </motion.div>

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
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
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
                          width={20}
                          height={20}
                          className="w-full h-full object-cover"
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
                          width={20}
                          height={20}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      ENG
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="relative col-span-12 md:col-span-4 flex justify-end items-center space-x-1 md:space-x-2">
              <div className="ml-5 absolute left-0 top-0 bottom-0 w-0.5 bg-[#282759] md:block hidden" />

              {[FaSearch, isDarkMode ? FaSun : FaMoon, FaVolumeUp].map(
                (Icon, index) => {
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
                      onClick={index === 1 ? toggleDarkMode : undefined}
                    >
                      <Icon className="text-xs md:text-sm text-white transition duration-300" />
                    </motion.button>
                  );
                }
              )}

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
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.animation =
                    "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate";
                  target.style.background =
                    "linear-gradient(to right, #8E83FB, #5D52EE)";
                  target.style.color = "#fff";
                  target.style.backgroundSize = "200% 200%";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.transition =
                    "background 0.5s ease, color 0.5s ease";
                  target.style.animation = "none";
                  target.style.background = "transparent";
                  target.style.color = "";
                  target.style.boxShadow =
                    "0 0 15px rgba(93, 82, 238, 0.5)";
                }}
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
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.animation =
                    "gradientSlide 1.5s ease forwards, pulseGlow 1.5s infinite alternate";
                  target.style.background =
                    "linear-gradient(to right, #8E83FB, #5D52EE)";
                  target.style.color = "#fff";
                  target.style.backgroundSize = "200% 200%";
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.transition =
                    "background 0.5s ease, color 0.5s ease";
                  target.style.animation = "none";
                  target.style.background = "transparent";
                  target.style.color = "";
                  target.style.boxShadow =
                    "0 0 15px rgba(93, 82, 238, 0.5)";
                }}
              >
                Logar
              </motion.a>
            </div>
          </motion.div>
        )}

        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref: React.Ref<HTMLDivElement>) => (
            <div className="md:hidden bg-gray-50 dark:bg-gray-900" ref={ref}>
              <nav
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                aria-label="Mobile Navigation"
              >
                {["Criar Conta", "Logar", "Home", "Sobre", "Contato"].map(
                  (text) => (
                    <a
                      key={text}
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 dark:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x hover:shadow-lg transition duration-300"
                      style={{ fontFamily: "Montserrat", fontWeight: "medium" }}
                    >
                      {text}
                    </a>
                  )
                )}
              </nav>
            </div>
          )}
        </Transition>

        <style jsx>{`
          @keyframes gradientSlide {
            0% {
              background-position: left;
            }
            100% {
              background-position: right;
            }
          }

          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.75),
                0 0 30px rgba(147, 51, 234, 0.75);
            }
            100% {
              box-shadow: 0 0 30px rgba(59, 130, 246, 1),
                0 0 40px rgba(147, 51, 234, 1);
            }
          }

          @media (max-width: 768px) {
            .group-hover\\:scale-x-100 {
              transform: scaleX(1) !important;
            }

            .p-2.rounded-full.hover\\:bg-gradient-to-r,
            .hidden.md\\:inline.px-4.py-2.rounded-full {
              animation: none !important;
              box-shadow: none !important;
              transition: none !important;
            }

            .group-hover\\:scale-x-100,
            .hover\\:shadow-lg {
              transition: none !important;
            }

            .text-3xl.font-bold {
              font-size: 2rem;
            }

            nav[aria-label="Mobile Navigation"] a {
              text-align: center;
              display: block;
              width: 100%;
            }
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
