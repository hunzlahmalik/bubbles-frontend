import React from 'react';
import useTimer from 'hooks/useTimer';

function Timer({ initHour, initMin }: { initHour: number; initMin: number }) {
  const [hours, minutes, seconds] = useTimer({ initHour, initMin });

  return (
    <p>
      {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
}

export default Timer;
