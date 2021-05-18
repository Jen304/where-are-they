import { useState } from "react";

type CallbackType = () => void;

type HookReturnType = {
  clearTimeout: () => void;
  startTimeout: (callback: CallbackType) => void;
};

const clearTimeoutList = (timeoutList) => {
  timeoutList.forEach((item) => {
    clearTimeout(item);
  });
};

/**
 * A custom hook to control the timeout list.
 * Use it when the component need to have some timeout control
 */
const useTimeout = (): HookReturnType => {
  const [timeoutList, setTimeoutList] = useState<
    ReturnType<typeof setTimeout>[]
  >([]);

  const clearTimeout = () => {
    clearTimeoutList(timeoutList);
    setTimeoutList([]);
  };
  const startTimeout = (callback: CallbackType) => {
    const newTimeout = setTimeout(callback, 5000);
    setTimeoutList([newTimeout, ...timeoutList]);
  };
  return {
    clearTimeout,
    startTimeout,
  };
};

export default useTimeout;
