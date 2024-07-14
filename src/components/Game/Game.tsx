import { useState } from "react";
import Button from "../Button/Button";
import GameBoard from "./components/GameBoard";
import "./game.css";

type GameProps = {
  onButtonClick: (buttonName: string) => void;
};

function Game(props: GameProps) {
  const { onButtonClick } = props;
  const [playStopBtn, setPlayStopBtn] = useState("Pause");

  return (
    <div className="container-fluid mt-4">
      <div className="container">
        <div className="col col-auto">
          <Button name="Menu" onClick={() => onButtonClick("Menu")} />
        </div>
        <div className="col">
          <h1>Falling Words</h1>
        </div>
        <div className="col col-auto">
          <Button
            name={playStopBtn}
            onClick={() => {
              if (playStopBtn === "Pause") {
                onButtonClick("Pause");
                setPlayStopBtn("Play");
              } else if (playStopBtn === "Play") {
                onButtonClick("Play");
                setPlayStopBtn("Pause");
              }
            }}
          />
        </div>
      </div>
      <GameBoard />
    </div>
  );
}

export default Game;
