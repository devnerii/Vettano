// components/Header/useHeaderState.ts
import { useState } from "react";

const useHeaderState = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // Estado para controlar o carregamento
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [language, setLanguage] = useState("PT");

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
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
    setIsLoaded, // Method to update the loading state
  };
};

export default useHeaderState;
