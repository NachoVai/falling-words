import { useState } from "react";
import Button from "../../Button/Button";

type GameHeaderProps = {
  onButtonClick: (buttonName: string) => void;
};

function GameHeader(props: GameHeaderProps) {
  const { onButtonClick } = props;
  const [playStopBtn, setPlayStopBtn] = useState("Play");

  return (
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
  );
}

export default GameHeader;
