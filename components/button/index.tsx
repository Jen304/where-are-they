import { Button } from "antd";
import { ReactElement, MouseEventHandler } from "react";
import styles from "./button.module.css";

type PropsType = {
  label: string;
  link?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
};

// A button to do a function (onClick) or go to another link (page)
const DefaultButton = ({
  label,
  link,
  className,
  onClick,
  htmlType,
}: PropsType): ReactElement => {
  if (link && onClick) {
    throw Error("Can not have link and onClick function at the same time.");
  }
  return (
    <Button
      shape="round"
      className={`${styles.button} ${className}`}
      href={link}
      onClick={onClick}
      htmlType={htmlType}
    >
      {label}
    </Button>
  );
};

export default DefaultButton;
