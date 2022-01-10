import React, { useState, useEffect } from 'react';

function Timer({ initHour, initMin }: { initHour: number; initMin: number }) {
  const [hours, setHours] = useState(initHour);
  const [minutes, setMinutes] = useState(initMin);
  const [seconds, setSeconds] = useState(0);

  function updateTime() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      if (seconds === 0) {
        if (minutes === 0) {
          setHours(hours - 1);
          setMinutes(59);
        } else {
          setMinutes(minutes - 1);
        }

        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }
  }

  useEffect(() => {
    const token = setTimeout(updateTime, 1000);

    return function cleanUp() {
      clearTimeout(token);
    };
  });

  return (
    <p>
      {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
}

export default Timer;
