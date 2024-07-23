import { useState, useEffect, useRef } from "react";
import usePauseGame from "./usePauseGame";
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

export type FallingWord = {
  id: number;
  word: string;
  left: string;
  animationDuration: string;
  animationPlayState: string;
};

const useFallingWords = () => {
  const [fallingWords, setFallingWords] = useState<FallingWord[]>([]);
  const [isPaused, setIsPaused] = useState(true);
  const wordIdRef = useRef(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const newWord = {
        id: wordIdRef.current++,
        word: getRandomWord(),
        left: `${Math.random() * 90}%`,
        animationDuration: `${Math.random() * 4 + 4}s`,
        animationPlayState: "running",
      };
      setFallingWords((prevWords) => [...prevWords, newWord]);
    }, 1800); // Crea una nueva palabra cada 2 segundos

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  // Hook para pausar y reanudar el juego
  usePauseGame(isPaused, setFallingWords);

  const removeWord = (id: number) => {
    setFallingWords((prevWords) => prevWords.filter((word) => word.id !== id));
  };

  const resetWords = () => {
    setFallingWords([]);
    wordIdRef.current = 0;
  };

  const pauseGame = () => setIsPaused(true);
  const resumeGame = () => setIsPaused(false);

  return {
    fallingWords,
    removeWord,
    pauseGame,
    resumeGame,
    resetWords,
    isPaused,
  };
};

export default useFallingWords;
