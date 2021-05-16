import { Layout } from "antd";
import { ReactElement } from "react";
import styles from "./default-header.module.css";

const { Header } = Layout;

/**
 * Common page header for most pages
 */
const DefaultHeader = (): ReactElement => {
  return (
    <Header className={styles.header}>
      <h1 className={styles.headerTitle}>Where are they?</h1>
    </Header>
  );
};
export default DefaultHeader;
