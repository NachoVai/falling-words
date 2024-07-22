import { Modal, Button } from "react-bootstrap";
import useFallingWords from "../../../hooks/useFallingWords";
import useScoreAndLives from "../../../hooks/useScoreAndLives";
import useUserInput from "../../../hooks/useUserInput";
import useSubmitScore from "../../../hooks/useSubmitScore";
import GameHeader from "./GameHeader";
import Scores from "../../Scores/Scores";
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
  const { userInput, handleInputChange } = useUserInput(
    fallingWords,
    removeWord,
    increaseScore
  );
  const { submitScore, loading, error } = useSubmitScore();
  const [showModal, setShowModal] = useState(false);
  const [name, setname] = useState("");

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
    // resumeGame();
  };

  const handleSubmit = () => {
    const trimmedName = name.trim();

    if (trimmedName === "" || trimmedName === null) {
      return alert("Debes ingresar un nickname válido");
    }

    console.log("name:", trimmedName);
    console.log("Final Score:", score);
    submitScore({ name: trimmedName, score });
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
        {/* Modal */}
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop="static"
          centered
        >
          <Modal.Header>
            <Modal.Title>Game Over</Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-4">
            Please enter your nickname to save your score or restart to try
            again <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter nickname"
              className="user-score-input mt-3"
              id="user-score-input"
              aria-label="Enter name"
              required
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Score"}
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleCloseModal();
                handleReset();
              }}
            >
              Restart
            </Button>
            {error && <p>Error: {error}</p>}
            <Button
              variant="terciary"
              onClick={() => {
                handleCloseModal();

                <Scores onButtonClick={onButtonClick} />;
              }}
            >
              Scores
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </div>
  );
}

export default GameBoard;
