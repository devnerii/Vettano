// Games.tsx
import React from "react";
import { IoGameController } from "react-icons/io5";
import { MdLeaderboard } from "react-icons/md";
import Image from "next/image";
import CustomButton from "./CustomButton"; // Ajuste o caminho conforme a estrutura do seu projeto
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Games: React.FC = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl px-5 sm:px-[23px] md:px-[37px] lg:px-[60px] xl:px-[87px] 2xl:px-[94px] mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 w-full h-full">
        {/* Título Jogos */}
        <div className="col-span-12 flex justify-start items-center mt-6 relative">
          <IoGameController className="text-[#ffa723] text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold mr-2" />
          <h1 className="text-white text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold">
            Jogos
          </h1>
        </div>

        {/* Modo Clássico e outro card */}
        <div className="col-span-12 flex flex-col sm:flex-row justify-start items-center mt-4 relative space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Card Modo Clássico */}
          <div className="w-full sm:w-1/2 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mr-2 px-12 py-28 relative overflow-hidden">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-20">
              Modo Clássico
            </h1>
            <CustomButton
              ariaLabel="Jogue agora o modo de jogo Clássico"
              className="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)] relative z-20"
            >
              Jogar
            </CustomButton>

            {/* Container da imagem com glow azul */}
            <div className="absolute top-1/2 left-24 transform -translate-y-1/2 w-full h-full scale-100 z-10 pointer-events-none">
              {/* Glow Azul */}
              <div className="ml-24 mt-16 absolute inset-0 bg-blue-500 opacity-50 blur-3xl transform translate-x-4 md:translate-x-8 pointer-events-none"></div>

              {/* Imagem da Pantera */}
              <Image
                src="/assets/img/images/pantera.png"
                alt="Pantera com Dourado"
                layout="fill"
                objectFit="contain"
                className="rounded-lg relative z-10 pointer-events-none"
              />
            </div>
          </div>

          {/* Modo Rápido Card */}
          <div className="w-full sm:w-1/2 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mr-2 px-12 py-28 relative overflow-hidden">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-20">
              Modo Rápido
            </h1>
            <CustomButton
              ariaLabel="Jogue agora o modo de jogo Rápido"
              className="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)] relative z-20"
            >
              Jogar
            </CustomButton>
            <div className="absolute top-1/2 left-24 transform -translate-y-1/2 w-full h-full scale-100 z-10 pointer-events-none">
              {/* Glow Azul */}
              <div className="ml-24 mt-16 absolute inset-0 bg-blue-400 opacity-80 blur-3xl transform translate-x-4 md:translate-x-8 pointer-events-none"></div>

              {/* Imagem da Pantera */}
              <Image
                src="/assets/img/images/pantera2.png"
                alt="Descrição da imagem"
                layout="fill"
                objectFit="contain"
                className="rounded-lg relative z-10 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Três Cards */}
        <div className="col-span-12 flex justify-between items-center mt-4 relative space-x-4">
          <div className="w-full sm:w-1/3 h-64 rounded-lg px-12 py-28 text-white relative bg-gradient-to-b from-[#1D1C49] to-[#323179] overflow-hidden">
            {/* Imagem de fundo */}
            <Image
              src="/assets/img/images/cristais.webp"
              alt="Cristais"
              layout="fill"
              objectFit="cover"
              quality={50}
              className="absolute inset-0 w-full h-full z-10 ml-10 mt-7"
            />
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-20">
              Modo Instantâneo
            </h1>
            <CustomButton
              ariaLabel="Jogue agora o modo de jogo Instantâneo"
              className="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)] relative z-20"
            >
              Jogar
            </CustomButton>
          </div>

          <div className="w-full sm:w-1/3 h-64 rounded-lg px-12 py-28 text-white relative bg-gradient-to-b from-[#1D1C49] to-[#323179] overflow-hidden">
            <div className="ml-24 mt-28 absolute inset-0 bg-blue-700 opacity-90 blur-3xl transform translate-x-4 md:translate-x-8 pointer-events-none"></div>
            {/* Imagem de fundo */}
            <Image
              src="/assets/img/images/tesouro.png"
              alt="Modo Livre Imagem"
              layout="fill"
              objectFit="contain"
              quality={10}
              className="absolute inset-0 w-full h-full z-10 scale-105 ml-24 mt-16"
            />

            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-20">
              Modo Livre
            </h1>
            <CustomButton
              ariaLabel="Jogue agora o modo de jogo Instantâneo"
              className="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)] relative z-20"
            >
              Jogar
            </CustomButton>
          </div>
          <div className="w-full sm:w-1/3 h-64 rounded-lg px-12 py-28 text-white relative bg-gradient-to-b from-[#1D1C49] to-[#323179] overflow-hidden">
            {/* Sobreposição escura */}
            <div className="absolute inset-0 bg-black/10 z-10"></div>

            <button className="absolute z-10 font-semibold text-sm text-white py-2 px-8 rounded-full bg-[#5048A3] top-10 left-10">
              Em Breve
            </button>

            {/* Imagem de fundo */}
            <Image
              src="/assets/img/images/mines-blurred.webp"
              alt="Modo Livre Imagem"
              layout="fill"
              objectFit="contain"
              quality={10}
              className="absolute inset-0 w-full h-full z-20 ml-28 mt-3 filter brightness-75"
            />

            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-30 top-16 opacity-60">
              Modo Digitação
            </h1>
          </div>
        </div>

        {/* Quatro Cards */}
        {/* <div className="col-span-12 flex justify-between items-center mt-4 relative space-x-4">
          <div className="w-full sm:w-1/4 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white">
            teste 1
          </div>
          <div className="w-full sm:w-1/4 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white">
            teste 2
          </div>
          <div className="w-full sm:w-1/4 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white">
            teste 3
          </div>
          <div className="w-full sm:w-1/4 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white">
            teste 4
          </div>
        </div> */}

        {/* Título Jogos */}
        <div className="col-span-12 flex justify-start items-center mt-6 relative">
          <MdOutlineMiscellaneousServices className="text-[#ffa723] text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold mr-2" />
          <h1 className="text-white text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold">
            Serviços
          </h1>
        </div>

        {/* Loja do Vetttano e outro card */}
        <div className="col-span-12 flex flex-col sm:flex-row justify-start items-center mt-4 relative space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Card Loja do Vetttano */}
          <div className="w-full sm:w-1/2 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mr-2 px-12 py-28 relative overflow-hidden">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-20">
              Loja do Vettano
            </h1>
            <CustomButton
              ariaLabel="Jogue agora o modo de jogo Clássico"
              className="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)] relative z-20"
            >
              Explorar
            </CustomButton>

            {/* Container da imagem com glow azul */}
            <div className="absolute top-1/2 left-24 transform -translate-y-1/2 w-full h-full scale-100 z-10 pointer-events-none">
              {/* Glow Azul */}
              <div className="ml-24 mt-16 absolute inset-0 bg-purple-600 opacity-50 blur-3xl transform translate-x-4 md:translate-x-8 pointer-events-none"></div>

              {/* Imagem da Pantera */}
              <Image
                src="/assets/img/images/pantera-1.png"
                alt="Pantera com Dourado"
                layout="fill"
                objectFit="contain"
                className="rounded-lg relative z-10 pointer-events-none mt-2 ml-4"
              />
            </div>
          </div>

          {/* Assinatura Vip Card */}
          <div className="w-full sm:w-1/2 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mr-2 px-12 py-28 relative overflow-hidden">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-20">
              Assinatura Vip
            </h1>
            <CustomButton
              ariaLabel="Jogue agora o modo de jogo Rápido"
              className="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)] relative z-20"
            >
              Acessar
            </CustomButton>
            <div className="absolute top-1/2 left-24 transform -translate-y-1/2 w-full h-full scale-100 z-10 pointer-events-none">
              {/* Glow Azul */}
              <div className="ml-24 mt-16 absolute inset-0 bg-purple-600 opacity-80 blur-3xl transform translate-x-4 md:translate-x-8 pointer-events-none"></div>

              {/* Imagem da Pantera */}
              <Image
                src="/assets/img/images/pantera-2.png"
                alt="Descrição da imagem"
                layout="fill"
                objectFit="contain"
                className="rounded-lg relative z-10 pointer-events-none ml-2 mt-2"
              />
            </div>
          </div>
        </div>


        <div className="col-span-12 flex justify-between items-center mt-4 relative space-x-4">
          <div className="w-full sm:w-1/3 h-64 rounded-lg px-12 py-28 text-white relative bg-gradient-to-b from-[#1D1C49] to-[#323179] overflow-hidden">
            {/* Imagem de fundo */}
            <Image
              src="/assets/img/images/roleta.png"
              alt="Cristais"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="absolute inset-0 w-full h-full z-10 ml-28 mt-7"
            />
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-20">
            Salão das Chances
            </h1>
            <CustomButton
              ariaLabel="Jogue agora o modo de jogo Instantâneo"
              className="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)] relative z-20"
            >
              Jogar
            </CustomButton>
          </div>

          <div className="w-full sm:w-1/3 h-64 rounded-lg px-12 py-28 text-white relative bg-gradient-to-b from-[#1D1C49] to-[#323179] overflow-hidden">
            <div className="ml-24 mt-28 absolute inset-0 bg-blue-700 opacity-90 blur-3xl transform translate-x-4 md:translate-x-8 pointer-events-none"></div>
            {/* Imagem de fundo */}
            <Image
              src="/assets/img/images/tesouro.png"
              alt="Modo Livre Imagem"
              layout="fill"
              objectFit="contain"
              quality={10}
              className="absolute inset-0 w-full h-full z-10 scale-105 ml-24 mt-16"
            />

            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-20">
            Mercado de Pets
            </h1>
            <CustomButton
              ariaLabel="Jogue agora o modo de jogo Instantâneo"
              className="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)] relative z-20"
            >
              Jogar
            </CustomButton>
          </div>
          <div className="w-full sm:w-1/3 h-64 rounded-lg px-12 py-28 text-white relative bg-gradient-to-b from-[#1D1C49] to-[#323179] overflow-hidden">
            {/* Sobreposição escura */}
            <div className="absolute inset-0 bg-black/10 z-10"></div>

            <button className="absolute z-10 font-semibold text-sm text-white py-2 px-8 rounded-full bg-[#5048A3] top-10 left-10">
              Em Breve
            </button>

            {/* Imagem de fundo */}
            <Image
              src="/assets/img/images/mines-blurred.webp"
              alt="Modo Livre Imagem"
              layout="fill"
              objectFit="contain"
              quality={10}
              className="absolute inset-0 w-full h-full z-20 ml-28 mt-3 filter brightness-75"
            />

            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold relative z-30 top-16 opacity-60">
            Galeria de Lances
            </h1>
          </div>
        </div>

        {/* Título Rank */}
        <div className="col-span-12 flex justify-start items-center mt-6 relative">
          <MdLeaderboard className="text-[#ffa723] text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold mr-2" />
          <h1 className="text-white text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold">
            Rank
          </h1>
        </div>

        {/* Card Rank */}
        <div className="col-span-12 mt-4 relative">
          <div className="w-full h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white">
            rank do jogo
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
