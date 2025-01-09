'use client';
import React, { useState, useEffect } from 'react';
import { Timer as TimerIcon } from 'lucide-react';

interface TimerProps {
  initialMinutes: number;
  initialSeconds: number;
  onTimeEnd?: () => void;
}

const TimerComp: React.FC<TimerProps> = ({
  initialMinutes,
  initialSeconds,
  onTimeEnd,
}) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(timer);
        onTimeEnd?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds, onTimeEnd]);

  return (
    <div className="flex items-center justify-center gap-2 text-gray-600">
      <TimerIcon className="w-4 h-4" />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};

export default TimerComp;
