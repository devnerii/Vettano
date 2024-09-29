import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center w-[150px] h-[60px]" // Mantém o tamanho fixo do contêiner
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Image
        src="/assets/img/logos/VETTANO.svg" // Caminho para o logo SVG otimizado
        alt="VETTANO Logo"
        width={150} // Defina as dimensões desejadas
        height={60}  // Compatível com o tamanho do contêiner
        priority={true} // Otimização do Next.js para carregamento rápido
      />
    </motion.div>
  );
};

export default Logo;
