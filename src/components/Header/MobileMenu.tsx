import React from "react";
import { Transition } from "@headlessui/react";
import { FaStar, FaUserPlus, FaSignInAlt, FaMoneyBillAlt, FaWallet, FaLanguage, FaSearch, FaAdjust, FaVolumeUp } from "react-icons/fa"; // Importando ícones necessários
import { FaArrowRightToBracket } from "react-icons/fa6";

interface MobileMenuProps {
  isMenuOpen: boolean;
  children: React.ReactNode;
}

// Itens relevantes para as ações de Cadastro e Login
const relevantItems = [
  { icon: <FaUserPlus className="text-[#dcd9ff]" />, label: "Cadastrar" },
  { icon: <FaSignInAlt className="text-[#dcd9ff]" />, label: "Logar" },
];

// Itens de Depósito e Saldo
const financialItems = [
  { icon: <FaMoneyBillAlt className="text-[#dcd9ff]" />, label: "Depósito" },
  { icon: <FaWallet className="text-[#dcd9ff]" />, label: "Saldo" },
];

// Itens de Extras
const extraItems = [
  { icon: <FaLanguage className="text-[#dcd9ff]" />, label: "Trocar Idioma" },
  { icon: <FaSearch className="text-[#dcd9ff]" />, label: "Pesquisar" },
  { icon: <FaAdjust className="text-[#dcd9ff]" />, label: "Trocar Tema" },
  { icon: <FaVolumeUp className="text-[#dcd9ff]" />, label: "Som" },
];

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
          className="md:hidden bg-[#1d1c49] w-full shadow-lg -z-10"
          ref={ref}
          style={{ position: "absolute", top: "100%", left: 0 }}
        >
          <div className="px-4 py-6 flex flex-col space-y-4">
            {/* Seção de Login */}
            <div className="mb-3">
              <div className="flex items-center mb-3 cursor-pointer transition-colors duration-300">
                <FaArrowRightToBracket className="mr-3 text-[#ffa723]" />
                <h2 className="text-base font-semibold">Login</h2>
              </div>
              {relevantItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#2c2a5c] p-4 rounded-xl mb-3 transition-all duration-300 cursor-pointer hover:bg-[#3a3a7a]"
                >
                  {item.icon}
                  <span className="ml-3 text-base font-medium text-[#dcd9ff]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Seção de Depósito e Saldo */}
            <div className="mb-3">
              <div className="flex items-center mb-3 cursor-pointer transition-colors duration-300">
                <FaWallet className="mr-3 text-[#ffa723]" />
                <h2 className="text-base font-semibold">Financeiro</h2>
              </div>
              {financialItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#2c2a5c] p-4 rounded-xl mb-3 transition-all duration-300 cursor-pointer hover:bg-[#3a3a7a]"
                >
                  {item.icon}
                  <span className="ml-3 text-base font-medium text-[#dcd9ff]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Seção de Extras */}
            <div className="mb-3">
              <div className="flex items-center mb-3 cursor-pointer transition-colors duration-300">
                <FaStar className="mr-3 text-[#ffa723]" />
                <h2 className="text-base font-semibold">Extras</h2>
              </div>
              {extraItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#2c2a5c] p-4 rounded-xl mb-3 transition-all duration-300 cursor-pointer hover:bg-[#3a3a7a]"
                >
                  {item.icon}
                  <span className="ml-3 text-base font-medium text-[#dcd9ff]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Renderiza os outros itens passados como children */}
            {children}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default MobileMenu;
