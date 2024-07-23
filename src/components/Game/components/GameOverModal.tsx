import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import useSubmitScore from "../../../hooks/useSubmitScore";

type GameOverBoardModalProps = {
  showModal: boolean;
  closeModal: () => void;
  score: number;
  reset: () => void;
  onButtonClick: (buttonName: string) => void;
};
function GameOverModal(props: GameOverBoardModalProps) {
  const { showModal, closeModal, score, reset, onButtonClick } = props;
  const [name, setname] = useState("");
  const { submitScore, loading, error } = useSubmitScore();

  const handleSubmit = () => {
    const trimmedName = name.trim();

    if (trimmedName === "" || trimmedName === null) {
      return alert("Debes ingresar un nickname válido");
    }

    console.log("nickname:", trimmedName);
    console.log("Final Score:", score);
    submitScore({ name: trimmedName, score });
    reset();
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={closeModal} backdrop="static" centered>
      <Modal.Header>
        <Modal.Title>Game Over</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <header>
          Please enter your nickname to save your score or restart to try again
        </header>

        <section>
          <p>Your Score is : {score}</p>
        </section>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter nickname"
          className="user-nickname-input mt-2"
          id="user-nickname-input"
          aria-label="Enter name"
          required
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleSubmit}
          disabled={loading}
          className="btn btn-lg mt-4"
        >
          {loading ? "Submitting..." : "Submit Score"}
        </Button>
        <Button
          variant="primary"
          className="btn btn-lg"
          onClick={() => {
            closeModal();
            reset();
          }}
        >
          Restart
        </Button>
        <Button
          variant="terciary"
          className="btn btn-lg"
          onClick={() => {
            onButtonClick("Scores");
            closeModal();
          }}
        >
          Scores
        </Button>
        {error && <p>Error en el servidor: {error}</p>}
      </Modal.Footer>
    </Modal>
  );
}

export default GameOverModal;
