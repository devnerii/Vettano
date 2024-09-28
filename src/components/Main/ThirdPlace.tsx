// src/components/Main/FirstPlace.tsx
import React from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa"; // Ícone de troféu

interface FirstPlaceProps {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  profileImage?: string;
  name?: string;
}

const ThirdPlace: React.FC<FirstPlaceProps> = ({
  top,
  right,
  left,
  bottom,
  profileImage = "https://avatar.iran.liara.run/public/11", // Substitua pelo caminho da imagem padrão
  name = "Turfyranger", // Nome de exemplo
}) => {
  // Função para determinar o tamanho da fonte com base no comprimento do nome
  const getFontSize = (nameLength: number) => {
    if (nameLength > 12) return "text-sm"; // Para 15-16 caracteres
    if (nameLength > 10) return "text-base"; // Para 11-14 caracteres
    return "text-xl"; // Para 1-10 caracteres
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
      <div className="w-16 h-16 rounded-full overflow-hidden mb-3 outline outline-2 outline-[#8c81fb] outline-offset-2 bg-[#282759] flex-shrink-0">
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
      <div className="flex items-center bg-[#6C56AA] text-white py-1.5 px-4 rounded-xl space-x-2">
        <span className="font-bold opacity-35">#3</span>
        <span className="separator opacity-35">|</span>
        <FaTrophy className="text-xl" />
        <span
          className={`font-bold text-center ${getFontSize(name.length)}`}
          title={name}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default ThirdPlace;
