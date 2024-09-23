// components/Main.tsx
import React from "react";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

interface MainProps {
  leftTargetDate: string; // Define o tipo da data alvo para o lado esquerdo
  rightTargetDate: string; // Define o tipo da data alvo para o lado direito
}

const Main: React.FC<MainProps> = ({ leftTargetDate, rightTargetDate }) => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="grid grid-cols-12 w-full">
        <div className="col-span-12 flex justify-center mt-10 relative">
          <div
            className="w-11/12 max-h-[350px] overflow-hidden rounded-2xl flex items-end relative"
            style={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)", // Sombra mais realista e intensa
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
              placeholder="blur" // Adiciona um blur de carregamento
              blurDataURL="/assets/img/placeholder.jpg" // Placeholder de carregamento
            />
            <div className="absolute inset-0 grid grid-cols-12 backdrop-blur-sm bg-black/40 rounded-2xl">
              {/* Seção Esquerda */}
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start space-y-4 px-6 md:px-16 py-6">
                <h2 className="text-white text-2xl md:text-3xl font-bold max-w-md">
                  Lançamento do Jogo Vettano
                </h2>
                <h4 className="text-gray-200 text-sm md:text-base font-medium text-left mb-4 max-w-md">
                  Venha participar do lançamento em {leftTargetDate}! O vencedor
                  do primeiro ranking será premiado com uma conquista exclusiva!
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

              {/* Seção Direita */}
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center space-y-4 px-6 md:px-16 py-6 relative bg-black/50 backdrop-blur-md">
                <h2 className="text-yellow-500 font-extrabold text-2xl md:text-3xl max-w-2xl z-50 drop-shadow-lg">
                  Plano VIP: Acesso Exclusivo!
                </h2>
                <h4 className="text-white text-sm md:text-base font-medium text-center mb-4 max-w-md z-50 drop-shadow-lg">
                  Incentive os amigos a participar e ganhe recompensas exclusivas no jogo ou
                  descontos no Plano VIP! Os primeiros assinantes do plano VIP terão recompensas exclusivas!
                </h4>
                <button
                  className="px-5 py-2 md:px-10 md:py-4 rounded-2xl text-white relative overflow-hidden transition-shadow duration-500 shadow-none border-2 border-[#FF8C00] z-50 drop-shadow-lg"
                  style={{
                    background: "linear-gradient(to right, #FFBB33, #FF8C00)",
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(255, 140, 0, 0.8), 0 0 40px rgba(255, 123, 0, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transition = "box-shadow 0.5s ease";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Compartilhe e Ganhe
                </button>
                <Image
                  src="/assets/img/images/ultra.svg"
                  alt="Camaleão representando exclusividade"
                  layout="fill"
                  objectFit="contain"
                  className="absolute right-0 opacity-20"
                  style={{
                    transform: "scale(1.5)",
                    top: "80px",
                    zIndex: 0,
                  }}
                  quality={100}
                  placeholder="blur" // Placeholder de carregamento para a imagem
                  blurDataURL="/assets/img/placeholder.svg" // Adiciona uma imagem de carregamento temporária
                />
                <CountdownTimer targetDate={rightTargetDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
