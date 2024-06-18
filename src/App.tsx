import Card from "./components/Card/Card";
import CardBody from "./components/CardBody/CardBody";
import Button from "./components/Button/Button";
import "../src/assets/styles/App.css";

function App() {
  return (
    <>
      <Card>
        <CardBody
          title="Falling Words"
          description="A game to improve your tipying skills"
        />
        <div className="d-flex flex-column align-items-center">
          <Button name="Start Game" />
          <Button name="Scores" />
        </div>
      </Card>
    </>
  );
}

export default App;
