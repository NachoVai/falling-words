import { useState } from "react";
import Button from "../../Button/Button";

type GameHeaderProps = {
  onButtonClick: (buttonName: string) => void;
  pauseGame: () => void;
  resumeGame: () => void;
  restartGame: () => void;
};

function GameHeader(props: GameHeaderProps) {
  const { onButtonClick, pauseGame, resumeGame, restartGame } = props;
  const [playStopBtn, setPlayStopBtn] = useState("Start");

  const handlePlayPauseClick = () => {
    if (playStopBtn === "Pause") {
      onButtonClick("Pause");
      pauseGame();
      setPlayStopBtn("Play");
    } else {
      onButtonClick("Play");
      resumeGame();
      setPlayStopBtn("Pause");
    }
  };

  return (
    <div className="container gap-2">
      <div className="col col-auto">
        <h1>Falling Words</h1>
      </div>
      <div className="col col-auto">
        <Button name="Menu" onClick={() => onButtonClick("Menu")} />
      </div>
      <div className="col col-auto">
        <Button name={playStopBtn} onClick={handlePlayPauseClick} />
      </div>
      <div className="col col-auto">
        <Button name="Restart" onClick={restartGame} />
      </div>
    </div>
  );
}

export default GameHeader;
