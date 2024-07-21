import Card from "../Card/Card";
import CardBody from "../CardBody/CardBody";
import Button from "../Button/Button";
import Table from "../Table/Table";
import "./scores.css";

type ScoresProps = {
  onButtonClick: (buttonName: string) => void;
};

function Scores(props: ScoresProps) {
  const { onButtonClick } = props;

  return (
    <section className="container mt-5" id="highscores">
      <Card>
        <header>
          <CardBody title="High Scores" description="Falling Words" />
        </header>
        <Table />
        <nav className="d-flex flex-column align-items-center">
          <Button name="Start Game" onClick={() => onButtonClick("Game")} />
          <Button name="Menu" onClick={() => onButtonClick("Menu")} />
        </nav>
      </Card>
    </section>
  );
}

export default Scores;
