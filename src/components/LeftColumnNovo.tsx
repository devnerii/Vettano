// src/components/LeftColumnNovo/LeftColumnNovo.tsx

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTrophy,
  FaStar,
  FaMedal,
  FaCrown,
  FaNewspaper,
  FaStore,
  FaShieldAlt,
  FaFileAlt,
  FaPhone,
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import Image from "next/image";

// Keyframes para animações
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.05); }
`;

// Estilos para esconder a barra de rolagem
const ScrollableNav = styled(motion.nav)`
  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem no WebKit */
  }
  -ms-overflow-style: none; /* Esconde a barra de rolagem no IE e Edge */
  scrollbar-width: none; /* Esconde a barra de rolagem no Firefox */
`;

// Componente Principal
const LeftColumnNovo: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Dados de exemplo
  const lastWinner = {
    avatar: "https://i.pravatar.cc/",
    name: "João Silva",
    score: 1500,
  };

  const dailyRanks = [
    {
      avatar: "https://i.pravatar.cc/",
      name: "Maria Oliveira",
      score: 1400,
    },
    {
      avatar: "https://i.pravatar.cc/",
      name: "João Burro",
      score: 1300,
    },
    {
      avatar: "https://i.pravatar.cc/",
      name: "Ana Souza",
      score: 1200,
    },
  ];

  const relevantItems = [
    { icon: <FaCrown />, label: "Rank" },
    { icon: <FaNewspaper />, label: "Novidades" },
    { icon: <FaStore />, label: "Loja" },
    { icon: <FaShieldAlt />, label: "Segurança" },
  ];

  const additionalLinks = [
    { icon: <FaFileAlt />, label: "Políticas de Privacidade", href: "#" },
    { icon: <FaFileAlt />, label: "Termos e Condições", href: "#" },
    { icon: <FaPhone />, label: "Contato", href: "#" },
  ];

  const socialLinks = [
    { icon: <FaTelegramPlane />, href: "#" },
    { icon: <FaDiscord />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaTiktok />, href: "#" },
  ];

  return (
    <>
      <AnimatePresence>
        {!isExpanded ? (
          <motion.div
            key="expand-icon"
            className="fixed left-0 bottom-20 p-3 z-50 cursor-pointer bg-[#282759] rounded-r-xl"
            onClick={() => setIsExpanded(true)}
            style={{
              width: "3rem",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 17px 30px 0px rgba(13, 13, 46, 0.9)",
              color: "#ffa723",
            }}
            aria-label="Expandir Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaTrophy size="1.5rem" />
          </motion.div>
        ) : (
          <ScrollableNav
            className={`fixed left-0 top-20 z-10 h-[calc(100vh-4rem)] bg-gradient-to-bl from-[#191844] via-[#15143d] to-[#0f0e29] text-white ${
              isExpanded ? "w-80" : "w-0"
            } transition-all duration-300 ease-in-out shadow-lg flex flex-col rounded-br-lg overflow-y-auto`}
            initial={false}
            animate={{ width: isExpanded ? "20rem" : "0rem" }}
            aria-label="Menu Lateral Esquerdo"
          >
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full px-4 py-4"
                >
                  {/* Último Vencedor Section com botão de fechar */}
                  <div className="mb-3 flex justify-between items-center">
                    <div className="flex items-center cursor-pointer transition-colors duration-300">
                      <FaCrown className="mr-3 text-[#ffa723]" />
                      <h2 className="text-base font-semibold">
                        Último Vencedor
                      </h2>
                    </div>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-white hover:text-[#ffa723] transition-colors duration-200"
                      aria-label="Fechar Menu"
                    >
                      <IoMdClose size={20} />
                    </button>
                  </div>

                  {/* Card do Último Vencedor com destaque adicional */}
                  <div className="bg-[#16153f] p-4 rounded-xl flex items-center shadow-lg shadow-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/50 transition-transform duration-300 hover:scale-105 cursor-pointer border-2 border-yellow-500">
                    <Image
                      src={lastWinner.avatar}
                      alt="Avatar"
                      width={60}
                      height={60}
                      className="rounded-full mr-4 border-2 border-yellow-500 shadow-md shadow-yellow-500/50"
                    />
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-white mb-1">
                        {lastWinner.name}
                      </div>
                      <div className="text-sm text-gray-300">
                        {lastWinner.score} pontos
                      </div>
                    </div>
                    <FaTrophy className="text-yellow-500 text-2xl" />
                  </div>

                  {/* Rank do Dia Section */}
                  <div className="mb-3 mt-4">
                    <div className="flex items-center mb-3 cursor-pointer transition-colors duration-300">
                      <FaStar className="mr-3 text-[#ffa723]" />
                      <h2 className="text-base font-semibold">Rank do Dia</h2>
                    </div>
                    {dailyRanks.map((rank, index) => (
                      <div
                        key={index}
                        className={`flex items-center mb-3 p-2 rounded-lg transition-all duration-300 cursor-pointer hover:translate-x-1 ${
                          index === 0
                            ? "border-2 border-yellow-400 shadow-lg shadow-yellow-400/50 hover:bg-yellow-400/30" // Hover dourado leve
                            : index === 1
                            ? "border-2 border-gray-300 shadow-lg shadow-gray-300/50 hover:bg-gray-300/20" // Hover cinza leve
                            : index === 2
                            ? "border-2 border-orange-500 shadow-lg shadow-orange-500/50 hover:bg-orange-500/20" // Hover laranja leve
                            : "border border-gray-700 shadow-md hover:bg-gray-700/20" // Hover padrão
                        }`}
                      >
                        <Image
                          src={rank.avatar}
                          alt="Avatar"
                          width={35}
                          height={35}
                          className="rounded-full mr-3"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium">{rank.name}</div>
                          <div className="text-xs text-gray-300">
                            {rank.score} pontos
                          </div>
                        </div>
                        <div className="mr-2 text-lg font-semibold text-[#ffa723]">
                          {index === 0 && (
                            <FaMedal className="text-yellow-400" />
                          )}{" "}
                          {/* Medalha de Ouro */}
                          {index === 1 && (
                            <FaMedal className="text-gray-300" />
                          )}{" "}
                          {/* Medalha de Prata */}
                          {index === 2 && (
                            <FaMedal className="text-orange-500" />
                          )}{" "}
                          {/* Medalha de Bronze */}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Relevantes Section */}
                  <div className="mb-3">
                    <div className="flex items-center mb-3 cursor-pointer transition-colors duration-300">
                      <FaStar className="mr-3 text-[#ffa723]" />
                      <h2 className="text-base font-semibold">Relevantes</h2>
                    </div>
                    {relevantItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-[#2c2a5c] p-4 rounded-xl mb-3 transition-all duration-300 cursor-pointer hover:bg-[#3a3a7a]"
                      >
                        {item.icon}
                        <span className="ml-3 text-base font-medium">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Additional Links Section */}
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
                        <span className="mr-3">{link.icon}</span>{" "}
                        {/* Ajuste o valor aqui */}
                        {link.label}
                      </a>
                    ))}

                    <div className="flex mt-4 mb-8 ml-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="text-gray-300 text-2xl mr-14 hover:scale-110 hover:text-[#ffa723] transition-all duration-300"
                        >
                          <span className="text-xl">{social.icon}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollableNav>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeftColumnNovo;
