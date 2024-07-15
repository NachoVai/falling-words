import GameBoard from "./components/GameBoard";
import GameHeader from "./components/GameHeader";
import "./game.css";

type GameProps = {
  onButtonClick: (buttonName: string) => void;
};

function Game(props: GameProps) {
  const { onButtonClick } = props;
  return (
    <div className="container-fluid mt-4">
      <GameHeader onButtonClick={onButtonClick} />
      <GameBoard />
    </div>
  );
}

export default Game;
