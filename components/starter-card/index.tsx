import { Card, Button } from "antd";
import { ReactElement } from "react";
import styles from "./card.module.css";

const GameStarterCard = (): ReactElement => {
  return (
    <Card className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>Find these characters</h3>
      <div className={styles.characterItemContainer}>
        <img
          className={styles.characterImage}
          src="character.jpg"
          alt="nekobasu"
        /> 
        <div><h4>Nekobasu</h4></div>
      </div>
      <div className={styles.characterItemContainer}>
        <img
          className={styles.characterImage}
          src="character.jpg"
          alt="nekobasu"
        /> 
        <div><h4>Nekobasu</h4></div>
      </div>
      <div className={styles.characterItemContainer}>
        <img
          className={styles.characterImage}
          src="character.jpg"
          alt="nekobasu"
        /> 
        <div><h4>Nekobasu</h4></div>
      </div>
      <Button type="primary" shape="round" className={styles.cardButton}>Start</Button>
    </Card>
  );
};

export default GameStarterCard;
