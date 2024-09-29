// src/components/Header/MobileMenu.tsx

import React from "react";
import { Transition } from "@headlessui/react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  children: React.ReactNode;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, children }) => {
  return (
    <Transition
      show={isMenuOpen}
      enter="transition ease-out duration-300 transform"
      enterFrom="-translate-y-full opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition ease-in duration-200 transform"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="-translate-y-full opacity-0"
    >
      {(ref: React.Ref<HTMLDivElement>) => (
        <div
          className="md:hidden bg-[#1d1c49] w-full shadow-lg -z-10" // Adicionada sombra e z-index
          ref={ref}
          style={{ position: "absolute", top: "100%", left: 0 }}
        >
          <div className="px-4 py-6 flex flex-col space-y-4">
            {children}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default MobileMenu;
