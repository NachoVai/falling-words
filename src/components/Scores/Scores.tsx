import useScores from "../../hooks/useScores";
import Card from "../Card/Card";
import CardBody from "../CardBody/CardBody";
import Button from "../Button/Button";
import "./scores.css";

type ScoresProps = {
  onButtonClick: (buttonName: string) => void;
};

function Scores(props: ScoresProps) {
  const { onButtonClick } = props;
  const { data, loading, error } = useScores();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5" id="highscores">
      <Card>
        <CardBody title="High Scores" description="Falling Words" />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((score) => (
              <tr key={score.id}>
                <td>{score.name}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex flex-column align-items-center">
          <Button name="Start Game" onClick={() => onButtonClick("Game")} />
          <Button name="Menu" onClick={() => onButtonClick("Menu")} />
        </div>
      </Card>
    </div>
  );
}

export default Scores;
