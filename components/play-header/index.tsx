import { Layout } from "antd";
import { Dispatch, ReactElement, SetStateAction } from "react";
import styles from "./play-header.module.css";
import CharacterListPopoverCard from "../character-list-popover-card";
import { CharacterStateListType } from "../../types/game";
import Timer from "../timer";
import Logo from "../logo";
import CharacterCountButton from "../character-count-button";

const { Header } = Layout;

type PropsType = {
  characters: CharacterStateListType;
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
      <Logo />
      <div className={`${styles.headerItem} ${styles.headerCounter}`}>
        <Timer isGameDone={isGameDone()} setPlayerRecord={setPlayerRecord} />
      </div>
      <CharacterListPopoverCard characters={Object.values(characters)}>
        <CharacterCountButton characterLeft={characterLeft} />
      </CharacterListPopoverCard>
    </Header>
  );
};
export default PlayHeader;
