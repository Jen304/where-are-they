import { ReactElement } from "react";
import styles from "./logo.module.css";

/**
 * Logo of the web app
 */
const Logo = (): ReactElement => {
  return (
    <a href="/">
      <div className={styles.logo}>
        {"WHERE'"} <p className={styles.whiteText}>RE THEY?</p>
      </div>
    </a>
  );
};

export default Logo;
