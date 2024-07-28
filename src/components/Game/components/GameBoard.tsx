import useFallingWords from "../../../hooks/useFallingWords";
import useScoreAndLives from "../../../hooks/useScoreAndLives";
import useUserInput from "../../../hooks/useUserInput";
import GameHeader from "./GameHeader";
import GameOverModal from "./GameOverModal";
import FallingWords from "./FallingWords";
import "../game.css";
import { useState } from "react";

type GameBoard = {
  onButtonClick: (buttonName: string) => void;
};

function GameBoard(props: GameBoard) {
  const { onButtonClick } = props;
  const {
    fallingWords,
    removeWord,
    pauseGame,
    resumeGame,
    resetWords,
    isPaused,
  } = useFallingWords();
  const { score, lifes, increaseScore, decreaseLife, resetScoreAndLives } =
    useScoreAndLives();
  const { userInput, handleInputChange, clearInput } = useUserInput(
    fallingWords,
    removeWord,
    increaseScore
  );
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleAnimationEnd = () => {
    if (!isPaused) {
      decreaseLife();
      alert("Haz perdido una vida");
      resetWords();
      if (lifes <= 1) {
        pauseGame();
        handleShowModal();
      }
    }
  };

  const handleReset = () => {
    resetWords();
    resetScoreAndLives();
    clearInput();
    // resumeGame();
  };

  return (
    <div>
      <GameHeader
        onButtonClick={onButtonClick}
        pauseGame={pauseGame}
        resumeGame={resumeGame}
        restartGame={handleReset}
      />
      <main id="game-board" className="m-md-4">
        <section className="board">
          <header id="life-score" className="m-2">
            <span>
              Lifes: {lifes} Score: {score.toString().padStart(4, "0")}
            </span>
          </header>
          <div id="falling-words">
            <FallingWords
              fallingWords={fallingWords}
              onAnimationEnd={handleAnimationEnd}
            />
          </div>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type the falling word..."
            className="user-input mb-2"
            id="user-input"
            aria-label="Type the falling word"
          />
        </section>
        <section>
          <GameOverModal
            showModal={showModal}
            closeModal={handleCloseModal}
            score={score}
            reset={handleReset}
            onButtonClick={onButtonClick}
          />
        </section>
      </main>
    </div>
  );
}

export default GameBoard;
