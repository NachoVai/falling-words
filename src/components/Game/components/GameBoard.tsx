import React, { useState } from "react";
import "../game.css";
import useFallingWords from "../../../hooks/useFallingWords";
import GameHeader from "./GameHeader";

type GameBoard = {
  onButtonClick: (buttonName: string) => void;
};

function GameBoard(props: GameBoard) {
  const { onButtonClick } = props;
  const { fallingWords, removeWord, pauseGame, resumeGame, isPaused } =
    useFallingWords();
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [lifes, setLifes] = useState(3);
  console.log({ pauseGame });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUserInput(value);

    const matchedWord = fallingWords.find(
      (word) => word.word.toLowerCase() === value.toLowerCase()
    );
    if (matchedWord) {
      setScore((prevScore) => prevScore + 100);
      removeWord(matchedWord.id);
      setUserInput("");
    }
  };

  const loseLife = () => {
    setLifes((prevLifes) => prevLifes - 1);
    if (lifes <= 1) {
      pauseGame();
      alert("Game Over!");
    }
  };

  const handleAnimationEnd = (id: number) => {
    if (!isPaused) {
      removeWord(id);
      loseLife();
    }
  };

  return (
    <>
      <GameHeader
        onButtonClick={onButtonClick}
        pauseGame={pauseGame}
        resumeGame={resumeGame}
      />
      <div id="game-board" className="m-md-4">
        <div className="board">
          <div id="life-score" className="m-2">
            <span>
              Lifes: {lifes} Score: {score.toString().padStart(4, "0")}
            </span>
          </div>
          <div id="falling-words">
            {fallingWords.map(
              ({ id, word, left, animationDuration, animationPlayState }) => (
                <div
                  key={id}
                  className="falling-word"
                  style={{ left, animationDuration, animationPlayState }}
                  onAnimationEnd={() => handleAnimationEnd(id)}
                >
                  {word}
                </div>
              )
            )}
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
    </>
  );
}

export default GameBoard;
