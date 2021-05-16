import PlayHeader from "../components/play-header";
import DefaultLayout from "../components/layout";
import { ReactElement } from "react";
import GameImage from "../components/game-image";

const Play = (): ReactElement => {
  return (
    <DefaultLayout header={<PlayHeader />}>
      <GameImage />
    </DefaultLayout>
  );
};

export default Play;
