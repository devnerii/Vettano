import React, { useState, useEffect } from "react";
import Image from "next/image";
import Skeleton from "./Skeleton";
import SlideInAnimation from "./animations/SlideInAnimation";
import {
  FaTrophy,
  FaShoppingCart,
  FaNewspaper,
  FaBook,
  FaPencilAlt,
  FaChartLine,
  FaTelegram,
  FaDiscord,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const AVATAR_SIZE = 40;
const TROPHY_SIZE = 25;
const ICON_SIZE = 20;
const PRIMARY_CARD_COLOR = "#1d1c49";
const TEXT_COLOR_PRIMARY = "rgb(135,132,183)";
const FONT_FAMILY = "font-montserrat";
const ICON_COLOR_SILVER = "#C0C0C0";
const HOVER_COLOR = "#28276c";
const FOCUS_COLOR = "#3c3b83";

interface WinnerCardProps {
  name: string;
  points: number;
  avatarSrc: string;
  trophySrc: string;
  loading?: boolean;
}

const WinnerCard: React.FC<WinnerCardProps> = React.memo(
  ({ name, points, avatarSrc, trophySrc, loading }) => {
    if (loading) {
      return (
        <div className="relative mt-1 w-full flex justify-center">
          <div
            className="relative left-[-8px] w-full max-w-lg rounded-lg p-3 flex items-center space-x-3 shadow-lg"
            style={{ backgroundColor: PRIMARY_CARD_COLOR }}
          >
            <Skeleton width={`${AVATAR_SIZE}px`} height={`${AVATAR_SIZE}px`} rounded />
            <div className="flex-1 space-y-3 py-1">
              <Skeleton width="75%" height="1rem" />
              <Skeleton width="50%" height="0.75rem" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <SlideInAnimation
        duration={0.5}
        initialX={-100}
        className="relative mt-1 w-full flex justify-center"
      >
        <div
          className="relative left-[-8px] w-full max-w-lg rounded-lg p-3 flex items-center space-x-3 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#28276c] focus:bg-[#3c3b83] focus:shadow-outline"
          style={{ backgroundColor: PRIMARY_CARD_COLOR }}
        >
          <div className="flex-shrink-0 rounded-full bg-gradient-to-t from-[rgb(46,45,116)] to-[rgb(23,23,61)] p-1">
            <div className="rounded-full overflow-hidden w-[2.5rem] h-[2.5rem]">
              <Image
                src={avatarSrc}
                alt={`${name}'s avatar`}
                width={AVATAR_SIZE}
                height={AVATAR_SIZE}
              />
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center min-w-0">
              <h2
                className={`font-bold ${FONT_FAMILY} whitespace-nowrap`}
                style={{ color: TEXT_COLOR_PRIMARY, fontSize: "1rem" }}
              >
                {name}
              </h2>
              <Image
                src={trophySrc}
                alt={`${name}'s trophy`}
                width={TROPHY_SIZE}
                height={TROPHY_SIZE}
                className="ml-1 rounded-full"
              />
            </div>
            <p className="text-white text-xs md:text-sm font-montserrat">
              {points} pontos
            </p>
          </div>
        </div>
      </SlideInAnimation>
    );
  }
);

WinnerCard.displayName = "WinnerCard";

const LastWinnerHeader: React.FC<{ loading?: boolean }> = ({ loading }) => {
  if (loading) {
    return (
      <div className="flex flex-row items-center ml-4 mt-10 md:mt-20 w-full max-w-lg">
        <Skeleton width="20px" height="20px" rounded />
        <Skeleton className="ml-2" width="100px" height="0.75rem" />
      </div>
    );
  }

  return (
    <SlideInAnimation
      duration={0.5}
      initialX={-100}
      className="flex flex-row items-center ml-4 mt-10 md:mt-20 w-full max-w-lg"
    >
      <div className="rounded-full overflow-hidden w-[1.25rem] h-[1.25rem]">
        <Image
          src="/assets/img/logos/ranking.png"
          alt="Último Vencedor Logo"
          width={20}
          height={20}
        />
      </div>
      <h1 className="text-white font-bold ml-2 font-montserrat text-[0.75rem]">
        Último Vencedor
      </h1>
    </SlideInAnimation>
  );
};

LastWinnerHeader.displayName = "LastWinnerHeader";

const DailyRankHeader: React.FC<{ loading?: boolean }> = ({ loading }) => {
  if (loading) {
    return (
      <div className="flex flex-row items-center justify-between ml-4 mt-4 md:mt-4 w-full max-w-lg">
        <Skeleton width="20px" height="20px" rounded />
        <Skeleton className="ml-2" width="100px" height="0.75rem" />
      </div>
    );
  }

  return (
    <SlideInAnimation
      duration={0.5}
      initialX={-100}
      className="flex flex-row items-center justify-between ml-4 mt-4 md:mt-4 w-full max-w-lg"
    >
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden w-[1.25rem] h-[1.25rem]">
          <Image
            src="/assets/img/logos/rating.png"
            alt="Rank do Dia Logo"
            width={20}
            height={20}
          />
        </div>
        <h1 className="text-white font-bold ml-2 font-montserrat text-[0.75rem]">
          Rank do Dia
        </h1>
      </div>
    </SlideInAnimation>
  );
};

DailyRankHeader.displayName = "DailyRankHeader";

const RelevantHeader: React.FC<{ loading?: boolean }> = ({ loading }) => {
  if (loading) {
    return (
      <div className="flex flex-row items-center justify-between ml-4 mt-4 md:mt-4 w-full max-w-lg">
        <Skeleton width="20px" height="20px" rounded />
        <Skeleton className="ml-2" width="100px" height="0.75rem" />
      </div>
    );
  }

  return (
    <SlideInAnimation
      duration={0.5}
      initialX={-100}
      className="flex flex-row items-center justify-between ml-4 mt-4 md:mt-4 w-full max-w-lg"
    >
      <div className="flex items-center">
        <Image
          src="/assets/img/logos/estrela.png"
          alt="Relevantes Logo"
          width={20}
          height={20}
          className="w-[1.25rem] h-[1.25rem]"
        />
        <h1 className="text-white font-bold ml-2 font-montserrat text-[0.75rem]">
          Relevantes
        </h1>
      </div>
    </SlideInAnimation>
  );
};

RelevantHeader.displayName = "RelevantHeader";

interface RelevantCardProps {
  title: string;
  IconComponent: React.ComponentType<{ size?: string; color?: string }>;
  loading?: boolean;
}

const RelevantCard: React.FC<RelevantCardProps> = ({
  title,
  IconComponent,
  loading,
}) => {
  if (loading) {
    return (
      <div className="relative mt-1 w-full flex justify-center">
        <div
          className="relative left-[-8px] w-full max-w-lg rounded-lg p-2 flex items-center space-x-3 shadow-lg"
          style={{ backgroundColor: PRIMARY_CARD_COLOR }}
        >
          <Skeleton width={`${ICON_SIZE}px`} height={`${ICON_SIZE}px`} rounded />
          <Skeleton width="75%" height="1rem" />
        </div>
      </div>
    );
  }

  return (
    <SlideInAnimation
      duration={0.5}
      initialX={-100}
      className="relative mt-1 w-full flex justify-center"
    >
      <div
        className="relative left-[-8px] w-full max-w-lg rounded-lg p-2 flex items-center space-x-3 shadow-lg transform transition-transform duration-300 hover:scale-105"
        style={{ backgroundColor: PRIMARY_CARD_COLOR }}
      >
        <div className="flex-shrink-0 rounded-full bg-gradient-to-t from-[rgb(46,45,116)] to-[rgb(23,23,61)] p-1 ml-[4px]">
          <div className="rounded-full overflow-hidden w-[1.25rem] h-[1.25rem]">
            <IconComponent size="1.25rem" color={ICON_COLOR_SILVER} />
          </div>
        </div>
        <h2
          className={`font-bold ${FONT_FAMILY} whitespace-nowrap`}
          style={{ color: TEXT_COLOR_PRIMARY, fontSize: "0.875rem" }}
        >
          {title}
        </h2>
      </div>
    </SlideInAnimation>
  );
};

const RelevantSection: React.FC<{ loading?: boolean }> = ({ loading }) => {
  const relevantItems = [
    { title: "Rank", IconComponent: FaChartLine },
    { title: "Novidades", IconComponent: FaNewspaper },
    { title: "Loja", IconComponent: FaShoppingCart },
    { title: "Regras", IconComponent: FaBook },
    { title: "Vettano", IconComponent: FaTrophy },
    { title: "Desenhos", IconComponent: FaPencilAlt },
  ];

  return (
    <section className="flex flex-col mt-2 items-center space-y-2 w-full">
      {relevantItems.map((item, index) => (
        <RelevantCard
          key={index}
          title={item.title}
          IconComponent={item.IconComponent}
          loading={loading}
        />
      ))}
    </section>
  );
};

const AdditionalSection: React.FC<{ loading?: boolean }> = ({ loading }) => {
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
        style={{ color: TEXT_COLOR_PRIMARY }}
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
        <div className="flex space-x-8 mb-4 mt-2 justify-start pl-0"> {/* Adicionado pl-4 para mover à esquerda */}
          <FaTelegram
            size={24}  // Aumenta o tamanho dos ícones
            color={TEXT_COLOR_PRIMARY}
            className="transform transition-transform duration-300 hover:scale-110"
          />
          <FaDiscord
            size={24}
            color={TEXT_COLOR_PRIMARY}
            className="transform transition-transform duration-300 hover:scale-110"
          />
          <FaTwitter
            size={24}
            color={TEXT_COLOR_PRIMARY}
            className="transform transition-transform duration-300 hover:scale-110"
          />
          <FaTiktok
            size={24}
            color={TEXT_COLOR_PRIMARY}
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </SlideInAnimation>
  );
};




const RankSection: React.FC<{ loading?: boolean }> = ({ loading }) => {
  return (
    <section className="flex flex-col mt-2 items-center space-y-2 w-full">
      {Array.from({ length: 3 }, (_, i) => (
        <WinnerCard
          key={i}
          name={`jogador${i + 1}`}
          points={1500 - i * 100}
          avatarSrc={`/assets/img/logos/avatar${i + 1}.png`}
          trophySrc={`/assets/img/logos/rank${i + 1}.png`}
          loading={loading}
        />
      ))}
    </section>
  );
};

const LeftColumn: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <SlideInAnimation
      duration={1}
      initialX={-100}
      className="fixed top-0 left-0 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 h-screen bg-gradient-to-b from-[#1d1c49] to-[#0f0e29] -z-10 flex flex-col items-start pl-4 overflow-y-scroll overflow-x-hidden custom-scrollbar"
    >
      <LastWinnerHeader loading={loading} />
      <div className="flex flex-col items-center w-full mt-2">
        <WinnerCard
          name="painonmind"
          points={1500}
          avatarSrc="/assets/img/logos/avatar.png"
          trophySrc="/assets/img/logos/campeao.png"
          loading={loading}
        />
      </div>
      <DailyRankHeader loading={loading} />
      <RankSection loading={loading} />
      <RelevantHeader loading={loading} />
      <RelevantSection loading={loading} />
      <AdditionalSection loading={loading} />
    </SlideInAnimation>
  );
};

export default LeftColumn;
