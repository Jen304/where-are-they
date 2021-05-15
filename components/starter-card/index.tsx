import { Card, Button } from "antd";
import { ReactElement } from "react";
import styles from "./card.module.css";
import CharacterItemList from "../character-item-list";

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
