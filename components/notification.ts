import { notification } from "antd";

type MessageParamsType = {
  type?: "success" | "error" | "info" | "warning";
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
  if (type) {
    notification[type]({
      message,
      description,
      placement: "bottomRight",
    });
  } else {
    notification.open({
      message,
      description,
      placement: "bottomRight",
    });
  }
};

// open notification with sucess icon
const openSuccessMessage = ({
  message,
  description,
}: MessageParamsType): void => {
  openNotification({
    type: "success",
    message,
    description,
  });
};

// open notification with error icon
const openErrorMessage = ({
  message,
  description,
}: MessageParamsType): void => {
  openNotification({
    type: "error",
    message,
    description,
  });
};

export { openSuccessMessage, openErrorMessage };
export default openNotification;
