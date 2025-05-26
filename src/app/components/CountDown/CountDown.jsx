import { useState, useEffect } from 'react';
import {
  Container,
  PlayPauseBtn,
  TimerDisplay,
} from './CountDown.style';

const CountdownStopwatch = ({ isChanged, stopCounter }) => {
  const [seconds, setSeconds] = useState(60);
  const [isPause, setPause] = useState(false);

  useEffect(() => {
    if (seconds > 0 && isPause) {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [seconds, isPause]);

  useEffect(() => {
    setPause(false);
    if (stopCounter) {
      setSeconds(0);
    } else {
      setSeconds(60);
    }
  }, [isChanged, stopCounter]);

  return (
    <Container>
      <TimerDisplay>{`${seconds === 0 ? 'Timeout!' : `${seconds} sec`}`}</TimerDisplay>
      {!stopCounter && (
        <>
          {isPause ? (
            <PlayPauseBtn onClick={() => setPause(!isPause)} src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/pause-button.png`} alt="PauseImg"/>
          ) : (
            <PlayPauseBtn onClick={() => setPause(!isPause)} src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/play-button.png`} alt="PlayImg"/>
          )}
        </>
      )}
      
    </Container>);
};

export default CountdownStopwatch;