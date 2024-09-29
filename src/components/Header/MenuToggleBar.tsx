import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface MenuToggleBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MenuToggleBar: React.FC<MenuToggleBarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="text-white focus:outline-none md:hidden"
      aria-label="Toggle menu"
    >
      {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  );
};

export default MenuToggleBar;
