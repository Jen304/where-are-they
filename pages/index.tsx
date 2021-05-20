import Layout from "../components/layout";
import DefaultHeader from "../components/default-header";
import GameStarterCard from "../components/starter-card";
import { ReactElement } from "react";
import { GetStaticPropsResult } from "next";
import { GameType } from "../types/game";
import styles from "../styles/home-page.module.css";
import db from "../db";

/**
 * Fetch game data from database and pass to the home page
 */
const getStaticProps = async (): Promise<
  GetStaticPropsResult<{
    games: GameType;
  }>
> => {
  let result = {
    props: {
      games: null,
    },
  };

  try {
    // get data from database
    const gameData = await db.getGames();

    result = {
      props: { games: { ...gameData } },
    };
  } catch (e) {
    console.log(e);
  }
  return result;
};

type PropsType = {
  games: GameType;
};

const Home = ({ games }: PropsType): ReactElement => {
  return (
    <Layout header={<DefaultHeader />}>
      <div className={styles.mainContainer}>
        <GameStarterCard characters={games.characters} />
      </div>
    </Layout>
  );
};

export { getStaticProps };
export default Home;
