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
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0)", // Removendo sombra
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
            <div className="absolute inset-0 grid grid-cols-12 rounded-2xl">
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

              {/* Seção Direita (Pré-estruturada e vazia) */}
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-center space-y-4 px-6 md:px-16 py-6 relative">
                {/* Conteúdo da direita removido, mantenha os estilos se necessário */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
