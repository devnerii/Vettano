import React from "react";
import Image from "next/image";
import Skeleton from "../Skeleton";
import SlideInAnimation from "../animations/SlideInAnimation";

interface RelevantHeaderProps {
  loading?: boolean;
}

const RelevantHeader: React.FC<RelevantHeaderProps> = ({ loading }) => {
  if (loading) {
    return (
      <div className="flex flex-row items-center justify-between ml-4 mt-4 md:mt-4 w-full max-w-lg">
        <Skeleton width="20px" height="20px" rounded />
        <Skeleton className="ml-2" width="100px" height="0.75rem" />
      </div>
    );
  }

  return (
    <SlideInAnimation
      duration={0.5}
      initialX={-100}
      className="flex flex-row items-center justify-between ml-4 mt-4 md:mt-4 w-full max-w-lg"
    >
      <div className="flex items-center">
        <Image
          src="/assets/img/logos/estrela.png"
          alt="Relevantes Logo"
          width={20}
          height={20}
          className="w-[1.25rem] h-[1.25rem]"
        />
        <h1 className="text-white font-bold ml-2 font-montserrat text-[0.75rem]">
          Relevantes
        </h1>
      </div>
    </SlideInAnimation>
  );
};

export default RelevantHeader;
