import { Card, Button } from "antd";
import { ReactElement } from "react";
import styles from "./card.module.css";
import CharacterItemList from "../character-item-list";

/**
 * A card displays the game information before player start the game
 */
const StarterCard = (): ReactElement => {
  return (
    <Card className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>Find these characters</h3>
      <CharacterItemList />

      <Button type="primary" shape="round" className={styles.cardButton}>
        Start
      </Button>
    </Card>
  );
};

export default StarterCard;
