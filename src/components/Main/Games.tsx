// Games.tsx
import React from "react";
import { FaCrown } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";

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
          <div className="w-1/2 h-64 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white mr-2">
            <h1>Modo Clássico</h1>
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
