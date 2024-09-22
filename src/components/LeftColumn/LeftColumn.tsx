import React, { useState, useEffect } from "react";
import SlideInAnimation from "../animations/SlideInAnimation";
import LastWinnerHeader from "./LastWinnerHeader";
import WinnerCard from "./WinnerCard";
import DailyRankHeader from "./DailyRankHeader";
import RankSection from "./RankSection";
import RelevantHeader from "./RelevantHeader";
import RelevantSection from "./RelevantSection";
import AdditionalSection from "./AdditionalSection";
import "../styles/scrollbar.css";  // Certifique-se de importar o CSS

const LeftColumn: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <SlideInAnimation
      duration={1}
      initialX={-100}
      className="fixed top-0 left-0 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 h-screen bg-gradient-to-b from-[#1d1c49] to-[#0f0e29] -z-10 flex flex-col items-start pl-4 overflow-y-scroll overflow-x-hidden custom-scrollbar mt-8 pb-8"  // Adicionando pb-8 para padding-bottom
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
