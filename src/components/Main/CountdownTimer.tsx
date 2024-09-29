// src/components/Main/CountdownTimer.tsx

import React, { useEffect, useState } from "react";
import { FaHourglass } from "react-icons/fa";

interface CountdownTimerProps {
  targetDate: string; // Tipo para a data alvo
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const countdown = setInterval(() => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(countdown);
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <div className="text-white font-bold">
      {timeLeft ? (
        <>
          {/* Versão para md e menores */}
          <div className="text-center flex flex-col items-center justify-center space-y-1 sm:space-y-2 md:space-y-1 lg:hidden xl:hidden 2xl:hidden z-50">
            <h2 className="text-gray-200 opacity-70 text-xs sm:text-sm md:text-xs font-bold">
              Tempo Restante:
            </h2>
            {/* Agrupando o ícone e o texto na mesma linha abaixo do título */}
            <span className="flex items-center space-x-0.5 max-w-[300px]">
              <FaHourglass className="text-gray-200 text-xs sm:text-sm md:text-xs" />
              <p className="text-gray-200 text-xs sm:text-sm md:text-xs font-bold z-50 whitespace-nowrap">
                {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
              </p>
            </span>
          </div>

          {/* Versão para lg e maiores */}
          <div className="hidden lg:flex text-center items-center justify-center space-x-0.5 sm:space-x-1 lg:space-x-1 xl:space-x-2 2xl:space-x-2 z-50">
            {/* Ícone do hourglass */}
            <FaHourglass className="text-gray-200 opacity-70 lg:text-sm xl:text-lg 2xl:text-lg" />
            <h2 className="text-gray-200 opacity-70 lg:text-sm xl:text-lg 2xl:text-lg font-bold">
              Tempo Restante:
            </h2>
            <p className="text-gray-200 lg:text-sm xl:text-lg 2xl:text-lg font-bold z-50">
              {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
            </p>
          </div>
        </>
      ) : (
        <span className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-lg 2xl:text-lg">
          Evento Concluído
        </span>
      )}
    </div>
  );
};

export default CountdownTimer;
