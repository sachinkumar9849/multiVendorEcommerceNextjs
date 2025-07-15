import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const FlashSaleCountdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 2,
    minutes: 12,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center  space-x-2 mb-6">
      <span className="text-[12px] font-medium text-gray-600">
        Closing in :
      </span>

      {timeLeft.days > 0 && (
        <>
          <div className="bg-gray-200 rounded-sm px-2 py-0 min-w-[30px] text-center">
            <span className="text-[14px] font-bold text-gray-800">
              {formatTime(timeLeft.days)}
            </span>
          </div>
          <span className="text-xl font-bold text-gray-600">:</span>
        </>
      )}

      <div className="bg-gray-200 rounded-sm px-2 py-0 min-w-[30px] text-center">
        <span className="text-[14px] font-bold text-gray-800">
          {formatTime(timeLeft.hours)}
        </span>
      </div>

      <span className="text-xl font-bold text-gray-600">:</span>

      <div className="bg-gray-200 rounded-sm px-2 py-0 min-w-[30px] text-center">
        <span className="text-[14px] font-bold text-gray-800">
          {formatTime(timeLeft.minutes)}
        </span>
      </div>

      <span className="text-xl font-bold text-gray-600">:</span>

      <div className="bg-gray-200 rounded-sm px-2 py-0 min-w-[30px] text-center">
        <span className="text-[14px] font-bold text-gray-800">
          {formatTime(timeLeft.seconds)}
        </span>
      </div>
    </div>
  );
};

export default FlashSaleCountdown;
