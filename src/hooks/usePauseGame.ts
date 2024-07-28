import { useCallback, useEffect } from "react";
import { FallingWord } from "./useFallingWords";
const usePauseGame = (
  isPaused: boolean,
  setFallingWords: React.Dispatch<React.SetStateAction<FallingWord[]>>
) => {
  const userInput = document.getElementById("user-input") as HTMLInputElement;
  const handleUserInput = useCallback(() => {
    if (userInput) {
      userInput.disabled = isPaused;
      userInput.focus();
    }
  }, [userInput, isPaused]);
  useEffect(() => {
    setFallingWords((prevWords) =>
      prevWords.map((word) => ({
        ...word,
        animationPlayState: isPaused ? "paused" : "running",
      }))
    );
    handleUserInput();
  }, [isPaused, setFallingWords, handleUserInput]);

  return { handleUserInput };
};

export default usePauseGame;
