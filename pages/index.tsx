import Layout from "../components/layout";
import DefaultHeader from "../components/default-header";
import GameStarterCard from "../components/game-starter-card";
import { ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <Layout header={<DefaultHeader />}>
      <GameStarterCard />
      <h1>hello</h1>
    </Layout>
  );
};

export default Home;
