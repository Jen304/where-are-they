import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement } from "react";

const Play = (): ReactElement => {
  return (
    <DefaultLayout header={<PlayHeader />}>
      <h1>Hello</h1>
    </DefaultLayout>
  );
};

export default Play;
