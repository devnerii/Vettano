import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex justify-center mt-10">
          {/* Adiciona flex e alinha ao final para forçar a imagem para baixo */}
          <div className="w-11/12 max-h-[300px] overflow-hidden rounded-2xl flex items-end">
            <Image
              src="/assets/img/images/banner-home-purple-desktop.jpg"
              alt="Banner de Abertura da Competição"
              layout="responsive"
              width={1172}
              height={384}
              quality={100}
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
