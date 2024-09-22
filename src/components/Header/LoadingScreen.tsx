// components/LoadingScreen.tsx
import React from "react";
import Skeleton from "../Skeleton";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center p-1 md:p-3 h-20 md:h-22">
      {/* Primeiro Skeleton com ajuste de posição */}
      <Skeleton className="w-1/4 md:w-1/6 flex-none" height="30%" width="20%" />

      {/* Segundo Skeleton com ml-auto para empurrar à direita */}
      <Skeleton className="w-1/4 md:w-1/6 flex-none ml-auto mr-20" height="30%" width="25%" />

      {/* Terceiro Skeleton */}
      <Skeleton className="w-1/4 md:w-1/6 flex-none" height="30%" width="30%" />
    </div>
  );
};

export default LoadingScreen;
