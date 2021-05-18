import { Card } from "antd";
import { ComponentProps, ComponentType, ReactElement } from "react";
import styles from "./card.module.css";
import Button from "../button";

type PropsType = {
  title: string;
  button: ComponentProps<typeof Button>;
  children: ReactElement | ReactElement[];
};

/**
 * A card contains a title, content (child react element) and button link at the bottom
 */
const DefaultCard = ({ title, button, children }: PropsType): ReactElement => {
  return (
    <Card className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {children}
      <div className={styles.cardButtonContainer}>
        <Button {...button} />
      </div>
    </Card>
  );
};

export default DefaultCard;
