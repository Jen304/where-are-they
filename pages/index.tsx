import Layout from "../components/layout";
import DefaultHeader from "../components/default-header";
import GameStarterCard from "../components/starter-card";
import { ReactElement } from "react";
import { GetStaticPropsResult } from "next";
import { GameType } from "../types/game";

/**
 * Fetch game data from database and pass to the home page
 */
const getStaticProps = async (): Promise<GetStaticPropsResult<unknown>> => {
  try {
    const response = await fetch("http://localhost:3000/api/games");
    const gameData = await response.json();
    return {
      props: { games: { ...gameData } },
    };
  } catch (e) {
    console.log(e);
  }
};

type PropsType = {
  games: GameType;
};

const Home = ({ games }: PropsType): ReactElement => {
  return (
    <Layout header={<DefaultHeader />}>
      <GameStarterCard characters={games.characters} />
    </Layout>
  );
};

export { getStaticProps };
export default Home;
