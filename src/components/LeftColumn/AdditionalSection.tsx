import React from "react";
import { FaTelegram, FaDiscord, FaTwitter, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Skeleton from "../Skeleton";
import SlideInAnimation from "../animations/SlideInAnimation";

interface AdditionalSectionProps {
  loading?: boolean;
}

const AdditionalSection: React.FC<AdditionalSectionProps> = ({ loading }) => {
  if (loading) {
    return (
      <div className="flex flex-col mt-4 w-full items-center">
        <Skeleton width="20px" height="20px" rounded />
        <Skeleton className="ml-2" width="100px" height="0.75rem" />
        <Skeleton className="mt-2" width="75%" height="0.75rem" />
        <Skeleton className="mt-2" width="75%" height="0.75rem" />
        <Skeleton className="mt-2" width="75%" height="0.75rem" />
        <div className="flex space-x-4 mt-4">
          <Skeleton width="20px" height="20px" rounded />
          <Skeleton width="20px" height="20px" rounded />
          <Skeleton width="20px" height="20px" rounded />
          <Skeleton width="20px" height="20px" rounded />
        </div>
      </div>
    );
  }

  return (
    <SlideInAnimation
      duration={0.5}
      initialX={-100}
      className="flex flex-col mt-4 w-full items-center space-y-2"
    >
      <div className="flex flex-row items-center w-full justify-between px-4">
        <div className="flex items-center">
          <Image
            src="/assets/img/logos/plus.png"
            alt="Adicionais Logo"
            width={20}
            height={20}
          />
          <h1
            className="font-bold ml-2 font-montserrat text-[0.75rem] text-white"
          >
            Adicionais
          </h1>
        </div>
      </div>
      <div
        className="flex flex-col space-y-1 font-montserrat text-xs md:text-sm w-full px-4"
        style={{ color: "#8784B7" }}
      >
        <p className="hover:text-gray-400 transition-colors duration-300">
          Políticas de Privacidade
        </p>
        <p className="hover:text-gray-400 transition-colors duration-300">
          Termos e Condições
        </p>
        <p className="hover:text-gray-400 transition-colors duration-300">
          Contato
        </p>
      </div>
      <div className="flex flex-col w-full px-4 mt-2">
        <div className="flex space-x-8 mb-4 mt-2 justify-start pl-0">
          <FaTelegram
            size={24}
            color="#8784B7"
            className="transform transition-transform duration-300 hover:scale-110"
          />
          <FaDiscord
            size={24}
            color="#8784B7"
            className="transform transition-transform duration-300 hover:scale-110"
          />
          <FaTwitter
            size={24}
            color="#8784B7"
            className="transform transition-transform duration-300 hover:scale-110"
          />
          <FaTiktok
            size={24}
            color="#8784B7"
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </SlideInAnimation>
  );
};

export default AdditionalSection;
