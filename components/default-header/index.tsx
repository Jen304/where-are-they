import { Layout } from "antd";
import { ReactElement } from "react";
import styles from "./default-header.module.css";

const { Header } = Layout;

const DefaultHeader = (): ReactElement => {
  return <Header className={styles.header}>Where are they?</Header>;
};
export default DefaultHeader;
