import Card from "../Card/Card";
import CardBody from "../CardBody/CardBody";
import Button from "../Button/Button";
import "./menu.css";

function Menu() {
  return (
    <>
      <div className="container mt-5" id="menu">
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
      </div>
    </>
  );
}

export default Menu;
