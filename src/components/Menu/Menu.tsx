import Card from "../Card/Card";
import CardBody from "../CardBody/CardBody";
import Button from "../Button/Button";
import "./menu.css";

type MenuProps = {
  onButtonClick: (buttonName: string) => void;
};

function Menu(props: MenuProps) {
  const { onButtonClick } = props;

  return (
    <>
      <div className="container mt-5" id="menu">
        <Card>
          <CardBody
            title="Falling Words"
            description="A game to improve your tipying skills"
          />
          <div className="d-flex flex-column align-items-center">
            <Button name="Start Game" onClick={() => onButtonClick("Game")} />
            <Button name="Scores" onClick={() => onButtonClick("Scores")} />
          </div>
        </Card>
      </div>
    </>
  );
}

export default Menu;
