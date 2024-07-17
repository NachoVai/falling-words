import { useState, useEffect } from "react";
import { FallingWord } from "./useFallingWords";

const useUserInput = (
  fallingWords: FallingWord[],
  removeWord: (id: number) => void,
  increaseScore: (amount: number) => void
) => {
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const matchedWord = fallingWords.find(
      (word) => word.word.toLowerCase() === userInput.toLowerCase()
    );
    if (matchedWord) {
      increaseScore(100);
      removeWord(matchedWord.id);
      setUserInput("");
    }
  }, [userInput, fallingWords, removeWord, increaseScore]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return { userInput, handleInputChange };
};

export default useUserInput;
