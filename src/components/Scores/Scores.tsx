import { useEffect, useState } from "react";
import Card from "../Card/Card";
import CardBody from "../CardBody/CardBody";
import Button from "../Button/Button";
import "./scores.css";

type ScoresProps = {
  onButtonClick: (buttonName: string) => void;
};

// Define un tipo para la estructura de tus datos
type Score = {
  id: number;
  name: string;
  score: number;
};

function Scores({ onButtonClick }: ScoresProps) {
  const [data, setData] = useState<Score[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/scores")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: Score[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-5" id="highscores">
      <Card>
        <CardBody title="High Scores" description="Falling Words" />
        <ul>
          {data?.map((score) => (
            <li key={score.id}>{score.name + " " + score.score}</li>
          ))}
        </ul>
        <div className="d-flex flex-column align-items-center">
          <Button name="Start Game" onClick={() => onButtonClick("Game")} />
          <Button name="Menu" onClick={() => onButtonClick("Menu")} />
        </div>
      </Card>
    </div>
  );
}

export default Scores;
