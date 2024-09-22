// components/MobileMenu.tsx
import React from "react";
import { Transition } from "@headlessui/react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  menuItems: string[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, menuItems }) => {
  return (
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
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" aria-label="Mobile Navigation">
            {menuItems.map((text) => (
              <a
                key={text}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 dark:text-white hover:bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient-x hover:shadow-lg transition duration-300"
                style={{ fontFamily: "Montserrat", fontWeight: "medium" }}
              >
                {text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </Transition>
  );
};

export default MobileMenu;
