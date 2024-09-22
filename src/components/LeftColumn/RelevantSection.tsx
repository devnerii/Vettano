import React from "react";
import { FaTrophy, FaShoppingCart, FaNewspaper, FaBook, FaPencilAlt, FaChartLine } from "react-icons/fa";
import RelevantCard from "./RelevantCard";

interface RelevantSectionProps {
  loading?: boolean;
}

const RelevantSection: React.FC<RelevantSectionProps> = ({ loading }) => {
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

export default RelevantSection;
