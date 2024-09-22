import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex justify-center mt-10">
          <div className="w-11/12 max-h-[300px] overflow-hidden rounded-2xl"> {/* Limita a altura do contêiner */}
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/img/images/banner-home-purple-desktop.jpg"
              />
              <source
                media="(min-width: 640px)"
                srcSet="/assets/img/images/banner-home-purple-tablet.jpg"
              />
              <Image
                src="/assets/img/images/banner-home-purple-mobile.jpg"
                alt="Banner de Abertura da Competição"
                layout="responsive" // Mantém responsivo
                width={1000}  // Define a largura para responsividade
                height={250}  // Altura ajustada menor
                className="object-cover"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
