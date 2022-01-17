import React from 'react';
import useTimer from 'hooks/useTimer';
import { Text } from 'bubbles-uikit';

function Timer({ initHour, initMin }: { initHour: number; initMin: number }) {
  const [hours, minutes, seconds] = useTimer({ initHour, initMin });

  return (
    <Text fontSize="20px">
      {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} :{' '}
      {seconds < 10 ? `0${seconds}` : seconds}
    </Text>
  );
}

export default Timer;
