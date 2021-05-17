import { Card, Button } from "antd";
import { ReactElement } from "react";
import styles from "./card.module.css";
import CharacterItemList from "../character-item-list";
import { CharacterType } from "../../types/game";
import LinkButton from "../link-button";

type PropsType = {
  characters: CharacterType[];
};

/**
 * A card displays the game information before player start the game
 */
const StarterCard = ({ characters }: PropsType): ReactElement => {
  return (
    <Card className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>Find these characters</h3>
      <CharacterItemList characters={characters} />
      <LinkButton label="Start" link="/play" />
    </Card>
  );
};

export default StarterCard;