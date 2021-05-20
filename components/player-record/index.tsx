import { ReactElement } from "react";
import timer from "../../helpers/timer";
import usePlayerRecord from "../../hooks/use-player-record";
import styles from "./player-record.module.css";

/**
 * Display player latest record
 */
const PlayerRecord = (): ReactElement => {
  const { playerRecord } = usePlayerRecord();

  if (playerRecord) {
    return (
      <h3 className={styles.playerRecord}>
        Hey {`${playerRecord.name}`}! Your last record was{" "}
        {timer.getFormatTime(playerRecord.time)}.
      </h3>
    );
  } else {
    return <div className={styles.playerRecord}></div>;
  }
};

export default PlayerRecord;
