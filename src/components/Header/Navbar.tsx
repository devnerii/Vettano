// components/Header/Navbar.tsx
import React from "react";

interface NavbarProps {
  isMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen }) => {
  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <ul className="flex space-x-4">
        {["Home", "Sobre", "Serviços", "Contato"].map((item) => (
          <li key={item}>
            <a href="#" className="text-white hover:text-gray-300">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
