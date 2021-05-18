import { ChangeEvent, useState } from "react";

type UseTextInputReturnType = {
  input: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * A hook to control text input value
 */
const useTextInput = (): UseTextInputReturnType => {
  const [input, setInput] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return {
    input,
    onInputChange,
  };
};

export default useTextInput;
