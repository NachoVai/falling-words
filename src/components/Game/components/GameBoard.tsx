import React, { useState, useEffect, useRef } from "react";
const words = ["apple", "banana", "cherry", "date", "elderberry"];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const GameBoard: React.FC = () => {
  const [fallingWords, setFallingWords] = useState<
    { id: number; word: string; left: string; animationDuration: string }[]
  >([]);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [lifes, setLifes] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const wordIdRef = useRef(0);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const newWord = {
        id: wordIdRef.current++,
        word: getRandomWord(),
        left: `${Math.random() * 90}%`,
        animationDuration: `${Math.random() * 5 + 5}s`,
      };
      setFallingWords((prevWords) => [...prevWords, newWord]);
    }, 2000); // Crea una nueva palabra cada 2 segundos

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserInput(value);

    const matchedWord = fallingWords.find(
      (word) => word.word.toLowerCase() === value.toLowerCase()
    );
    if (matchedWord) {
      setScore((prevScore) => prevScore + 100);
      setFallingWords((prevWords) =>
        prevWords.filter((word) => word.id !== matchedWord.id)
      );
      setUserInput("");
    }
  };

  const loseLife = () => {
    setLifes((prevLifes) => prevLifes - 1);
    if (lifes <= 1) {
      setIsPaused(true);
      alert("Game Over!");
    }
  };

  const handleAnimationEnd = (id: number) => {
    if (!isPaused) {
      setFallingWords((prevWords) =>
        prevWords.filter((word) => word.id !== id)
      );
      loseLife();
    }
  };

  return (
    <div id="game-board" className="m-md-4" ref={boardRef}>
      <div className="board">
        <div id="life-score" className="m-2">
          <span>
            Lifes: {lifes} Score: {score.toString().padStart(4, "0")}
          </span>
        </div>
        <div id="falling-words">
          {fallingWords.map(({ id, word, left, animationDuration }) => (
            <div
              key={id}
              className="falling-word"
              style={{ left, animationDuration }}
              onAnimationEnd={() => handleAnimationEnd(id)}
            >
              {word}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type the falling word..."
          className="user-input"
        />
      </div>
    </div>
  );
};

export default GameBoard;
