import GameBoard from "./components/GameBoard";
import "./game.css";

type GameProps = {
  onButtonClick: (buttonName: string) => void;
};

function Game(props: GameProps) {
  const { onButtonClick } = props;
  return (
    <section className="container-fluid mt-4">
      <GameBoard onButtonClick={onButtonClick} />
    </section>
  );
}

export default Game;
