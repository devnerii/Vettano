// src/components/Main/ThirdPlace.tsx

import React from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa"; // Ícone de Troféu

interface ThirdPlaceProps {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  profileImage?: string;
  name?: string;
}

const ThirdPlace: React.FC<ThirdPlaceProps> = ({
  top,
  right,
  left,
  bottom,
  profileImage = "https://avatar.iran.liara.run/public/11", // Substitua pelo caminho da imagem padrão
  name = "Turfyranger", // Nome de exemplo
}) => {
  // Função para determinar o tamanho da fonte com base no comprimento do nome
  const getFontSize = (nameLength: number) => {
    if (nameLength > 12) {
      // Para 13+ caracteres
      return "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl";
    }
    if (nameLength > 10) {
      // Para 11-12 caracteres
      return "text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl";
    }
    // Para 1-10 caracteres
    return "text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl";
  };

  return (
    <div
      className="absolute flex flex-col items-center"
      style={{
        top: top || "auto",
        right: right || "auto",
        left: left || "auto",
        bottom: bottom || "auto",
      }}
    >
      {/* Imagem de Perfil */}
      <div className="w-10 sm:w-12 md:w-14 lg:w-16 xl:w-18 2xl:w-20 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-20 rounded-full overflow-hidden mb-3 outline outline-2 outline-[#8c81fb] outline-offset-2 bg-[#282759] flex-shrink-0">
        <Image
          src={profileImage}
          alt="Imagem do Perfil"
          width={64}
          height={64}
          className="object-cover w-full h-full"
          quality={100}
        />
      </div>

      {/* Contêiner de Posição, Troféu e Nome */}
      <div className="flex items-center bg-[#6C56AA] text-white py-0.5 sm:py-1 md:py-1 lg:py-2 xl:py-2.5 2xl:py-3 px-1 sm:px-2.5 md:px-2 lg:px-3.5 xl:px-4 2xl:px-4.5 rounded-xl space-x-0.5 sm:space-x-1 md:space-x-1.5 lg:space-x-2 xl:space-x-2.5 2xl:space-x-3">
        <span className="font-bold opacity-35 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
          #3
        </span>
        <span className="separator opacity-35 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
          |
        </span>
        <FaTrophy className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl" />
        <span
          className={`font-bold text-center ${getFontSize(
            name.length
          )} text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg`}
          title={name}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default ThirdPlace;
