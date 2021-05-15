import { Layout } from "antd";
import { ReactElement } from "react";
import Head from "next/head";
import styles from "./layout.module.css";

type PropsType = {
  title: string;
  children: ReactElement | ReactElement[];
};

/**
 * The layout of web app.
 * Contains head tag with some web page metadata
 */
const DefaultLayout = ({ title, children }: PropsType): ReactElement => {
  return (
    <>
      <Head>
        <title>{title ? title + " | " : ""} Where are you?</title>
      </Head>
      <Layout className={styles.layout}>{children}
      <div className={styles.backgroundContainer}></div></Layout>
    </>
  );
};

export default DefaultLayout;
