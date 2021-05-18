import DefaultLayout from "../components/layout";
import DefaultHeader from "../components/default-header";
import LeaderBoard from "../components/leader-board";
import { ReactElement, useEffect, useState } from "react";
import useSWR from "swr";
import { notification } from "antd";
import PlayerRecordType from "../types/player";

/**
 * A page to display current player record and leaderboard
 */
const Record = (): ReactElement => {
  const { data, error } = useSWR("/api/top_records", (url) => {
    return fetch(url).then((r) => r.json());
  });

  // readable state
  const [playerRecord, setPlayerRecord] = useState({});
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("we are running on the client");
      const record = localStorage.getItem("playerRecord");
      if (record) {
        setPlayerRecord(record);
        console.log(playerRecord);
      }
    } else {
      console.log("we are running on the server");
    }
  }, []);
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
        {Object.entries(playerRecord).length > 0 && (
          <h1>Your last game was </h1>
        )}
        <LeaderBoard topRecords={data as PlayerRecordType[]} />
      </DefaultLayout>
    );
  }
};

export default Record;
