import { useState, useEffect, useRef, useCallback } from "react";
import usePauseGame from "./usePauseGame";
import useGetRandomWord from "./useGetRandomWord";

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
  const { words, loading, error } = useGetRandomWord();

  const getRandomWord = useCallback(() => {
    if (words.length > 0) {
      return words[Math.floor(Math.random() * words.length)];
    }
    return "loading...";
  }, [words]);

  useEffect(() => {
    if (isPaused || loading) return;

    const interval = setInterval(() => {
      const newWord = {
        id: wordIdRef.current++,
        word: getRandomWord(),
        left: `${Math.random() * 90}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
        animationPlayState: "running",
      };
      setFallingWords((prevWords) => [...prevWords, newWord]);
    }, 2100); // Crea una nueva palabra cada 2 segundos

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, loading, getRandomWord, words]);

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
    loading,
    error,
  };
};

export default useFallingWords;
