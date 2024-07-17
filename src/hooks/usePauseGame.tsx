import { useEffect } from "react";
import { FallingWord } from "./useFallingWords";
const usePauseGame = (
  isPaused: boolean,
  setFallingWords: React.Dispatch<React.SetStateAction<FallingWord[]>>
) => {
  useEffect(() => {
    const userInput = document.getElementById("user-input") as HTMLInputElement;

    setFallingWords((prevWords) =>
      prevWords.map((word) => ({
        ...word,
        animationPlayState: isPaused ? "paused" : "running",
      }))
    );

    if (userInput) {
      userInput.disabled = isPaused;
    }
  }, [isPaused, setFallingWords]);
};

export default usePauseGame;
