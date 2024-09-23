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
        <div className="text-center flex items-center justify-center space-x-2 z-50"> {/* Flex container para alinhamento em linha */}
        <FaHourglass className="text-gray-200 opacity-70 text-lg" /> {/* Ícone do hourglass */}
        <h2 className="text-gray-200 opacity-70 text-lg font-bold">Tempo Restante:</h2>
        <p className="text-gray-200 text-lg font-bold z-50">
          {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </p>
      </div>
      ) : (
        <span>Evento Concluído</span>
      )}
    </div>
  );
};

export default CountdownTimer;
