import DefaultLayout from "../components/layout";
import DefaultHeader from "../components/default-header";
import LeaderBoard from "../components/leader-board";
import { ReactElement } from "react";

/**
 * A page to display current player record and leaderboard
 */
const Record = (): ReactElement => {
  return (
    <DefaultLayout header={<DefaultHeader />}>
      <LeaderBoard />
    </DefaultLayout>
  );
};

export default Record;
