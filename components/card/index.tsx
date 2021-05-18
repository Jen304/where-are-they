import { Card } from "antd";
import { ReactElement } from "react";
import styles from "./card.module.css";
import LinkButton from "../link-button";

type PropsType = {
  title: string;
  buttonLink: string;
  buttonLabel: string;
  children: ReactElement | ReactElement[];
};

/**
 * A card contains a title, content (child react element) and button link at the bottom
 */
const DefaultCard = ({
  title,
  buttonLink,
  buttonLabel,
  children,
}: PropsType): ReactElement => {
  return (
    <Card className={styles.cardContainer}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {children}
      <div className={styles.cardButtonContainer}>
        <LinkButton label={buttonLabel} link={buttonLink} />
      </div>
    </Card>
  );
};

export default DefaultCard;
