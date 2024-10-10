// Games.tsx
import React from "react";
import { FaCrown } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import Image from "next/image";

const Games: React.FC = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl px-5 sm:px-[23px] md:px-[37px] lg:px-[60px] xl:px-[87px] 2xl:px-[94px]     mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 w-full h-full">
        <div className="col-span-12 flex justify-start items-center mt-6 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 relative">
          <FaCrown className="text-[#ffa723] items-start text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold mr-2" />
          <h1 className="text-white items-start text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold">
            Jogos
          </h1>
        </div>

        <div className="col-span-12 flex justify-start items-center mt-4 relative">
          <div className="w-1/2 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mr-2 px-12 py-28 relative overflow-hidden">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold">
              Modo Clássico
            </h1>
            <button
              className="px-4 sm:px-20 md:px-4 lg:px-6 xl:px-12 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 2xl:py-5 rounded-2xl text-white relative overflow-hidden transition-shadow duration-500 shadow-none border-2 border-[#5D52EE] 
    text-xs sm:text-sm md:text-xs lg:text-base xl:text-base 2xl:text-lg whitespace-nowrap mt-3"
              style={{
                background: "linear-gradient(to right, #8E83FB, #5D52EE)",
                fontFamily: "Montserrat",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(96, 108, 245, 0.8), 0 0 40px rgba(93, 82, 238, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transition = "box-shadow 0.5s ease";
                e.currentTarget.style.boxShadow = "none";
              }}
              aria-label="Jogue agora o modo de jogo Clássico"
            >
              Jogar
            </button>

            <div className="absolute top-1/2 left-28 transform -translate-y-1/2 w-full h-full scale-125 overflow-hidden">
              <Image
                src="/assets/img/images/pantera_com_dourado.png"
                alt="Pantera com Dourado"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="w-1/2 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white ml-2">
            teste
          </div>
        </div>

        <div className="col-span-12 flex justify-between items-center mt-4 relative">
          <div className="w-1/3 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mr-2">
            teste 1
          </div>
          <div className="w-1/3 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mx-2">
            teste 2
          </div>
          <div className="w-1/3 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white ml-2">
            teste 3
          </div>
        </div>

        <div className="col-span-12 flex justify-between items-center mt-4 relative">
          <div className="w-1/4 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mr-2">
            teste 1
          </div>
          <div className="w-1/4 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mx-2">
            teste 2
          </div>
          <div className="w-1/4 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mx-2">
            teste 3
          </div>
          <div className="w-1/4 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white ml-2">
            teste 4
          </div>
        </div>

        <div className="col-span-12 flex justify-start items-center mt-6 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6 2xl:mt-6 relative">
          <MdLeaderboard className="text-[#ffa723] items-start text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold mr-2" />
          <h1 className="text-white items-start text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-xl font-bold">
            Rank
          </h1>
        </div>

        <div className="col-span-12 mt-4 relative">
          <div className="w-full h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white">
            teste
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
