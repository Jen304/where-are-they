import { Layout, Button } from "antd";
import { ReactElement } from "react";
import styles from "./play-header.module.css";
import CharacterListPopoverCard from "../character-item/character-list-popover-card";
import { CharacterType } from "../../types/game";

const { Header } = Layout;

type PropsType = {
  characters: CharacterType[];
};

/**
 * Header for Play page. Contains logo, counter and info button
 */
const PlayHeader = ({ characters }: PropsType): ReactElement => {
  return (
    <Header className={styles.header}>
      <h1 className={`${styles.headerItem} ${styles.headerTitle}`}>
        Where are they?
      </h1>
      <h1 className={`${styles.headerItem} ${styles.headerCounter}`}>00:00</h1>
      <CharacterListPopoverCard characters={characters}>
        <Button
          type="primary"
          shape="circle"
          className={`${styles.headerItem} ${styles.headerButton}`}
        >
          3
        </Button>
      </CharacterListPopoverCard>
    </Header>
  );
};
export default PlayHeader;
