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
      (word) => word.word === userInput.toLowerCase()
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

  const clearInput = () => {
    setUserInput("");
  };
  return { userInput, handleInputChange, clearInput };
};

export default useUserInput;
