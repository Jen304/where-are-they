import { Layout } from "antd";
import { ReactElement } from "react";
import styles from "./default-header.module.css";
import Logo from "../logo";

const { Header } = Layout;

/**
 * Common page header for most pages
 */
const DefaultHeader = (): ReactElement => {
  return (
    <Header className={styles.header}>
      <Logo />
    </Header>
  );
};
export default DefaultHeader;
