import { Modal, Button } from "react-bootstrap";
import useFallingWords from "../../../hooks/useFallingWords";
import useScoreAndLives from "../../../hooks/useScoreAndLives";
import useUserInput from "../../../hooks/useUserInput";
import GameHeader from "./GameHeader";
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
  const [showModal, setShowModal] = useState(false);
  const [nickname, setNickname] = useState("");

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

  const handleSave = () => {
    console.log("Nickname:", nickname);
    console.log("Final Score:", score);
    // Aquí puedes agregar lógica adicional para manejar el guardado del nombre y el puntaje
  };

  const handleReset = () => {
    resetWords();
    resetScoreAndLives();
    resumeGame();
  };

  return (
    <>
      <GameHeader
        onButtonClick={onButtonClick}
        pauseGame={pauseGame}
        resumeGame={resumeGame}
        restartGame={handleReset}
      />
      <div id="game-board" className="m-md-4">
        <div className="board">
          <div id="life-score" className="m-2">
            <span>
              Lifes: {lifes} Score: {score.toString().padStart(4, "0")}
            </span>
          </div>
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
          />
        </div>
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
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter nickname"
              className="user-score-input mt-4"
              id="user-score-input"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleSave}>
              Save
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
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default GameBoard;
