import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Logo: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-start w-[150px] h-[60px]" // Mantém o tamanho fixo do contêiner
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Image
        src="/assets/img/logos/logo-mobile.png" // Caminho para o logo SVG otimizado
        alt="Vettano Logo"
        width={90} // Defina as dimensões desejadas
        height={90}  // Compatível com o tamanho do contêiner
        priority={true} // Otimização do Next.js para carregamento rápido
        quality={100}
      />
    </motion.div>
  );
};

export default Logo;