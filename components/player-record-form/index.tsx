import { Form, Input } from "antd";
import { ReactElement } from "react";
import useTextInput from "../../hooks/use-text-input";
import styles from "./player-record-form.module.css";
import Card from "../card";
import Button from "../button";

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
      <Card title="Save your record" button={false}>
        <Form onFinish={onFormSubmit}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your name!",
              },
            ]}
            className={styles.formItem}
          >
            <Input
              placeholder="Enter your name"
              className={styles.formInput}
              onChange={onInputChange}
            />
          </Form.Item>
          <Form.Item className={styles.formItem}>
            <Button
              label="Save"
              htmlType="submit"
              className={styles.formButton}
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default PlayerRecordForm;
