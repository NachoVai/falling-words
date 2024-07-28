import { useEffect, useRef, RefObject } from "react";

const useInputFocus = (isFocused: boolean): RefObject<HTMLInputElement> => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return inputRef;
};

export default useInputFocus;
