import { useEffect, useState } from "react";

type HookParamsType = {
  defaultDisplay: boolean;
  changeDisplayCondition: () => boolean;
  triggerChangeValue: unknown;
};

const useDisplayController = ({
  defaultDisplay,
  changeDisplayCondition,
  triggerChangeValue,
}: HookParamsType): {
  isDisplay: boolean;
} => {
  const [isDisplay, setIsDisplay] = useState(defaultDisplay);

  useEffect(() => {
    if (changeDisplayCondition()) {
      setTimeout(() => {
        setIsDisplay(!defaultDisplay);
      }, 1000);
    }
  }, [triggerChangeValue]);
  return {
    isDisplay,
  };
};

export default useDisplayController;
