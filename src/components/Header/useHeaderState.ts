// src/components/Header/useHeaderState.ts

import { useState } from "react";

const useHeaderState = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("PT");

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen((prev) => !prev);
  const changeLanguage = (lang: string) => setLanguage(lang);

  return {
    isDarkMode,
    isMenuOpen,
    isLoaded,
    isLanguageMenuOpen,
    language,
    toggleDarkMode,
    toggleMenu,
    toggleLanguageMenu,
    changeLanguage,
    setIsLoaded,
  };
};

export default useHeaderState;
