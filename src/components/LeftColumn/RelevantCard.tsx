import React from "react";

// Defina as propriedades aceitas pelo componente RelevantCard
interface RelevantCardProps {
  title: string;
  IconComponent: React.ComponentType<{ size?: string; color?: string }>;
  loading?: boolean;
}

const ICON_SIZE = 20;  // Tamanho padrão dos ícones
const PRIMARY_CARD_COLOR = "#1d1c49";  // Cor de fundo padrão do cartão
const TEXT_COLOR_PRIMARY = "rgb(135,132,183)";  // Cor do texto
const FONT_FAMILY = "font-montserrat";  // Família de fontes utilizada

// Componente funcional React para o cartão relevante
const RelevantCard: React.FC<RelevantCardProps> = ({ title, IconComponent, loading }) => {
  if (loading) {
    // Exibe um esqueleto de carregamento quando estiver carregando
    return (
      <div className="relative mt-1 w-full flex justify-center">
        <div
          className="relative left-[-8px] w-full max-w-lg rounded-lg p-2 flex items-center space-x-3 shadow-lg"
          style={{ backgroundColor: PRIMARY_CARD_COLOR }}
        >
          <div style={{ width: ICON_SIZE, height: ICON_SIZE, borderRadius: '50%', backgroundColor: 'gray' }}></div>
          <div style={{ width: '75%', height: '1rem', backgroundColor: 'gray', borderRadius: '4px' }}></div>
        </div>
      </div>
    );
  }

  // Renderiza o cartão quando não está carregando
  return (
    <div
      className="relative mt-1 w-full flex justify-center"
    >
      <div
        className="relative left-[-8px] w-full max-w-lg rounded-lg p-2 flex items-center space-x-3 shadow-lg transform transition-transform duration-300 hover:scale-105"
        style={{ backgroundColor: PRIMARY_CARD_COLOR }}
      >
        <div className="flex-shrink-0 rounded-full bg-gradient-to-t from-[rgb(46,45,116)] to-[rgb(23,23,61)] p-1 ml-[4px]">
          <div className="rounded-full overflow-hidden w-[1.25rem] h-[1.25rem]">
            <IconComponent size="1.25rem" color={TEXT_COLOR_PRIMARY} />
          </div>
        </div>
        <h2
          className={`font-bold ${FONT_FAMILY} whitespace-nowrap`}
          style={{ color: TEXT_COLOR_PRIMARY, fontSize: "0.875rem" }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default RelevantCard;
