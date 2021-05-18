import { Table } from "antd";
import { ReactElement } from "react";
import PlayerRecordType from "../../types/player";
import Card from "../card";

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
    <Card title="Leaderboard" button={{ label: "Replay", link: "/play" }}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Card>
  );
};

export default LeaderBoard;
