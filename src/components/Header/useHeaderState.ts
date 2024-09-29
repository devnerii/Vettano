// src/components/Header/useHeaderState.ts

import { useState } from "react";

const useHeaderState = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState("PT");

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
    toggleLanguageMenu,
    changeLanguage,
    setIsLoaded,
    toggleMenu,
  };
};

export default useHeaderState;
