import { Card, Form, Input, Button } from "antd";
import { ReactElement, useState } from "react";
import styles from "./player-record-form.module.css";

const PlayerRecordForm = ({ submit }): ReactElement => {
  const [name, setName] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onFormSubmit = () => {
    submit(name);
  };
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Form onFinish={onFormSubmit}>
          <h1 className={styles.formItem}>Save your record</h1>
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
              onChange={onNameChange}
            />
          </Form.Item>
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
    </div>
  );
};

export default PlayerRecordForm;
