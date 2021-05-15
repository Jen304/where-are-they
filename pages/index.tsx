import Layout from "../components/layout";
import DefaultHeader from "../components/default-header";
import GameStarterCard from "../components/starter-card";
import { ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <Layout header={<DefaultHeader />}>
      <GameStarterCard />
    </Layout>
  );
};

export default Home;
