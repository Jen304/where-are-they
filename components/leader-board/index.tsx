import { Card, Table } from "antd";
import { ReactElement } from "react";
import styles from "./leader-board.module.css";

/**
 * A board of top players
 */
const LeaderBoard = (): ReactElement => {
  const columns = [
    {
      title: "Top",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
  ];
  const data = [
    {
      key: 1,
      place: 1,
      name: "Jen",
      time: 60,
    },
  ];
  return (
    <Card title="Leader board" className={styles.boardContainer}>
      <Table columns={columns} dataSource={data}></Table>
    </Card>
  );
};

export default LeaderBoard;
