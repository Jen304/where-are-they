import DefaultLayout from "../components/layout";
import DefaultHeader from "../components/default-header";
import LeaderBoard from "../components/leader-board";
import { ReactElement } from "react";

const Record = (): ReactElement => {
  return (
    <DefaultLayout header={<DefaultHeader />}>
      <LeaderBoard />
    </DefaultLayout>
  );
};

export default Record;
