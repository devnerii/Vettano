// src/components/Header/HeaderVariants.tsx

import React from "react";
import Logo from "./Logo";
import LanguageSelector from "./LanguageSelector";
import AccountButtons from "./AccountButtons";
import IconButtons from "./IconButtons";
import MobileMenu from "./MobileMenu";
import LoadingScreen from "./LoadingScreen";
import useHeaderState from "./useHeaderState";
import ActionButton from "./ActionButton";
import BalanceButton from "./BalanceButton";
import FallInAnimation from "../animations/FallInAnimation";
import MenuToggleBar from "./MenuToggleBar";
import useBreakpoint from "../../hooks/useBreakpoint";

const HeaderVariants: React.FC = () => {
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
    toggleMenu,
  } = useHeaderState();

  const breakpoint = useBreakpoint();

  React.useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  const renderLargeHeader = () => (
    <FallInAnimation duration={1} initialY={-50}>
      <div
        className="container mx-auto custom-max-w p-1 md:p-3 grid grid-cols-12 gap-4 items-center h-20 md:h-22"
        role="banner"
      >
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
  );

  const renderMediumHeader = () => (
    <FallInAnimation duration={1} initialY={-50}>
      <div
        className="container mx-auto custom-max-w p-2 grid grid-cols-12 gap-4 items-center h-20"
        role="banner"
      >
        <div className="col-span-6 flex items-center space-x-2">
          <MenuToggleBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Logo />
        </div>

        <div className="col-span-6 flex justify-end items-center space-x-2">
          <ActionButton
            label="Criar Conta"
            gradientColors={["#8E83FB", "#5D52EE"]}
          />
          <AccountButtons />
        </div>
      </div>
    </FallInAnimation>
  );

  const renderSmallHeader = () => (
    <FallInAnimation duration={1} initialY={-50}>
      <div
        className="container mx-auto custom-max-w p-2 px-6 grid grid-cols-12 gap-4 items-center h-20"
        role="banner"
      >
        <div className="col-span-5 flex items-center space-x-2">
          <MenuToggleBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <Logo />
        </div>

        <div className="col-span-7 flex justify-end items-center space-x-2">
            {/* <IconButtons isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} /> */}
        <LanguageSelector
            language={language}
            isLanguageMenuOpen={isLanguageMenuOpen}
            toggleLanguageMenu={toggleLanguageMenu}
            changeLanguage={changeLanguage}
          />
          <AccountButtons singleButton />
        </div>
      </div>
    </FallInAnimation>
  );

  const renderHeader = () => {
    if (breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl") {
      return renderLargeHeader();
    } else if (breakpoint === "md") {
      return renderMediumHeader();
    } else {
      return renderSmallHeader();
    }
  };

  return (
    <>
      <header className="relative bg-custom-bg text-white shadow-md transition-colors duration-300 ease-in-out z-50">
        {!isLoaded ? (
          <LoadingScreen />
        ) : (
          renderHeader()
        )}

        <MobileMenu isMenuOpen={isMenuOpen}>
          {/* Conteúdo personalizável do menu mobile */}
          <nav className="flex flex-col space-y-4">
           
            {/* Adicione mais conteúdo personalizado conforme necessário */}
          </nav>
        </MobileMenu>
      </header>
    </>
  );
};

export default HeaderVariants;
