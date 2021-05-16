import { Card } from "antd";
import { ReactElement } from "react";
import styles from "./leader-board.module.css";

const LeaderBoard = (): ReactElement => {
  return <Card title="Leader board" className={styles.boardContainer}></Card>;
};

export default LeaderBoard;
