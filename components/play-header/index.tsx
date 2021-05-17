import { Layout, Button } from "antd";
import { Dispatch, ReactElement, SetStateAction } from "react";
import styles from "./play-header.module.css";
import CharacterListPopoverCard from "../character-item/character-list-popover-card";
import { CharacterType } from "../../types/game";
import Timer from "../timer";
import Logo from "../logo";

const { Header } = Layout;

type PropsType = {
  characters: CharacterType[];
  characterLeft: number;
  setPlayerRecord: Dispatch<SetStateAction<number>>;
};

/**
 * Header for Play page. Contains logo, counter and info button
 */
const PlayHeader = ({
  characters,
  characterLeft,
  setPlayerRecord,
}: PropsType): ReactElement => {
  const isGameDone = () => {
    return characterLeft == 0;
  };
  return (
    <Header className={styles.header}>
      <Logo/>
      <div className={`${styles.headerItem} ${styles.headerCounter}`}>
        <Timer isGameDone={isGameDone()} setPlayerRecord={setPlayerRecord} />
      </div>
      <CharacterListPopoverCard characters={characters}>
        <Button
          type="primary"
          shape="circle"
          className={`${styles.headerItem} ${styles.headerButton}`}
        >
          {characterLeft}
        </Button>
      </CharacterListPopoverCard>
    </Header>
  );
};
export default PlayHeader;
