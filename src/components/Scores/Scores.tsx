import Card from "../Card/Card";
import CardBody from "../CardBody/CardBody";
import Button from "../Button/Button";
import "./scores.css";

type ScoresProps = {
  onButtonClick: (buttonName: string) => void;
};

function Scores(props: ScoresProps) {
  const { onButtonClick } = props;

  return (
    <>
      <div className="container mt-5" id="highscores">
        <Card>
          <CardBody title="High Scores" description="Falling Words" />
          <div className="d-flex flex-column align-items-center">
            <Button name="Start Game" onClick={() => onButtonClick("Game")} />
            <Button name="Menu" onClick={() => onButtonClick("Menu")} />
          </div>
        </Card>
      </div>
    </>
  );
}

export default Scores;
