import React from "react";
import { Transition } from "@headlessui/react";
import {
  FaUserPlus,
  FaSignInAlt,
  FaMoneyBillAlt,
  FaWallet,
  FaLanguage,
  FaChevronDown,
  FaSearch,
  FaFileAlt,
  FaPhone,
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import Image from "next/image";

interface TabletMenuProps {
  isMenuOpen: boolean;
  language: string;
  isLanguageMenuOpen: boolean;
  toggleLanguageMenu: () => void;
  changeLanguage: (lang: string) => void;
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

// Nova seção de Extras
const extraItems = [
  { icon: <FaSearch className="text-[#dcd9ff]" />, label: "Pesquisar" },
];

// Seção de links adicionais
const additionalLinks = [
  { icon: <FaFileAlt />, label: "Políticas de Privacidade", href: "#" },
  { icon: <FaFileAlt />, label: "Termos e Condições", href: "#" },
  { icon: <FaPhone />, label: "Contato", href: "#" },
];

// Links sociais
const socialLinks = [
  { icon: <FaTelegramPlane />, href: "#" },
  { icon: <FaDiscord />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaTiktok />, href: "#" },
];

const TabletMenu: React.FC<TabletMenuProps> = ({
  isMenuOpen,
  language,
  isLanguageMenuOpen,
  toggleLanguageMenu,
  changeLanguage,
  children,
}) => {
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
          className="bg-[#1d1c49] w-[25rem] h-[calc(100vh-5rem)] shadow-lg -z-10 overflow-hidden" // Adicionado overflow-hidden aqui
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

            {/* Seção de Trocar Idioma */}
            <div className="mb-3">
              <div className="flex items-center mb-3 cursor-pointer transition-colors duration-300">
                <GrLanguage className="mr-3 text-[#ffa723]" />
                <h2 className="text-base font-semibold">Idioma</h2>
              </div>

              <div
                className="flex items-center bg-[#2c2a5c] p-4 rounded-xl mb-3 transition-all duration-300 cursor-pointer hover:bg-[#3a3a7a]"
                onClick={toggleLanguageMenu}
              >
                <div className="flex items-center w-full justify-between">
                  <div className="flex items-center">
                    <FaLanguage className="text-[#dcd9ff] mr-2" />
                    <span className="text-base font-medium text-[#dcd9ff]">
                      Trocar Idioma
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={
                        language === "PT"
                          ? "/assets/img/logos/brazil_flag.png"
                          : "/assets/img/logos/usa_flag.png"
                      }
                      alt={`${language === "PT" ? "Brazil" : "USA"} Flag`}
                      width={20}
                      height={20}
                      className="object-cover mr-2"
                    />
                    <span className="text-base font-medium text-[#dcd9ff] mr-2">
                      {language === "PT" ? "Português" : "English"}
                    </span>
                    <FaChevronDown className="text-[#dcd9ff]" />
                  </div>
                </div>
              </div>

              {/* Menu de Idiomas */}
              {isLanguageMenuOpen && (
                <div
                  className="absolute right-4 w-40 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md transition-transform transform ease-out duration-200 opacity-0 translate-y-2 z-10"
                  style={{
                    opacity: isLanguageMenuOpen ? "1" : "0",
                    transform: isLanguageMenuOpen
                      ? "translateY(0)"
                      : "translateY(2rem)",
                  }}
                >
                  <button
                    onClick={() => changeLanguage("PT")}
                    className="flex items-center w-full px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden mr-3">
                      <Image
                        src="/assets/img/logos/brazil_flag.png"
                        alt="Brazil Flag"
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      Português
                    </span>
                  </button>
                  <button
                    onClick={() => changeLanguage("ENG")}
                    className="flex items-center w-full px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                  >
                    <div className="w-5 h-5 rounded-full overflow-hidden mr-3">
                      <Image
                        src="/assets/img/logos/usa_flag.png"
                        alt="USA Flag"
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      English
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Seção de Extras */}
            <div className="mb-3">
              <div className="flex items-center mb-3 cursor-pointer transition-colors duration-300">
                <FaSearch className="mr-3 text-[#ffa723]" />
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

            {/* Seção de Links Adicionais */}
            <div>
              <div className="flex items-center mb-3 cursor-pointer transition-colors duration-300">
                <FaFileAlt className="mr-3 text-[#ffa723]" />
                <h2 className="text-base font-semibold">Mais</h2>
              </div>
              {additionalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center text-gray-300 text-sm mb-3 hover:text-[#ffa723] transition-colors duration-300"
                >
                  <span className="mr-3">{link.icon}</span> {link.label}
                </a>
              ))}

              <div className="flex mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-300 text-2xl mr-4 transition-all duration-300"
                  >
                    <span className="text-xl flex items-center justify-center w-12 h-12 bg-[#282759] rounded-xl border border-[#1d1c49] hover:scale-110 hover:text-[#ffa723] transition-all duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Renderiza os outros itens passados como children */}
            {children}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default TabletMenu;
