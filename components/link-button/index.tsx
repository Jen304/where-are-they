import { Button } from "antd";
import { ReactElement } from "react";
import styles from "./link-button.module.css";

type PropsType = {
  label: string;
  link: string;
  className?: string;
};

const LinkButton = ({ label, link, className }: PropsType): ReactElement => {
  return (
    <Button
      shape="round"
      className={`${styles.button} ${className}`}
      href={link}
    >
      {label}
    </Button>
  );
};

export default LinkButton;
