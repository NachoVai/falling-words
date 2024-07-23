// useGetRandomWord.ts
import { useState, useEffect, useCallback } from "react";
import { getRandomWord } from "./useFirstRandomWord";
const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 6) + 4;
};

const useGetRandomWord = () => {
  const [randomWord, setRandomWord] = useState(getRandomWord());

  const fetchRandomWord = useCallback(async () => {
    const response = await fetch(
      `https://random-word-api.herokuapp.com/word?lang=es&number=1&length=${getRandomNumber()}`
    );
    const data = await response.json();
    setRandomWord(data[0]);
  }, []);

  useEffect(() => {
    fetchRandomWord();
  }, [fetchRandomWord]);

  return { randomWord, fetchRandomWord };
};

export default useGetRandomWord;
