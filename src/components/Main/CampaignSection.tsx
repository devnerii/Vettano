import React from "react";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import FirstPlace from "./FirstPlace";
import SecondPlace from "./SecondPlace";
import ThirdPlace from "./ThirdPlace";

interface CampaignSectionProps {
  leftTargetDate: string;
  rightTargetDate: string;
  breakpoint: string;
}

const CampaignSection: React.FC<CampaignSectionProps> = ({
  leftTargetDate,
  rightTargetDate,
  breakpoint,
}) => {
  // Define positions for each breakpoint
  const positions = {
    base: {
      first: { top: "25%", right: "35%" },
      second: { top: "32%", right: "65%" },
      third: { top: "32%", right: "2%" },
    },
    sm: {
      first: { top: "16%", right: "40%" },
      second: { top: "22%", right: "72%" },
      third: { top: "24%", right: "5%" },
    },
    md: {
      first: { top: "22%", right: "42%" },
      second: { top: "25%", right: "78%" },
      third: { top: "30%", right: "3%" },
    },
    lg: {
      first: { top: "26%", right: "43%" },
      second: { top: "30%", right: "80%" },
      third: { top: "31%", right: "4%" },
    },
    xl: {
      first: { top: "30%", right: "42%" },
      second: { top: "36%", right: "75%" },
      third: { top: "36%", right: "6%" },
    },
    "2xl": {
      first: { top: "30%", right: "43%" },
      second: { top: "36%", right: "78%" },
      third: { top: "36%", right: "5%" },
    },
  };

  // Calculate current positions based on breakpoint
  const currentPositions =
    positions[breakpoint as keyof typeof positions] || positions.base;

  return (
    <section className="container mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-0 lg:px-4 xl:px-8 2xl:px-8 max-h-[700px] sm:max-h-[900px] overflow-hidden" aria-labelledby="campaign-heading">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 w-full h-full">
        <div className="col-span-12 flex justify-center mt-10 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10 relative">
          <div
            className="w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 2xl:w-11/12 h-full rounded-2xl flex items-end relative"
            style={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0)",
            }}
          >
            <Image
              src={
                breakpoint === "sm" || breakpoint === "base"
                  ? "/assets/img/images/banner-home-purple-mobile.jpg"
                  : "/assets/img/images/banner-home-purple-desktop.jpg"
              }
              alt="Banner de Abertura da Competição"
              layout="responsive"
              width={1172}
              height={800}
              quality={100}
              objectFit="cover"
              priority
              className={`rounded-2xl ${
                breakpoint === "sm" || breakpoint === "base" ? "h-[300px]" : ""
              }`}
            />

            <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12 rounded-2xl">
              {/* Left Section */}
              <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 flex flex-col justify-center items-start space-y-4 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-16 2xl:px-16 py-4 sm:py-0 md:py-4 lg:py-6 xl:py-6 2xl:py-6 mt-[-40px] sm:mt-[-90px] md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
                <h2 id="campaign-heading" className="text-white text-2xl sm:text-4xl md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold max-w-md">
                  Lançamento do Vettano
                </h2>
                <p className="text-gray-200 text-xs sm:text-xl md:text-xs lg:text-sm xl:text-base 2xl:text-base font-medium text-left mb-4 max-w-md">
                  Seja um dos três primeiros a indicar amigos para assinatura
                  VIP e receba recompensas exclusivas no lançamento em
                  05/12/2024! Aproveite benefícios únicos e celebre o início do
                  Vettano com itens especiais para você e seus convidados.
                </p>
                <div className="flex sm:flex-row items-center justify-center sm:justify-start space-x-4">
                  <button
                    className="px-4 sm:px-20 md:px-4 lg:px-6 xl:px-10 2xl:px-8 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-5 2xl:py-5 rounded-2xl text-white relative overflow-hidden transition-shadow duration-500 shadow-none border-2 border-[#5D52EE] 
    text-xs sm:text-sm md:text-xs lg:text-base xl:text-base 2xl:text-lg whitespace-nowrap"
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
                    aria-label="Inscreva-se agora para o lançamento do Vettano"
                  >
                    Inscreva-se Agora!
                  </button>

                  {(["md", "sm", "base"].includes(breakpoint)) && (
                    <CountdownTimer targetDate={leftTargetDate} />
                  )}
                </div>

                {(["lg", "xl", "2xl"].includes(breakpoint)) && (
                  <CountdownTimer targetDate={leftTargetDate} />
                )}
              </div>

              {/* Right Section */}
              <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6 flex flex-col justify-center items-center space-y-4 px-4 sm:px-6 md:px-16 lg:px-16 xl:px-16 2xl:px-16 py-14 sm:py-6 md:py-6 lg:py-6 xl:py-6 2xl:py-6 relative">
                <Image
                  src="/assets/img/images/podium.png"
                  alt="Imagem do Pódio"
                  layout="intrinsic"
                  width={766}
                  height={218}
                  className="absolute bottom-0 sm:bottom-4 md:bottom-3 lg:bottom-4 xl:bottom-6 2xl:bottom-6 right-0 sm:right-0 md:right-8 lg:right-12 xl:right-10 2xl:right-12 scale-110 sm:scale-125 md:scale-130 lg:scale-130 xl:scale-130 2xl:scale-130"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "none",
                    maxHeight: "none",
                  }}
                  priority
                  quality={100}
                />

                <FirstPlace
                  top={currentPositions.first.top}
                  right={currentPositions.first.right}
                />
                <SecondPlace
                  top={currentPositions.second.top}
                  right={currentPositions.second.right}
                />
                <ThirdPlace
                  top={currentPositions.third.top}
                  right={currentPositions.third.right}
                />

                <Image
                  src="/assets/img/images/share.svg"
                  alt="Ícone para Compartilhar"
                  layout="intrinsic"
                  width={766}
                  height={218}
                  className="absolute right-0 sm:right-0 md:right-8 lg:right-12 xl:right-10 2xl:right-14 top-2 sm:top-[-28px] md:top-3 lg:top-6 xl:top-10 2xl:top-12"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "none",
                    maxHeight: "none",
                    transform: "scale(1.4)",
                  }}
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;