import { useState, useEffect } from "react";

type HookParamsType = {
  isStop: boolean;
  onTimerStop: (time: number) => void;
};

type HookReturnType = {
  time: number;
};

/**
 * custom hook to control the timer
 */
const useTimer = ({ isStop, onTimerStop }: HookParamsType): HookReturnType => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timeInterval: ReturnType<typeof setInterval>;

    // run the timer until it stops
    if (!isStop) {
      timeInterval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (timeInterval) {
      clearInterval(timeInterval);
    }
    onTimerStop(time);

    // clear the timer when the component is terminated
    return () => {
      clearInterval(timeInterval);
    };
  }, [isStop]);

  return { time };
};

export default useTimer;
