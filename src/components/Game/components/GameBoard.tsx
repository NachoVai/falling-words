import useFallingWords from "../../../hooks/useFallingWords";
import useScoreAndLives from "../../../hooks/useScoreAndLives";
import useUserInput from "../../../hooks/useUserInput";
import GameHeader from "./GameHeader";
import FallingWords from "./FallingWords";
import "../game.css";

type GameBoard = {
  onButtonClick: (buttonName: string) => void;
};

function GameBoard(props: GameBoard) {
  const { onButtonClick } = props;
  const { fallingWords, removeWord, pauseGame, resumeGame, isPaused } =
    useFallingWords();
  const { score, lifes, increaseScore, decreaseLife } = useScoreAndLives();
  const { userInput, handleInputChange } = useUserInput(
    fallingWords,
    removeWord,
    increaseScore
  );

  const handleAnimationEnd = (id: number) => {
    if (!isPaused) {
      removeWord(id);
      decreaseLife();
      if (lifes <= 1) {
        pauseGame();
        alert("Game Over!");
      }
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
            className="user-input"
            id="user-input"
          />
        </div>
      </div>
    </>
  );
}

export default GameBoard;
