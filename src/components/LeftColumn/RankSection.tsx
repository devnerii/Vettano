import React from "react";
import WinnerCard from "./WinnerCard";

interface RankSectionProps {
  loading?: boolean;
}

const RankSection: React.FC<RankSectionProps> = ({ loading }) => {
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

export default RankSection;
