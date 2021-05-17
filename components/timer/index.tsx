import {
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
  Dispatch,
} from "react";
import styles from "./timer.module.css";

type PropsType = {
  isGameDone: boolean;
  setPlayerRecord: Dispatch<SetStateAction<number>>;
};

/**
 * The timer to count the time player complete the game
 */
const Timer = ({ isGameDone, setPlayerRecord }: PropsType): ReactElement => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let timeInterval;
    if (!isGameDone) {
      timeInterval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (timeInterval) {
      clearInterval(timeInterval);
    }
    setPlayerRecord(time);
    return () => {
      clearInterval(timeInterval);
    };
  }, [isGameDone]);
  const getFormatTime = (time) => {
    const seconds = Math.round(time % 60);
    const minutes = Math.round(Math.floor(time / 60) % 60);
    const hours = Math.round(time / 3600);
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(
      seconds
    )}`;
  };
  const formatNumber = (number) => {
    return number > 10 ? number : `0${number}`;
  };
  return <h1 className={styles.timer}>{getFormatTime(time)}</h1>;
};

export default Timer;
