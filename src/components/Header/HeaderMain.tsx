// components/Header/Header.tsx

import React, { useEffect } from "react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import AccountButtons from "./AccountButtons";
import IconButtons from "./IconButtons";
import MobileMenu from "./MobileMenu";
import LoadingScreen from "./LoadingScreen";
import useHeaderState from "./useHeaderState";
import Navbar from "./Navbar";
import "./styles/Header.css";
import ActionButton from "./ActionButton";
import BalanceButton from "./BalanceButton";
import FallInAnimation from "../animations/FallInAnimation";

const Header: React.FC = () => {
  const {
    isDarkMode,
    isMenuOpen,
    isLoaded,
    isLanguageMenuOpen,
    language,
    toggleDarkMode,
    toggleLanguageMenu,
    changeLanguage,
    setIsLoaded,
  } = useHeaderState();

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <>
      <header className="relative bg-custom-bg text-white shadow-md transition-colors duration-300 ease-in-out z-50">
        {!isLoaded ? (
          <LoadingScreen />
        ) : (
          <FallInAnimation duration={1} initialY={-50}>
            <div className="container mx-auto custom-max-w p-1 md:p-3 grid grid-cols-12 gap-4 items-center h-20 md:h-22" role="banner">
              <div className="col-span-12 md:col-span-2">
                <Logo />
              </div>

              <div className="col-span-12 md:col-span-6 flex justify-end items-center space-x-1 md:space-x-2 ml-auto">
                <ActionButton
                  label="Depósito"
                  gradientColors={["#8E83FB", "#5D52EE"]}
                />

                <BalanceButton />

                <LanguageSelector
                  language={language}
                  isLanguageMenuOpen={isLanguageMenuOpen}
                  toggleLanguageMenu={toggleLanguageMenu}
                  changeLanguage={changeLanguage}
                />
              </div>

              <div className="relative col-span-12 md:col-span-4 flex justify-end items-center space-x-1 md:space-x-2">
                <div className="ml-5 absolute left-0 top-0 bottom-0 w-0.5 bg-[#282759] md:block hidden" />

                <IconButtons isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

                <AccountButtons />
              </div>
            </div>
          </FallInAnimation>
        )}

        <MobileMenu
          isMenuOpen={isMenuOpen}
          menuItems={["Criar Conta", "Logar", "Home", "Sobre", "Contato"]}
        />

        <Navbar isMenuOpen={isMenuOpen} />
      </header>
    </>
  );
};

export default Header;
