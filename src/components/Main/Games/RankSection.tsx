// src/components/Main/Games/RankSection.tsx
import React, { useState } from 'react';
import TitleWithIcon from './TitleWithIcon';
import { MdLeaderboard } from 'react-icons/md';
import { FaCrown, FaEye, FaStar, FaTrophy, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SegmentedControl from './SegmentedControl'

interface Achievement {
  type: string; // e.g., 'medal', 'trophy', 'star'
  icon: React.ReactNode; // the icon component
}

interface Player {
  position: number;
  name: string;
  score: number;
  avatar: string;
  achievements?: Achievement[];
  level?: string; // e.g., 'Gold', 'Silver', 'Bronze'
}

interface RankSectionProps {
  title?: string;
  lastWinner: Player;
  players: Player[];
}

const RankSection: React.FC<RankSectionProps> = ({ title = 'Rank', lastWinner, players }) => {
  // Estado para o filtro selecionado
  const [selectedFilter, setSelectedFilter] = useState<'Diário' | 'Mensal' | 'Outras Opções'>('Diário');

  // Extrair os três melhores jogadores para o pódio
  const topThreePlayers = players.slice(0, 3);
  const otherPlayers = players.slice(3);

  // Função para obter posições específicas para cada lugar no pódio
  const getPlayerPositionStyle = (place: number) => {
    switch (place) {
      case 1:
        return { left: '50%', bottom: '60%', transform: 'translateX(-50%)' };
      case 2:
        return { left: '30%', bottom: '40%', transform: 'translateX(-50%)' };
      case 3:
        return { left: '70%', bottom: '40%', transform: 'translateX(-50%)' };
      default:
        return {};
    }
  };

  // Função para lidar com a mudança de filtro
  const handleFilterChange = (filter: 'Diário' | 'Mensal' | 'Outras Opções') => {
    setSelectedFilter(filter);
    // Adicione aqui a lógica para filtrar os jogadores com base no filtro selecionado
  };

  return (
    <section className="col-span-12 mt-8">
      {/* Título com Ícone */}
      <TitleWithIcon IconComponent={MdLeaderboard} title={title} headingLevel="h2" />

      {/* Conteúdo Principal */}
      <div className="bg-[#16153f] p-8 mt-8 shadow-lg shadow-[#8a2be2]/50 border-2 border-[#8a2be2] rounded-lg">
        {/* Segmented Control de Filtro */}
        <SegmentedControl/>

        {/* Pódio com Novo SVG */}
        <div className="relative w-full flex justify-center mb-6 mt-48" style={{ height: '400px' }}>
          {/* SVG do Pódio */}
          <svg
            width="496"
            height="353"
            viewBox="0 0 496 353"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-4xl"
          >
            <rect x="296.07" y="103.987" width="199.93" height="179.172" fill="#8A2BE2"/>
            <path d="M296.07 86.5066H466.919L496 103.987H296.07L296.07 86.5066Z" fill="#9437F2"/>
            <path d="M420.355 117.462L383.756 129.939V155.144C383.756 179.675 396.611 186.587 418.213 198.389L420.445 199.401L422.676 198.389C444.19 186.587 456.955 179.675 456.955 155.144V129.939L420.355 117.462Z" fill="#3F059D"/>
            <path d="M420.199 179.721C431.605 179.721 438.357 174.149 438.357 165.365C438.357 159.4 434.686 155.533 429.245 154.353C433.9 152.714 436.98 149.437 436.98 144.193C436.98 136.851 430.95 131.476 420.658 131.476C409.974 131.476 403.877 137.769 403.353 146.356H412.727C413.251 141.964 416.004 139.276 420.462 139.276C424.788 139.276 426.951 141.767 426.951 145.11C426.951 149.109 424.722 151.338 419.806 151.338H416.398V158.417H420.068C425.116 158.417 427.607 160.711 427.607 165.169C427.607 169.364 425.116 171.921 419.806 171.921C414.169 171.921 411.743 168.643 411.35 164.12H401.78C402.173 173.625 408.269 179.721 420.199 179.721Z" fill="white"/>
            <rect y="72.8882" width="175.894" height="218.754" fill="#8A2BE2"/>
            <path d="M23.9856 51.5461H175.894V72.888H0L23.9856 51.5461Z" fill="#9437F2"/>
            <path d="M80.348 81.8542L29 99.6913V135.727C29 170.798 47.0344 180.681 77.3423 197.554L80.4733 199L83.6042 197.554C113.787 180.681 131.696 170.798 131.696 135.727V99.6913L80.348 81.8542Z" fill="#3F059D"/>
            <path d="M54.7353 165H101.932V154.25H77.6344L89.4335 142.713C96.6878 135.721 101.495 128.903 101.495 120.6C101.495 109.326 93.6287 101.634 79.8194 101.634C65.8352 101.634 57.0952 109.5 56.396 123.922H69.2439C70.2053 115.706 73.7013 112.472 79.2076 112.472C84.6264 112.472 87.5107 115.793 87.5107 120.95C87.5107 126.631 83.665 132.137 77.6344 138.518L54.7353 162.728V165Z" fill="white"/>
            <rect x="153" y="20.363" width="192" height="300.841" fill="url(#paint0_linear_2302_2878)"/>
            <path d="M180.927 0.796143H317.073L345 20.363H153L180.927 0.796143Z" fill="#9437F2"/>
            <path d="M249.611 46.0447L192.134 66.8999V109.033C192.134 150.039 212.321 161.594 246.247 181.322L249.752 183.013L253.256 181.322C287.042 161.594 307.089 150.039 307.089 109.033V66.8999L249.611 46.0447Z" fill="#3F059D"/>
            <path d="M240.521 155.146H260.333V67.707H242.967L222.789 82.0153V98.8917L240.521 87.2739V155.146Z" fill="white"/>
            <defs>
              <linearGradient id="paint0_linear_2302_2878" x1="249" y1="20.363" x2="249" y2="231.93" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8A2BE2"/>
                <stop offset="1" stopColor="#5B42C8"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Posicionamento Absoluto dos Jogadores */}
          {topThreePlayers.map((player, index) => {
            const place = player.position; // Assumindo que position é 1, 2 ou 3
            const style = getPlayerPositionStyle(place);

            // Tamanhos e cores podem ser ajustados conforme necessário
            let avatarSize = 80;
            let borderColor = 'border-gray-400';
            let bgColor = 'bg-gray-400';
            if (place === 1) {
              avatarSize = 100;
              borderColor = 'border-yellow-400';
              bgColor = 'bg-yellow-400';
            } else if (place === 2) {
              avatarSize = 80;
              borderColor = 'border-gray-400';
              bgColor = 'bg-gray-400';
            } else if (place === 3) {
              avatarSize = 70;
              borderColor = 'border-orange-600';
              bgColor = 'bg-orange-600';
            }

            // Calcular a porcentagem de progresso
            const maxScore = topThreePlayers[0]?.score || 1; // Evitar divisão por zero
            const progressPercent = (player.score / maxScore) * 100;

            return (
              <motion.div
                key={player.position}
                className="absolute flex flex-col items-center"
                style={style}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-[#1D1C49] p-4 rounded-full shadow-lg shadow-[#8a2be2]/60 border-2 border-[#8a2be2]">
                  <Image
                    src={player.avatar}
                    alt={`${player.name} avatar`}
                    width={avatarSize}
                    height={avatarSize}
                    className={`rounded-full border-4 ${borderColor} shadow-md`}
                  />
                </div>
                <div className="mt-2 text-white font-semibold text-center">{player.name}</div>
                <div className="text-gray-300 text-sm text-center">{player.score} pontos</div>
                {/* Barra de Progresso */}
                <div className="w-24 bg-gray-700 rounded-full h-2 mt-2">
                  <motion.div
                    className="bg-[#8a2be2] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Temporizador de Contagem Regressiva */}
        <div className="mt-6 flex items-center justify-center text-white">
          <FaClock className="mr-2 text-[#8a2be2] animate-pulse" />
          <span className="text-lg font-semibold">Tempo restante para participar:</span>
          <span className="ml-2 font-bold text-2xl">00:15:30</span>
        </div>

        {/* Tabela de Ranking */}
        <div className="mt-8 bg-gradient-to-b from-[#1D1C49] to-[#323179] rounded-lg p-6 text-white">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <FaStar className="mr-2 text-[#8a2be2] animate-pulse" />
            Rank do Dia
          </h3>
          <div className="overflow-auto max-w-full">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3">Posição</th>
                  <th className="py-3">Nome</th>
                  <th className="py-3">Pontuação</th>
                  <th className="py-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {otherPlayers.map((player) => (
                  <tr
                    key={player.position}
                    className="border-t border-gray-700 hover:bg-[#8a2be2]/20 transition-colors duration-300"
                  >
                    <td className="py-3">{player.position}</td>
                    <td className="py-3 flex items-center">
                      <Image
                        src={player.avatar}
                        alt={`${player.name} avatar`}
                        width={40}
                        height={40}
                        className="rounded-full mr-2"
                      />
                      {player.name}
                    </td>
                    <td className="py-3">{player.score}</td>
                    <td className="py-3 text-center">
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
