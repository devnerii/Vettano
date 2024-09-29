// src/components/Header/MenuToggleBar.tsx

import React from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2"; // Ícone de menu aberto
import { MdOutlineCloseFullscreen } from "react-icons/md"; // Ícone de menu fechado

interface MenuToggleBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuToggleBar: React.FC<MenuToggleBarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="text-white focus:outline-none"
      aria-label="Toggle menu"
    >
      {isMenuOpen ? (
        <MdOutlineCloseFullscreen size={30} color="#6966A4" /> // Definindo a cor no ícone MdOutlineCloseFullscreen
      ) : (
        <HiMiniBars3CenterLeft size={30} color="#6966A4" /> // Definindo a cor no ícone HiMiniBars3CenterLeft
      )}
    </button>
  );
};

export default MenuToggleBar;
