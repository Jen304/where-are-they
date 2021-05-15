import { Card } from "antd";
import styles from "./card.module.css";

const GameStarterCard = () => {
  return (
    <Card className={styles.cardContainer}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default GameStarterCard;
