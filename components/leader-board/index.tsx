import { Card, Table, Pagination } from "antd";
import { ReactElement } from "react";
import PlayerRecordType from "../../types/player";
import styles from "./leader-board.module.css";

type PropsType = {
  topRecords: PlayerRecordType[];
};

/**
 * A board of top players
 */
const LeaderBoard = ({ topRecords }: PropsType): ReactElement => {
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
  const data = topRecords.map((record, index) => {
    return {
      name: record.name,
      place: index + 1,
      time: record.time,
      key: record.id,
    };
  });
  return (
    <Card title="Leader board" className={styles.boardContainer}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

export default LeaderBoard;
