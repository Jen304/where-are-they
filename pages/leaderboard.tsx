import DefaultLayout from "../components/layout";
import DefaultHeader from "../components/default-header";
import LeaderBoard from "../components/leader-board";
import { ReactElement } from "react";
import useSWR from "swr";
import { notification } from "antd";
import PlayerRecordType from "../types/player";
import PlayerRecord from "../components/player-record";

/**
 * A page to display current player record and leaderboard
 */
const Record = (): ReactElement => {
  const { data, error } = useSWR("/api/records", (url) => {
    return fetch(url).then((r) => r.json());
  });

  if (error) {
    notification.open({
      message: "Fail to load data",
    });
  }
  if (!data) {
    return <div>loading...</div>;
  } else {
    console.log(data);
    return (
      <DefaultLayout header={<DefaultHeader />}>
        <PlayerRecord />
        <LeaderBoard topRecords={data as PlayerRecordType[]} />
      </DefaultLayout>
    );
  }
};

export default Record;
