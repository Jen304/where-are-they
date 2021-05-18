import { Card, Form, Input, Button } from "antd";
import { ReactElement, useState } from "react";
import useTextInput from "../../hooks/use-text-input";
import styles from "./player-record-form.module.css";

type PropsType = {
  submit: (name: string) => void;
};

/**
 * A form for player to enter their name and save their play record
 */
const PlayerRecordForm = ({ submit }: PropsType): ReactElement => {
  const { input, onInputChange } = useTextInput();

  const onFormSubmit = () => {
    submit(input);
  };
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Form onFinish={onFormSubmit}>
          <h3 className={styles.formItem}>Save your record</h3>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
          >
            <Input
              placeholder="Enter your name"
              className={`${styles.formItem} ${styles.formInput}`}
              onChange={onInputChange}
            />
          </Form.Item>
          <Button shape="round" className={styles.formButton} htmlType="submit">
            Save
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default PlayerRecordForm;
