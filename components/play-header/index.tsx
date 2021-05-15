import { Layout, Button } from "antd";
import { ReactElement } from "react";
import styles from "./play-header.module.css";

const { Header } = Layout;

const PlayHeader = (): ReactElement => {
  return (
    <Header className={styles.header}>
      <h1 className={styles.headerTitle}>Where are they?</h1>
      <h1>00:00</h1>
      <Button type="primary" shape="circle">
        3
      </Button>
    </Header>
  );
};
export default PlayHeader;
