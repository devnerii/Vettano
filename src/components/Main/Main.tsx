// src/components/Main/Main.tsx

import React from 'react';
import Image from 'next/image';

const Main = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex justify-center mt-10">
          <div className="w-11/12"> {/* Ajuste a largura do contêiner */}
            <Image
              src="https://app.blaze.ninja/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopening-competition-banner.b3be630c.png&w=1200&q=100"
              alt="Banner de Abertura da Competição"
              layout="responsive"
              width={1000}  // Diminuí a largura
              height={420}  // Diminuí a altura
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
