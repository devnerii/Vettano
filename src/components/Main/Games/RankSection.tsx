import React from 'react';
import TitleWithIcon from './TitleWithIcon';
import { MdLeaderboard } from 'react-icons/md';
import { FaCrown, FaEye, FaMedal, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Player {
  position: number;
  name: string;
  score: number;
  avatar: string;
}

interface RankSectionProps {
  title?: string;
  lastWinner: Player;
  players: Player[];
}

const RankSection: React.FC<RankSectionProps> = ({ title = 'Rank', lastWinner, players }) => {
  return (
    <section className="col-span-12 mt-4">
      {/* Título com Ícone */}
      <TitleWithIcon IconComponent={MdLeaderboard} title={title} headingLevel="h2" />

      {/* Contêiner Unificado para Último Vencedor e Tabela de Ranking */}
      <div className="mt-6 bg-[#16153f] p-6 rounded-xl shadow-lg shadow-[#8a2be2]/50 border-2 border-[#8a2be2]">
        {/* Último Vencedor */}
        <motion.div
          className="flex items-center bg-[#1D1C49] p-4 rounded-lg shadow-lg shadow-[#8a2be2]/60 hover:shadow-[#8a2be2]/80 transition-transform duration-300 cursor-pointer border-2 border-[#8a2be2]"
          whileHover={{ scale: 1.02 }}
        >
          <FaCrown className="text-[#e1b12c] text-3xl mr-4 animate-pulse" />
          <Image
            src={lastWinner.avatar}
            alt={`${lastWinner.name} avatar`}
            width={60}
            height={60}
            className="rounded-full mr-4 border-2 border-[#8a2be2] shadow-md shadow-[#8a2be2]/50"
          />
          <div className="flex-1">
            <div className="text-lg font-semibold text-white mb-1">
              {lastWinner.name}
            </div>
            <div className="text-sm text-gray-300">{lastWinner.score} pontos</div>
          </div>
          <FaEye className="text-[#8a2be2] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        </motion.div>

        {/* Tabela de Ranking */}
        <div className="mt-6 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-4 text-white">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaStar className="mr-2 text-[#8a2be2] animate-pulse" />
            Rank do Dia
          </h3>
          <div className="overflow-auto max-w-full">
            <table className="min-w-full text-left">
              <thead>
                <tr>
                  <th className="py-2">Posição</th>
                  <th className="py-2">Nome</th>
                  <th className="py-2">Pontuação</th>
                  <th className="py-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr
                    key={player.position}
                    className={`border-t border-gray-700 hover:bg-[#8a2be2]/20 transition-colors duration-300`}
                  >
                    <td className="py-2 flex items-center">
                      {player.position <= 3 && (
                        <FaMedal
                          className={`mr-2 text-[#8a2be2] animate-pulse`}
                        />
                      )}
                      {player.position}
                    </td>
                    <td className="py-2 flex items-center">
                      <Image
                        src={player.avatar}
                        alt={`${player.name} avatar`}
                        width={40}
                        height={40}
                        className="rounded-full mr-2"
                      />
                      {player.name}
                    </td>
                    <td className="py-2">{player.score}</td>
                    <td className="py-2 text-center">
                      <FaEye className="text-[#8a2be2] cursor-pointer hover:scale-110 transition-transform" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RankSection;
