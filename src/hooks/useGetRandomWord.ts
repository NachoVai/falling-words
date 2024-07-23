// useGetRandomWord.ts
import { useState, useEffect, useCallback } from "react";
const words = [
  "sandia",
  "mora",
  "frutilla",
  "durazno",
  "manzana",
  "pera",
  "melon",
  "platano",
  "pepino",
  "naranja",
];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
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
