import React from "react";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import FirstPlace from "./FirstPlace";
import SecondPlace from "./SecondPlace";
import ThirdPlace from "./ThirdPlace";
// Removido: import ShareAndEarn from './ShareAndEarn';

interface MainProps {
  leftTargetDate: string;
  rightTargetDate: string;
}

const Main: React.FC<MainProps> = ({ leftTargetDate, rightTargetDate }) => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-12 flex justify-center mt-10 relative">
          <div
            className="w-11/12 max-h-[350px] overflow-hidden rounded-2xl flex items-end relative"
            style={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0)",
            }}
          >
            <Image
              src="/assets/img/images/banner-home-purple-desktop.jpg"
              alt="Banner de Abertura da Competição"
              layout="responsive"
              width={1172}
              height={384}
              quality={100}
              objectFit="cover"
              priority
              className="rounded-2xl"
              placeholder="blur"
              blurDataURL="/assets/img/placeholder.jpg"
            />
            <div className="absolute inset-0 grid grid-cols-12 rounded-2xl">
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start space-y-4 px-6 md:px-16 py-6">
                <h2 className="text-white text-3xl md:text-4xl font-bold max-w-md">
                  Lançamento do Vettano
                </h2>
                <h4 className="text-gray-200 text-sm md:text-base font-medium text-left mb-4 max-w-md">
                  Seja um dos três primeiros a indicar amigos para assinatura
                  VIP e receba recompensas exclusivas no lançamento em
                  05/12/2024! Aproveite benefícios únicos e celebre o início do
                  Vettano com itens especiais para você e seus convidados.
                </h4>
                <button
                  className="px-5 py-2 md:px-10 md:py-4 rounded-2xl text-white relative overflow-hidden transition-shadow duration-500 shadow-none border-2 border-[#5D52EE]"
                  style={{
                    background: "linear-gradient(to right, #8E83FB, #5D52EE)",
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(96, 108, 245, 0.8), 0 0 40px rgba(93, 82, 238, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transition = "box-shadow 0.5s ease";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Inscreva-se Agora
                </button>
                <CountdownTimer targetDate={leftTargetDate} />
              </div>

              <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center space-y-4 px-6 md:px-16 py-6 relative">
                <Image
                  src="/assets/img/images/podium.png"
                  alt="Imagem do Pódio"
                  layout="intrinsic"
                  width={766}
                  height={218}
                  className="absolute bottom-3 right-8"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "none",
                    maxHeight: "none",
                    transform: "scale(1.2)",
                  }}
                  priority
                  quality={100}
                />

                {/* Subcomponentes do pódio */}
                <FirstPlace top="30%" right="40%" />
                <SecondPlace top="35%" right="74%" />
                <ThirdPlace top="35%" right="7%" />

                <Image
                  src="/assets/img/images/share.svg"
                  alt="Compartilhar"
                  layout="intrinsic"
                  width={766}
                  height={218}
                  className="absolute"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "none",
                    maxHeight: "none",
                    transform: "scale(1.4)",
                    top: "8%",
                    right: "7%"
                  }}
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
