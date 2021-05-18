import { ReactElement, SetStateAction, Dispatch } from "react";
import timerHelper from "../../helpers/timer";
import useTimer from "../../hooks/use-timer";
import styles from "./timer.module.css";

type PropsType = {
  isGameDone: boolean;
  setPlayerRecord: Dispatch<SetStateAction<number>>;
};

/**
 * A timer to count the time player complete the game
 */
const Timer = ({ isGameDone, setPlayerRecord }: PropsType): ReactElement => {
  const { time } = useTimer({
    isStop: isGameDone,
    onTimerStop: setPlayerRecord,
  });
  return <h1 className={styles.timer}>{timerHelper.getFormatTime(time)}</h1>;
};

export default Timer;
