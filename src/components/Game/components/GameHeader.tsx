import Button from "../../Button/Button";

type GameHeaderProps = {
  onButtonClick: (buttonName: string) => void;
  pauseGame: () => void;
  resumeGame: () => void;
  restartGame: () => void;
  playStopBtn: string;
  setPlayStopBtn: React.Dispatch<React.SetStateAction<string>>;
};

function GameHeader(props: GameHeaderProps) {
  const {
    onButtonClick,
    pauseGame,
    resumeGame,
    restartGame,
    playStopBtn,
    setPlayStopBtn,
  } = props;

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
    <header className="container gap-2">
      <div className="w-100 align-items-center">
        <div className="col col-auto">
          <h1 className="mt-2">Falling Words</h1>
        </div>
        <nav className="d-flex">
          <Button name="Menu" onClick={() => onButtonClick("Menu")} />
          <Button name={playStopBtn} onClick={handlePlayPauseClick} />
          <Button name="Restart" onClick={restartGame} />
        </nav>
      </div>
    </header>
  );
}

export default GameHeader;
