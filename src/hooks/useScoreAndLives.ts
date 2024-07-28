import { useState } from "react";

const useScoreAndLives = () => {
  const [score, setScore] = useState(0);
  const [lifes, setLifes] = useState(1);

  const increaseScore = (amount: number) =>
    setScore((prevScore) => prevScore + amount);
  const decreaseLife = () => setLifes((prevLifes) => prevLifes - 1);

  const resetScoreAndLives = () => {
    setScore(0);
    setLifes(1);
  };

  return { score, lifes, increaseScore, decreaseLife, resetScoreAndLives };
};

export default useScoreAndLives;
