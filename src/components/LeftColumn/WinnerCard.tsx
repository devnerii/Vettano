import React from "react";
import Image from "next/image";
import Skeleton from "../Skeleton";
import SlideInAnimation from "../animations/SlideInAnimation";

const AVATAR_SIZE = 40;
const TROPHY_SIZE = 25;
const PRIMARY_CARD_COLOR = "#1d1c49";
const TEXT_COLOR_PRIMARY = "rgb(135,132,183)";
const FONT_FAMILY = "font-montserrat";

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

export default WinnerCard;
