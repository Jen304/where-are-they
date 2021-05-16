import { Card, Form, Input, Button } from "antd";
import { ReactElement } from "react";
import styles from "./player-record-form.module.css";

const PlayerRecordForm = (): ReactElement => {
  return (
    <Card className={styles.container}>
      <Form>
        <h1 className={styles.formItem}>Save your record</h1>
        <Input
          placeholder="Enter your name"
          className={`${styles.formItem} ${styles.formInput}`}
        />
        <Button
          shape="round"
          className={styles.formButton}
          type="primary"
          htmlType="submit"
        >
          Save
        </Button>
      </Form>
    </Card>
  );
};

export default PlayerRecordForm;
