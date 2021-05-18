import { notification } from "antd";

type MessageParamsType = {
  type: "success" | "error" | "info" | "warning";
  message: string;
  description?: string;
};

/**
 * A function to open notification on the bottom right of the page
 * @note It's not a component
 */
const openNotification = ({
  type,
  message,
  description,
}: MessageParamsType): void => {
  notification[type]({
    message,
    description,
    placement: "bottomRight",
  });
};

export default openNotification;
