// src/components/Main/Games/Games.tsx
import React from "react";
import { IoGameController } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import TitleWithIcon from "./TitleWithIcon";
import Card from "./Card";
import Image from "next/image";
import RankSection from "./RankSection";

const Games: React.FC = () => {
  return (
    <main className="container mx-auto max-w-screen-2xl px-5 sm:px-[23px] md:px-[37px] lg:px-[60px] xl:px-[87px] 2xl:px-[94px] mb-10">
      {/* Jogos Section */}
      <section>
        <TitleWithIcon
          IconComponent={IoGameController}
          title="Jogos"
          headingLevel="h1"
        />

        {/* Cards de Jogos */}
        <div className="col-span-12 flex flex-col sm:flex-row justify-start items-center mt-4 relative space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Card Modo Clássico */}
          <Card
            title="Modo Clássico"
            titleSize="2xl"
            buttonLabel="Jogar"
            buttonAriaLabel="Jogue agora o modo de jogo Clássico"
            buttonClassName="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)]"
            imageSrc="/assets/img/images/pantera.png"
            imageAlt="Pantera com Dourado"
            glowStyles="ml-24 mt-16 absolute inset-0 bg-blue-500 opacity-50 blur-3xl transform translate-x-4 md:translate-x-8"
          />

          {/* Modo Rápido Card */}
          <Card
            title="Modo Rápido"
            titleSize="2xl"
            buttonLabel="Jogar"
            buttonAriaLabel="Jogue agora o modo de jogo Rápido"
            buttonClassName="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)]"
            imageSrc="/assets/img/images/pantera2.png"
            imageAlt="Pantera em Ação"
            glowStyles="ml-24 mt-16 absolute inset-0 bg-blue-400 opacity-80 blur-3xl transform translate-x-4 md:translate-x-8"
          />
        </div>

        {/* Outros Cards */}
        <div className="col-span-12 flex justify-between items-center mt-4 relative space-x-4">
          {/* Modo Instantâneo */}
          <Card
            title="Modo Instantâneo"
            buttonLabel="Jogar"
            buttonAriaLabel="Jogue agora o modo de jogo Instantâneo"
            buttonClassName="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)]"
            imageAlt="Cristais brilhantes"
            customContent={
              <Image
                src="/assets/img/images/cristais.webp"
                alt="Cristais brilhantes"
                layout="fill"
                objectFit="cover"
                quality={50}
                className="absolute inset-0 w-full h-full z-10 ml-10 mt-7"
                loading="lazy"
              />
            }
          />

          {/* Modo Livre */}
          <Card
            title="Modo Livre"
            buttonLabel="Jogar"
            buttonAriaLabel="Jogue agora o modo de jogo Livre"
            buttonClassName="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)]"
            imageAlt="Tesouro brilhante"
            customContent={
              <>
                <div
                  className="ml-24 mt-28 absolute inset-0 bg-blue-700 opacity-90 blur-3xl transform translate-x-4 md:translate-x-8 pointer-events-none"
                  aria-hidden="true"
                ></div>
                <Image
                  src="/assets/img/images/tesouro.png"
                  alt="Tesouro brilhante"
                  layout="fill"
                  objectFit="contain"
                  quality={10}
                  className="absolute inset-0 w-full h-full z-10 scale-105 ml-24 mt-16"
                  loading="lazy"
                />
              </>
            }
          />

          {/* Modo Digitação */}
          <Card
            title="Modo Digitação"
            isComingSoon={true}
            overlayButtonLabel="Em Breve"
            imageAlt="Modo Digitação em Breve"
            customContent={
              <Image
                src="/assets/img/images/mines-blurred.webp"
                alt="Modo Digitação em Breve"
                layout="fill"
                objectFit="contain"
                quality={10}
                className="absolute inset-0 w-full h-full z-20 ml-28 mt-3 filter brightness-75"
                loading="lazy"
              />
            }
          />
        </div>
      </section>

      {/* Serviços Section */}
      <section>
        <TitleWithIcon
          IconComponent={MdOutlineMiscellaneousServices}
          title="Serviços"
          headingLevel="h2"
        />

        {/* Cards de Serviços */}
        <div className="col-span-12 flex flex-col sm:flex-row justify-start items-center mt-4 relative space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Loja do Vettano */}
          <Card
            title="Loja do Vettano"
            titleSize="2xl"
            buttonLabel="Explorar"
            buttonAriaLabel="Explore a Loja do Vettano"
            buttonClassName="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)]"
            imageSrc="/assets/img/images/pantera-1.png"
            imageAlt="Pantera na Loja do Vettano"
            imageStyles="mt-2 ml-4"
            glowStyles="ml-24 mt-16 absolute inset-0 bg-purple-600 opacity-50 blur-3xl transform translate-x-4 md:translate-x-8"
          />

          {/* Assinatura Vip */}
          <Card
            title="Assinatura Vip"
            titleSize="2xl"
            buttonLabel="Acessar"
            buttonAriaLabel="Acesse a Assinatura Vip"
            buttonClassName="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)]"
            imageSrc="/assets/img/images/pantera-2.png"
            imageAlt="Pantera Assinatura Vip"
            imageStyles="ml-2 mt-2"
            glowStyles="ml-24 mt-16 absolute inset-0 bg-purple-600 opacity-80 blur-3xl transform translate-x-4 md:translate-x-8"
          />
        </div>

        {/* Outros Cards */}
        <div className="flex flex-col sm:flex-row mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Salão das Chances */}
          <Card
            title="Salão das Chances"
            buttonLabel="Jogar"
            buttonAriaLabel="Jogue agora no Salão das Chances"
            buttonClassName="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)]"
            imageAlt="Roleta da sorte"
            customContent={
              <>
                <div
                  className="ml-24 mt-28 absolute inset-0 bg-purple-700 opacity-90 blur-3xl transform translate-x-4 md:translate-x-8 pointer-events-none"
                  aria-hidden="true"
                ></div>
                <Image
                  src="/assets/img/images/roleta.png"
                  alt="Roleta da sorte"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="absolute inset-0 w-full h-full z-10 ml-32 mt-8 scale-75"
                  loading="lazy"
                />
              </>
            }
          />

          {/* Mercado de Pets */}
          <Card
            title="Mercado de Pets"
            buttonLabel="Jogar"
            buttonAriaLabel="Jogue agora no Mercado de Pets"
            buttonClassName="hover:shadow-[0_0_30px_rgba(96,108,245,0.8),0_0_40px_rgba(93,82,238,0.6)]"
            imageAlt="Mercado de Pets"
            customContent={
              <>
                <div
                  className="ml-24 mt-28 absolute inset-0 bg-purple-700 opacity-90 blur-3xl transform translate-x-4 md:translate-x-8 pointer-events-none"
                  aria-hidden="true"
                ></div>
                <Image
                  src="/assets/img/images/urso.png"
                  alt="Urso no Mercado de Pets"
                  layout="fill"
                  objectFit="contain"
                  quality={75}
                  className="absolute inset-0 w-full h-full z-10 scale-105 ml-32 mt-8"
                  loading="lazy"
                />
              </>
            }
          />
          <Card
            title="Galeria de Lances"
            isComingSoon={true}
            overlayButtonLabel="Em Breve"
            imageAlt="Galeria de Lances em Breve"
            customContent={
              <Image
                src="/assets/img/images/mines-blurred.webp"
                alt="Galeria de Lances em Breve"
                layout="fill"
                objectFit="contain"
                quality={10}
                className="absolute inset-0 w-full h-full z-20 ml-28 mt-3 filter brightness-75"
                loading="lazy"
              />
            }
          />
        </div>
      </section>

      {/* Rank Section */}
      <section>
        <RankSection
          title="Rank"
          lastWinner={{
            position: 1,
            name: "Jogador1",
            score: 1000,
            avatar: "https://avatar.iran.liara.run/public/avatar1.png", // URL completa da imagem
          }}
          players={[
            {
              position: 2,
              name: "Jogador2",
              score: 900,
              avatar: "https://avatar.iran.liara.run/public/avatar2.png",
            },
            {
              position: 3,
              name: "Jogador3",
              score: 800,
              avatar: "https://avatar.iran.liara.run/public/avatar3.png",
            },
            // ...mais jogadores
          ]}
        />
      </section>
    </main>
  );
};

export default Games;
